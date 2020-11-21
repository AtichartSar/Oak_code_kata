
const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'images');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

console.log(files);
console.log(imageDirPath);
files.forEach(file => {
    str = file.replace(/\s+/g, '-')
    rename(imageDirPath + `/${file}`, imageDirPath + `/${str}`, err => console.log(err))
}
);
