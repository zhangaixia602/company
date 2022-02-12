// 百度统计使用
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?486779ce96d043449280fc53eb37b2f6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
$(function() {
    var $li = $(".nav li"),
        $langages=$(".langages");
    $li.click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    });
    $("#suspensionBox li").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $(this)
            .find("div")
            .css("display", "block");
        $(this)
            .siblings()
            .find("div")
            .css("display", "none");
    });
    //回到顶部
    window.onscroll = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("top").onclick = function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            };
        } else {
            $("#suspensionBox li:eq(0)").click();
        }
    };
    //切换语言
    $langages.click(function(){
        var index=$(this).index();
        localStorage.setItem("PC-LANG",index===0 ? "zh-CN" : "en-US");
        window.location.reload();
    })
    $("#suspensionBox li:eq(0)").click();
});
