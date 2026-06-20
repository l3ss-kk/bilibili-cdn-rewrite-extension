# Privacy Policy

This extension does not collect, sell, share, or transmit user data.

The extension only stores the user's selected video loading route in Chrome local extension storage. This setting stays on the user's own browser and is not uploaded anywhere.

The extension does not read Bilibili account information, cookies, personal profiles, passwords, comments, watch history, or payment information. It does not use analytics, remote logging, ads, or external tracking services.

The extension uses Chrome `declarativeNetRequest` rules only to redirect matching Bilibili media-loading requests according to the route selected by the user. This is the extension's single purpose.

Permissions are used as follows:

- `storage`: saves the selected route locally.
- `activeTab`: refreshes the current Bilibili page after the route is changed.
- `declarativeNetRequestWithHostAccess`: applies redirect rules for matching video-loading requests.
- Host permissions for `bilibili.com`, `bilivideo.com`, and `akamaized.net`: limit the feature to Bilibili pages and related media-loading domains.

Use of data is limited to providing the extension's stated feature. No user data is transferred to third parties.
