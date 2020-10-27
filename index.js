#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var terser = require("terser");

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

var azerriskMinify = function(dir, options, callback) {
    options = options || {};

    walk(dir, function(filepath, result) {
        if (filepath.substr(-3) === ".js") {
            if (!options.silent) {
                console.log("Processing file > " + filepath);
            }

            var data = fs.readFileSync(filepath, "utf8");
            console.log('DADA:', data);

            var minified = terser.minify(data);
            console.log('MINIFIED:', minified);

            fs.writeFileSync(filepath, minified.code, "utf8");
            console.log(filepath, '... OK');
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