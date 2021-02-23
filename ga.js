function DetectIsIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // 回傳版本 <=10 的版本
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // 回傳版本 >=11 的版本
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // 判斷Edge
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

var q = DetectIsIE();

if (q != false) {
    $("body").html(
        '<p style="color: #FFF; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5em;">為使您有最佳瀏覽體驗，建議您複製網址，使用Chrome或Safari開啟網站作瀏覽，謝謝！</p>'
    );
}


ga_default = function (_id) {
    /* GA default */
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', _id);

    function gtag_pageView(_key) {
        //ga('send', 'pageview', key);
        gtag('config', _id, {
            'page_title': _key,
            'page_path': '/' + _key
        });

        console.log("pageView: " + _key);
    }

    function gtag_ButtonClick(_name, _key) {
        gtag('event', 'name', {
            'category': 'value',
        });
        // name 為事件所屬頁面
        // category 為事件分類
        // value 為事件名稱
    }

    function gtag_Event(_name, _key) {
        //ga('send', 'event', 'Button', 'Click', key);
        gtag('event', 'Video', {
            'event_category': _name,
            'event_label': _key
        });

        // console.log(_name + ":" + _key);
    }
    /* GA default */

    function page() {

    }

    /* Demo : data-category="footer" data-ga="privacy" */
    function page_ga() {
        $(document).on("click", "*[data-ga]", function (e) {
            // e.preventDefault();
            gtag_ButtonClick($(this).data("category"), $(this).data("ga"));
        });
    }

    function init() {
        page();
        page_ga()
    } {
        init();
    }
    return {
        pageView: function (_key) {
            gtag_pageView(_key)
        },
        ButtonClick: function (_name, _key) {
            gtag_ButtonClick(_name, _key)
        },
        Event: function (_name, _key) {
            gtag_Event(_name, _key)
        },
    };
}

var setGA = new ga_default("G-QX2F9BBK81");