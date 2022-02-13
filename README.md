# Client side Instagram downloader

Download images and videos from Instagram at client side.

## Install

```bash
npm i instagram-save-client
```

# Usage

````javascript
const instagram_save_client = require ('instagram-save-client');

(async () => {
    await instagram_save_client.downloadMedia('https://www.instagram.com/tv/CYQyOuCAMrl/?utm_source=ig_web_copy_link');
})();

````

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [file-saver](https://www.npmjs.com/package/file-saver)
