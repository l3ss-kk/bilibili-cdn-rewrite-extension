export const DEFAULT_CDN_ID = 'mirrorhw';

export const CDN_OPTIONS = [
  {
    id: 'mirrorhw',
    label: 'mirrorhw',
    host: 'upos-sz-mirrorhw.bilivideo.com',
    note: '默认推荐'
  },
  {
    id: 'mirrorali',
    label: 'mirrorali',
    host: 'upos-sz-mirrorali.bilivideo.com',
    note: '阿里线路'
  },
  {
    id: 'mirroralib',
    label: 'mirroralib',
    host: 'upos-sz-mirroralib.bilivideo.com',
    note: '阿里备用'
  },
  {
    id: 'mirrorhwb',
    label: 'mirrorhwb',
    host: 'upos-sz-mirrorhwb.bilivideo.com',
    note: '华为备用'
  }
];

export const SOURCE_DOMAINS = [
  'upos-sz-mirrorcosov.bilivideo.com',
  'upos-hz-mirrorakam.akamaized.net'
];

const RESOURCE_TYPES = ['xmlhttprequest', 'media', 'other'];

export function getCdnById(id) {
  return CDN_OPTIONS.find((option) => option.id === id) || CDN_OPTIONS[0];
}

export function getDynamicRuleIds() {
  return SOURCE_DOMAINS.map((_, index) => index + 1);
}

export function buildRedirectRules(targetId) {
  const target = getCdnById(targetId);

  return SOURCE_DOMAINS.map((domain, index) => ({
    id: index + 1,
    priority: 100,
    action: {
      type: 'redirect',
      redirect: {
        transform: {
          host: target.host
        }
      }
    },
    condition: {
      urlFilter: '.m4s',
      requestDomains: [domain],
      resourceTypes: RESOURCE_TYPES
    }
  }));
}
