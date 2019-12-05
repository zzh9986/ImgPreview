const path = require('path')

module.exports = {
    mode: 'production',
    entry: [
        './scss/index.scss',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'react-imgpreview.min.js',
        library: 'ReactImgPreview',
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.js']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDom'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            }
        ]
    }
}