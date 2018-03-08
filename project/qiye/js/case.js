/**
 * Created by Administrator on 2018/1/13/013.
 */
// 返回顶部
{
    let toTop=document.querySelector(".toTop");
    toTop.onclick=function(){
        document.documentElement.scrollTop=0;
    }
    window.onscroll=function(){
        let st = document.documentElement.scrollTop;
        if (st >= 420) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
    }
}

//  鼠标移入
{
    var lastX = 0, lastY = 0;
    var n = 0;
    $(".case-item").data("isShow", false);
    $(".case-item").data("dir", "");
    $(".case-item").mousemove(function (e) {
        n++;
        var newX = e.offsetX, newY = e.offsetY;
        var dir = Math.abs(newX - lastX) > Math.abs(newY - lastY) ? "hon" : "ver";
        if (dir === "hon") {
            if (newX > lastX) {
                $(this).data("dir", "right")
            } else {
                $(this).data("dir", "left")
            }
        } else {
            if (newY > lastY) {
                $(this).data("dir", "bottom")
            } else {
                $(this).data("dir", "top")
            }
        }
        if (n === 2) {
            if (!$(this).data("isShow")) {
                $(this).data("isShow", true);
                if (dir === "hon") {
                    if (newX > lastX) {
                        $(this)
                            .find(".mask")
                            .css({left: -278, top: 0})
                            .animate({left: 0, top: 0}, 200);
                    } else {
                        $(this)
                            .find(".mask")
                            .css({left: 278, top: 0})
                            .animate({left: 0, top: 0}, 200);
                    }
                } else {
                    if (newY > lastY) {
                        $(this)
                            .find(".mask")
                            .css({left: 0, top: -278})
                            .animate({left: 0, top: 0}, 200);
                    } else {
                        $(this)
                            .find(".mask")
                            .css({left: 0, top: 278})
                            .animate({left: 0, top: 0}, 200);
                    }
                }
            }
        }
        lastX = newX;
        lastY = newY;
    });
    $(".case-item").mouseleave(function () {
        $(this).find(".mask").finish();
        n = 0;
        $(this).data("isShow", false);
        var dir = $(this).data("dir");
        if (dir === "left") {
            $(this)
                .find(".mask")
                .css({left: 0, top: 0})
                .animate({left: -278, top: 0}, 200);
        } else if (dir === "right") {
            $(this)
                .find(".mask")
                .css({left: 0, top: 0})
                .animate({left: 278, top: 0}, 200);
        } else if (dir === "top") {
            $(this)
                .find(".mask")
                .css({left: 0, top: 0})
                .animate({left: 0, top: -278}, 200);
        } else if (dir === "bottom") {
            $(this)
                .find(".mask")
                .css({left: 0, top: 0})
                .animate({left: 0, top: 278}, 200);
        }
    });
}