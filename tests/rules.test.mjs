import assert from 'node:assert/strict';
import {
  CDN_OPTIONS,
  DEFAULT_CDN_ID,
  buildRedirectRules,
  getCdnById
} from '../src/cdn-rules.js';

assert.equal(DEFAULT_CDN_ID, 'mirrorhw');
assert.deepEqual(
  CDN_OPTIONS.map((option) => option.id),
  ['mirrorhw', 'mirrorali', 'mirroralib', 'mirrorhwb']
);

assert.equal(
  getCdnById('mirrorali').host,
  'upos-sz-mirrorali.bilivideo.com'
);
assert.equal(getCdnById('missing').id, DEFAULT_CDN_ID);

const rules = buildRedirectRules('mirroralib');

assert.equal(rules.length, 2);
assert.deepEqual(
  rules.map((rule) => rule.id),
  [1, 2]
);
assert.equal(
  rules[0].action.redirect.transform.host,
  'upos-sz-mirroralib.bilivideo.com'
);
assert.equal(
  rules[1].action.redirect.transform.host,
  'upos-sz-mirroralib.bilivideo.com'
);
assert.deepEqual(
  rules.map((rule) => rule.condition.requestDomains[0]),
  ['upos-sz-mirrorcosov.bilivideo.com', 'upos-hz-mirrorakam.akamaized.net']
);
assert.ok(rules.every((rule) => rule.condition.urlFilter === '.m4s'));
assert.ok(rules.every((rule) => rule.priority === 100));
