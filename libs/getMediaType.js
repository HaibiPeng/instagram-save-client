/**
 * @param {object} mediaData JSON object
 * @returns {string} image or video
 */
const getMediaType = (mediaData) => {
  if (mediaData.media_type == 8) {
    return "carousel";
  } else if (mediaData.media_type === 2) {
    return "video";
  } else if (mediaData.media_type === 1){
    return "image";
  }
}

module.exports = { getMediaType };