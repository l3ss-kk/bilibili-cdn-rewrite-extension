import {
  CDN_OPTIONS,
  DEFAULT_CDN_ID,
  buildRedirectRules,
  getCdnById,
  getDynamicRuleIds
} from './cdn-rules.js';

const STORAGE_KEY = 'targetCdn';

async function getTargetCdnId() {
  const values = await chrome.storage.local.get({ [STORAGE_KEY]: DEFAULT_CDN_ID });
  return getCdnById(values[STORAGE_KEY]).id;
}

async function applyRules(targetId) {
  const target = getCdnById(targetId);
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: getDynamicRuleIds(),
    addRules: buildRedirectRules(target.id)
  });
  await chrome.storage.local.set({ [STORAGE_KEY]: target.id });
  return target;
}

async function getState() {
  const targetId = await getTargetCdnId();
  return {
    selected: targetId,
    options: CDN_OPTIONS
  };
}

chrome.runtime.onInstalled.addListener(() => {
  getTargetCdnId().then(applyRules);
});

chrome.runtime.onStartup.addListener(() => {
  getTargetCdnId().then(applyRules);
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message || !message.type) return false;

  (async () => {
    if (message.type === 'getState') {
      sendResponse({ ok: true, state: await getState() });
      return;
    }

    if (message.type === 'setTargetCdn') {
      const target = await applyRules(message.targetId);
      sendResponse({ ok: true, selected: target.id });
      return;
    }

    sendResponse({ ok: false, error: 'unknown message' });
  })().catch((error) => {
    sendResponse({ ok: false, error: String(error?.message || error) });
  });

  return true;
});
