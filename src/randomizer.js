const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copy = promisify(fs.copyFile);
const write = promisify(fs.writeFile);

const basePath = process.cwd();
const buildDir = `${basePath}/build`;
const jsonDir = `${buildDir}/json`;
const randomDir = `${buildDir}/random`;
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

if (fs.existsSync(jsonDir)) {
    if (fs.existsSync(randomDir)) return console.log(`${randomDir} is already exists!`);
    fs.mkdirSync(randomDir);
    fs.mkdirSync(`${randomDir}/json`);
    fs.mkdirSync(`${randomDir}/images`);
    const jsons = [];
    fs.readdirSync(jsonDir).map(async (file, index) => {
        if (file.endsWith('.json')) {
            jsons.push(file)
        }
    });
    shuffleArray(jsons);

    Promise.all(jsons.map(async (file, index) => {
        const json = JSON.parse(fs.readFileSync(`${jsonDir}/${file}`));
        const originalImage = json.image;
        json.image = `${index}.${originalImage.split('.')[1]}`;
        json.properties.files[0].uri = json.image;
        let data = ({
            id: index,
            json,
            dest: `${randomDir}/json/${index}.json`,
            srcImg: `${buildDir}/images/${originalImage}`,
            destImg: `${randomDir}/images/${json.image}`
        });
        await copy(data.srcImg, data.destImg);
        await write(data.dest, JSON.stringify(data.json));
    }));

}
