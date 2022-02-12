(function() {
    console.log(2)
    var currentLang =localStorage.getItem("PC-LANG") || "zh-CN",
    currentLocaleData=currentLang==="zh-CN" ?  window.CNlocalesData: window.ENlocalesData;
    $(".locales-element").each((index, item) => {
            var $item = $(item);
            var tempText = $item.text();
            $item.text(currentLocaleData[tempText] || tempText);
    });
})();
