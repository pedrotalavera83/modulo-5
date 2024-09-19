//CommonJs
const pathNode = require('node:path');

module.exports ={
    //Esta el el default...
    // entry:'./src/index.js'
    output: {
        // path: 'C:/Users/Pedro Talavera/Desktop/master-code/modulo-5/1-bundlers/webpack/build'
        path: pathNode.resolve(__dirname, 'build2')
    },

}