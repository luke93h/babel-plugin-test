const babel = require("babel-core");
const path = require('path');
const fs = require('fs');

const filename = path.resolve(__dirname, '../test/index.js')

const code = fs.readFileSync(filename, "utf8");

const options ={
    "presets": ["env"],
    "plugins": [path.resolve(__dirname, '../lib/index.js')]
}

babel.transform(code, options, function(err, result) {
    console.log(result)
});