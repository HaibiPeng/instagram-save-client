const axios = require("axios");

/**
 * Download metadata
 * @param {string} url media url (https://www.instagram.com/p/[mediaShortCode]/)
 * @returns {object} metadata JSON object
 */
const downloadMetaData = async (url) => {
  try {
    const metaData = await axios({
      method: "get",
      url: url
    });
    return metaData.data.items[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { downloadMetaData };