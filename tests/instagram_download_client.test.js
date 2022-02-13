const { createUsableUrl } = require('../libs/createUsableUrl');
const { getMediaType } = require('../libs/getMediaType');
const imageData = require('./image');
const videoData = require('./video');
const carouselData = require('./carousel');

test('Create usable url, add ?__a=1 at the end', () => {
    expect(createUsableUrl('https://www.instagram.com/p/CZogroiAxKs/')).toBe('https://www.instagram.com/p/CZogroiAxKs/?__a=1');
});

test('Return media type is image', async () => {
    expect(getMediaType(imageData)).toBe('image');
});

test('Return media type is video', async () => {
    expect(getMediaType(videoData)).toBe('video');
});

test('Return media type is carousel', async () => {
    expect(getMediaType(carouselData)).toBe('carousel');
});


