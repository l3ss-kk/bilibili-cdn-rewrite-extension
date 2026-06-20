function sendMessage(message) {
  return chrome.runtime.sendMessage(message);
}

function setStatus(text) {
  document.getElementById('status').textContent = text;
}

function createOption(option, selected) {
  const label = document.createElement('label');
  label.className = 'option';

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'cdn';
  input.value = option.id;
  input.checked = option.id === selected;

  const text = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = option.label;

  const note = document.createElement('span');
  note.textContent = option.note;

  text.append(title, note);
  label.append(input, text);
  return label;
}

async function reloadActiveBilibiliTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return false;
  if (!/^https:\/\/www\.bilibili\.com\//.test(tab.url || '')) return false;

  await chrome.tabs.reload(tab.id);
  return true;
}

async function selectCdn(targetId) {
  setStatus('正在切换...');
  const response = await sendMessage({ type: 'setTargetCdn', targetId });

  if (!response?.ok) {
    setStatus(`切换失败：${response?.error || '未知错误'}`);
    return;
  }

  const reloaded = await reloadActiveBilibiliTab();
  setStatus(reloaded ? '已切换并刷新当前 B 站页面。' : '已切换，刷新 B 站页面后生效。');
}

async function init() {
  const response = await sendMessage({ type: 'getState' });
  if (!response?.ok) {
    setStatus(`读取失败：${response?.error || '未知错误'}`);
    return;
  }

  const { options, selected } = response.state;
  const container = document.getElementById('options');
  container.replaceChildren(...options.map((option) => createOption(option, selected)));
  container.addEventListener('change', (event) => {
    if (event.target?.name === 'cdn') {
      selectCdn(event.target.value);
    }
  });
  setStatus(`当前线路：${selected}`);
}

init().catch((error) => {
  setStatus(`初始化失败：${error?.message || error}`);
});
