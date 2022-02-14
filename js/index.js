// 百度统计使用
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?486779ce96d043449280fc53eb37b2f6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
$(function() {
    var menuData=window.menuData;
        $li = $(".nav li"),
        $content=$(".content"),
        $langages=$(".langages");
    $li.click(function() {
        var id=$(this).prop('title');
        menuData.forEach((item,index)=>{
            if(item.id===id){
                $content.load(item.component);
            }
        })
        $(this).addClass("active").siblings().removeClass("active")
    });
    $li.hover(
        function() {
            $(this).find('div').addClass("show");
        },
        function() {
            $(this).find('div').removeClass("show");
        }
    );
    $(".nav li:eq(0)").click();
    $("#suspension_box li:lt(2)").hover(
        function() {
            $(this).css({
                left:"-8rem"
            });
        },
        function() {
            $(this).css({
                left:0
            });
        }
    )
    //回到顶部
    window.onscroll = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("top").onclick = function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            };
        }
    };
     //切换语言
    $langages.click(function(){
        var index=$(this).index();
        localStorage.setItem("PC-LANG",index===0 ? "zh-CN" : "en-US");
        window.location.reload();
    })
});
