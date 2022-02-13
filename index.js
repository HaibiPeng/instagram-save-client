'use strict';
const FileSaver = require('file-saver');
const { createUsableUrl } = require('./libs/createUsableUrl');
const { downloadMetaData } = require('./libs/downloadMetaData');
const { getMediaType } = require('./libs/getMediaType');

/**
 * Download media using file-saver
 * @param {string} url media url
 * @param {string} filename name of media
 */
async function download(url, filename) {
    FileSaver.saveAs(url, filename);
}

/**
 * Save file based on media type
 * @param {string} mediaType media type, 'image' or 'video' 
 * @param {object} metaData metadata
 * @param {string} filename filename
 */
async function saveFile(mediaType, metaData, filename) {
  if (mediaType == "image") {
    const images = metaData.image_versions2.candidates;
    const originalWidth = metaData.original_width;
    const imgUrl = images.filter(image => image.width === originalWidth)[0].url;
    await download(imgUrl, `${filename}.jpg`);
  } else if (mediaType == "video") {
    const videoUrl = metaData.video_versions[0].url;
    await download(videoUrl,`${filename}.mp4`);
  }
}

/**
 * Download media
 * @param {string} url post url
 */
async function downloadMedia(url) {
  const usableUrl = createUsableUrl(url);
  const getMetaData = await downloadMetaData(usableUrl);
  const getType = getMediaType(getMetaData);

  if (getType == "image" || getType == "video") {
    const filename = getMetaData.code;
    saveFile(getType, getMetaData, filename);
  } else {
    const data = getMetaData.carousel_media;
    data.forEach((item, idx) => {
      const getType = getMediaType(item);
      const filename = getMetaData.code + idx;
      saveFile(getType, item, filename);
    });
  }
}

module.exports = {
  downloadMedia
};
