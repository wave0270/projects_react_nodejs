var path = require('path');

module.exports = {
    entry: './src/client/client',

    output: {
        path: path.join(__dirname, 'public/'),    /*'public' will be change to 'static'; then use in /src/server/server.js templat*/
        filename: 'client.js',
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
        ]
    }
};
