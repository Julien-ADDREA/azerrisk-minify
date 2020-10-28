# Azerrisk-Minify

A function that minifies your javascript files, and all the javascript files in your nested folders as well. **Azerrisk-Minify** can be used as a CLI or can be run in your code. By giving it a directory, Azerrisk-Minify will walk through the depth of your folders and minify all the javascript that it sees.

### Installation

    > npm install -g azerrisk-minify

### Run CLI

    > azerrisk-minify [folder]

### Run in your code
`azerriskMinify` function has 1 part: directory, such that

    azerriskMinify([directory])

##### Example

    var azerriskMinify = require("azerrisk-minify");
    
    azerriskMinify("./");
