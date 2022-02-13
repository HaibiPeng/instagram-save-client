/**
 * @param {string} originalUrl original copied url
 * @returns {string} usable url
 */
const createUsableUrl = (originalUrl) =>{
  if (originalUrl.slice(-1) !== "/") {
    originalUrl += "/";
  }
  return originalUrl + "?__a=1";
}

module.exports = { createUsableUrl };