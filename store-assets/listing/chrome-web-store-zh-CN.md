# Chrome Web Store Listing

## Store listing

Name:

解决部分 B 站视频播放卡顿

Summary:

切换视频加载线路，缓解 B 站视频加载慢、频繁缓冲、播放不稳定。

Description:

用于改善部分 B 站视频播放过程中出现的加载慢、频繁缓冲、播放不稳定等问题，尤其适合直播回放、长视频以及网络到 B 站线路不太稳定的使用场景。

这个扩展最初来自我自己长期观看 B 站直播回放时遇到的卡顿问题。有些视频并不是完全无法播放，而是会出现播一会儿、缓冲一会儿的情况。切换到其他视频加载线路后，在我的网络环境下播放稳定性有明显改善，因此整理成了这个扩展。

适合这些情况：

- 视频可以打开，但播放过程中频繁缓冲
- 直播回放、长视频容易中途卡住
- 同一个视频有时流畅、有时加载不稳定
- 海外用户访问 B 站时默认线路不稳定
- 想快速尝试不同视频加载线路下的播放效果

使用方式：

打开 B 站视频页面后，点击扩展图标，选择一条视频加载线路。选择后，如果当前标签页是 B 站页面，扩展会尝试自动刷新；如果没有自动刷新，手动刷新一次视频页面即可。

当前支持线路：

- mirrorhw
- mirrorali
- mirroralib
- mirrorhwb

隐私说明：

这个扩展不是 B 站官方产品，也不代表 B 站。扩展不读取账号信息，不上传用户数据，只在浏览器本地保存你选择的视频加载线路。

Category:

Productivity

Language:

Chinese (Simplified)

Homepage URL:

https://github.com/l3ss-kk/bilibili-cdn-rewrite-extension

Support URL:

https://github.com/l3ss-kk/bilibili-cdn-rewrite-extension/issues

Privacy Policy URL:

https://github.com/l3ss-kk/bilibili-cdn-rewrite-extension/blob/main/PRIVACY.md

## Privacy

Single purpose:

帮助用户在 bilibili 视频播放卡顿、频繁缓冲或加载不稳定时，手动切换视频加载线路。

Permission justifications:

`storage`:

保存用户选择的视频加载线路。该设置只保存在浏览器本地，不会上传。

`activeTab`:

用户切换线路后，刷新当前 bilibili 标签页，让新的线路设置生效。

`declarativeNetRequestWithHostAccess`:

根据用户选择的线路，对匹配到的 bilibili 视频加载请求应用重定向规则。

Host permissions:

仅用于 bilibili 页面和相关视频加载域名，让线路切换规则只作用在必要的站点范围内。

Remote code:

No.

Data collection:

No user data is collected, sold, shared, or transmitted.

## Distribution

Visibility:

Public

Regions:

All regions

Pricing:

Free

In-app purchases:

No

## Test instructions

1. Install the extension.
2. Open a Bilibili video page.
3. Click the extension icon.
4. Select one route from the popup.
5. Confirm that the current Bilibili tab refreshes, or refresh it manually.
6. Open the extension popup again and confirm the selected route is saved.
