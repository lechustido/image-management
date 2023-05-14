const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function defaultTask(cb) {
    cb();
    const imageFolder = path.join(__dirname, 'images');
    const images = fs.readdirSync(imageFolder);

    images.forEach((image) => {
        const bufferArray = fs.readFileSync(path.join(imageFolder, image));
        transformImages(bufferArray, image.split('.')[0]);
    });
}


async function transformImages(bufferArray, fileName) {
    sharp(bufferArray)
        .resize(1324, 744)
        .toFile('reduced-images/' + fileName + '.avif', (err, info) => {});
}

exports.default = defaultTask