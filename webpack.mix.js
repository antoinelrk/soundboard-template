const mix = require('laravel-mix');

mix.browserSync({
    /**
     * Add your proxy URL (VSCode liveserver: 127.0.0.1:5500)
     */
    proxy: '127.0.0.1:5500'
});

mix.options({
    processCssUrls: false
});

mix.setPublicPath('public/');
mix.disableNotifications();

mix.sass('resources/sass/app.scss', 'public/css');
mix.js('resources/js/app.js', 'public/js');