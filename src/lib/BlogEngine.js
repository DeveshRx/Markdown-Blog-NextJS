
const fs = require('node:fs');
const path = require('node:path');
var frontmatter = require('frontmatter');
const Markdoc = require('@markdoc/markdoc');

function getAllPostFile() {
    const folderPath = path.resolve('src/BlogPosts');
    const dirFiles = fs.readdirSync(folderPath);
    return dirFiles;
}

function getHTML(mFile) {

    const MDcontent = readFile(mFile);
    const ast = Markdoc.parse(MDcontent);
    const content = Markdoc.transform(ast, /* config */);
    const html = Markdoc.renderers.html(content);
    return String(html);

}

function getMetadata(mFile) {
    const MDcontent = readFile(mFile);
    const frontmatter_data = frontmatter(MDcontent);
    return frontmatter_data.data;
}

function readFile(filename) {

    const mFile = path.resolve('src/BlogPosts', filename)
    var dataString = null;
    try {
        dataString = fs.readFileSync(mFile, { encoding: 'utf8' });
    } catch (err) {
        console.error(err);
    }
    return String(dataString);

}

module.exports = {
    getAllPostFile, getHTML, getMetadata
}










