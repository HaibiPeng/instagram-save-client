# Client side Instagram downloader

Download images and videos from Instagram at client side.

## Install

```bash
npm i instagram-save-client
```

# Usage

````javascript
import { downloadMedia } from 'instagram-save-client';

(async () => {
    await downloadMedia('https://www.instagram.com/tv/CYQyOuCAMrl/?utm_source=ig_web_copy_link');
})();

````

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [file-saver](https://www.npmjs.com/package/file-saver)
