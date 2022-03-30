var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/King-ing/CDN/assets/favicon.ico");
        document.title = 'ヽ(●-`Д´-)ノ你不要我了？';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/King-ing/CDN/assets/favicon.ico");
        document.title = '｡◕‿◕｡这样才乖嘛！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

