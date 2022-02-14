// (function() {
//     $.holdReady(true); //hold住，等待a.js加载，后续代码不能执行
//     var currentLang =localStorage.getItem("PC-LANG") || "zh-CN",
//     currentLocaleData=currentLang==="zh-CN" ?  window.CNlocalesData: window.ENlocalesData;
//     $(".locales-element").each((index, item) => {
//         $.holdReady(false);
//         var $item = $(item);
//         var tempText = $item.text();
//         $item.text(currentLocaleData[tempText] || tempText);
//     });
// })();
window.localesInstance = (function() {
    var currentLang =localStorage.getItem("PC-LANG") || "zh-CN";
    $.holdReady(true); //hold住，等待a.js加载，后续代码不能执行
    $.getScript("./locales/" + currentLang+ ".messages.js", function() {
        $.holdReady(false);
        // 初始化多语言元素
        $('.nav>li>a').css("fontSize",currentLang==="zh-CN" ? "0.8rem" : "0.6rem");
        $(".locales-element").each(function(index, item) {
            var $item = $(item);
            var tempText = $item.text();
            $item.text(getLocalesValue(tempText));
        });
    });

    // 获取多语言数据
    function getLocalesValue(id, values = {}) {
        var currentLocaleData = localesData || {};
        var currentLocaleValue = currentLocaleData[id] || id;
        Object.keys(values).forEach(key => {
            var value = values[key];
            currentLocaleValue.replace(new RegExp("\\{" + key + "\\}", "g").toString(), value);
        });
        return currentLocaleValue;
    }

    return {
        getLocalesValue: getLocalesValue
    };
})();
