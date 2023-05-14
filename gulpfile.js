const sharp = require('sharp');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const fs = require('fs');
const path = require('path');

function defaultTask(cb) {
    cb();
    const imageFolder = path.join(__dirname, 'images');
    const images = fs.readdirSync(imageFolder);
    console.log(images)

    images.forEach((image) => {
        const bufferArray = fs.readFileSync(path.join(imageFolder, image));
        console.log(bufferArray);

        transformImages(bufferArray, image.split('.')[0]);
    });

}


async function transformImages(bufferArray, fileName) {
    sharp(bufferArray)
        .resize(1324, 744)
        .toFile('reduced-images/' + fileName + '.avif', (err, info) => { console.log(info) });
}
exports.default = defaultTask