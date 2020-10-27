# Azerrisk-Minify

A function that minifies your javascript files, and all the javascript files in your nested folders as well. **Azerrisk-Minify** can be used as a CLI or can be run in your code. By giving it a directory, Azerrisk-Minify will walk through the depth of your folders and minify all the javascript that it sees.

### Installation

    > npm install -g azerrisk-minify

### Run CLI

    > azerrisk-minify [folder]

### Run in your code
`azerriskMinify` function has 3 parts: directory, options, and callback, such that

    azerriskMinify([directory], [options], [callback])

The callback outputs 2 options:
* **error**: the error of each file
* **minified**: the output of the minified file

##### Example

    var azerriskMinify = require("azerrisk-minify");
    
    azerriskMinify("./", { silent: true }, function(err){
        if(err){
            console.log(err);
        }
    });

### Options

* **silent**
If silent mode is on, then logs of which files has been found won't be displayed
