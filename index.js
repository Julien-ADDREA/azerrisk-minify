#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var Terser = require("terser");
var colors = require('colors');

var files = [];
var i = 0;

var walk = function(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function(name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walk(filePath, callback);
        }
    });
}

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

var azerriskMinify = function(dir, callback) {

    walk(dir, async function(filepath, result) {
        if (filepath.substr(-3) === ".js") {
            files[path] = { path: filepath, processed: false };

            var code = fs.readFileSync(filepath, "utf8");

            await Terser.minify(code)
            .then(minified => {
                fs.writeFileSync(filepath, minified.code, "utf8");
                i++;
                console.log('[' + leftPad(i, 4) + '] ' + filepath + ' ... ' + 'OK'.green + ' (CONVERTED)');
            })
            .catch(error => {
                i++;
                console.log('[' + leftPad(i, 4) + '] ' + filepath + ' ... ' + 'ERROR'.red + ' (IGNORED)');
            });
        }
    });
};
if (require.main === module) {
    var input = process.argv; 
    var inputDir = input[2];
    azerriskMinify(inputDir);
} else {
    module.exports = azerriskMinify;
}