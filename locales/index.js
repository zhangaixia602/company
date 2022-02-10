window.localesInstance = (function() {
    var currentLang =localStorage.getItem("PC-LANG") || "zh-CN";
    $.holdReady(true); //hold住，等待a.js加载，后续代码不能执行
    $.getScript("./locales/" + currentLang.replace("_","-") + ".messages.js", function() {
        $.holdReady(false);
        // 初始化多语言元素
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
