# bilibili-cdn-rewrite-extension

A tiny unpacked Chrome extension for testing Bilibili `.m4s` requests against `mirrorhw`.

It redirects selected media requests to:

```text
upos-sz-mirrorhw.bilivideo.com
```

This is only for local debugging. I used it to check whether switching a few Bilibili media requests to the `mirrorhw` host changed playback behavior.

The actual redirect rules are in `rules.json`.

## Load it in Chrome

1. Open `chrome://extensions/`.
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select this project folder.

## Check whether it is working

1. Open a Bilibili video.
2. Open DevTools and switch to the **Network** tab.
3. Filter requests with `m4s`.
4. Open one of the matched media requests.
5. Check that the request URL starts with:

```text
https://upos-sz-mirrorhw.bilivideo.com/
```

## Notes

- Disable the extension when you are done testing.
- Chrome may generate an `_metadata/` directory after loading the extension. That folder is ignored on purpose.
