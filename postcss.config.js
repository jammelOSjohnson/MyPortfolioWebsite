const tailwindcss = require("tailwind.css");

module.exports= {
    plugins: [
        require('autoprefixer'),
        require('./tailwind.config.js'),
        require('@fullhuman/poostcss-purgecss')({
            content: ['./src/**/*.js', './public/index.html'],
            defaultExtractor: (content) => content.match(/[A-za-z0-9-_:/]+/g) || [],
        }),
    ],
};