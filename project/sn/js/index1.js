// 轮播图
{
    let imgs=$(".imgs-box li");
    let pages=$(".lunbo-box li");
    let banner=$(".banner-center");
    pages.click(function(){
        var index=$(this).index()
        pages.removeClass("active").eq(index).addClass("active");
        imgs.removeClass("active").eq(index).addClass("active");
        console.log(index);
        n=index;
    });

    // 自动轮播
    let n = 0;

    function bannerfn(dir = "r") {
        if (dir === "r") {
            n++;
            if (n === imgs.length) {
                n = 0;
            }
        } else if (dir === "l") {
            n--;
            if (n === -1) {
                n = imgs.length - 1;
            }
        }
        // var index=$(this).index();
        pages.removeClass("active").eq(n).addClass("active");
        imgs.removeClass("active").eq(n).addClass("active");
    }

    let t = setInterval(bannerfn, 2000);
    banner.mouseover(function () {
        clearInterval(t);
    })
    banner.mouseout (function () {
        t = setInterval(bannerfn, 2000);
    })

    // 左右箭头
    let left=$(".prev");
    let right=$(".next");
    let flag = true;
    right.click ( function () {
        if (flag) {
            flag = false;
            bannerfn();
        }
    })
    left.click( function () {
        if (flag) {
            flag = false;
            bannerfn("l");
        }
    })
    imgs.on("transitionend", function () {
        flag = true;
    });
}
// 侧导航
{
    let xuan=$(".luobo-neikuan-left>li");
    let ka=$('.luobo-neikuan .item-box');
    xuan.mouseenter(function(){
        var index=$(this).index()
        ka.removeClass("xianshi").eq(index).addClass("xianshi");
    })
    xuan.mouseleave(function(){
        ka.removeClass("xianshi");
    })
}
//排行榜轮播图
{
    let lisda=$(".haohuo3 .content .list");
    // 390
    let lis=$(".list2");
    let left=$(".btn-left");
    let right=$(".btn-right");
    let dian=$(".yuan li");
    var now=0;
    var next=0;
    let flag=true;
    function move(){
        next=now+1;
        if(next>=lis.length){
            next=0;
        }
        lis.eq(next).css({"left":"100%"});
        lis.eq(now).animate({left:-390},1000);
        lis.eq(next).animate({left:0},1000,function(){
            flag=true;
        });
        dian.eq(now).removeClass("active");
        dian.eq(next).addClass("active");
        now=next;
    }
    right.click(function(){
        if(!flag){
            return
        }
        flag=false;
        move();
    })
    left.click(function(){
        if(!flag){
            return
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis.eq(next).css({"left":"-100%"});
        lis.eq(now).animate({left:390},1000);
        lis.eq(next).animate({left:0},1000,function(){
            flag=true;
        });
        dian.eq(now).removeClass("active");
        dian.eq(next).addClass("active");
        now=next;
    })
    dian.click(function(){
        var index=$(this).index();
        if(!flag){
            return
        }
        flag=false;
        if(index>now){
            next=index;
            lis.eq(next).css({"left":"100%"});
            lis.eq(now).animate({left:-390},1000);
            lis.eq(next).animate({left:0},1000,function(){
                flag=true;
            });
            dian.eq(now).removeClass("active");
            dian.eq(next).addClass("active");
            now=next;
        }else if(index<now){
            next=index;
            lis.eq(next).css({"left":"-100%"});
            lis.eq(now).animate({left:390},1000);
            lis.eq(next).animate({left:0},1000,function(){
                flag=true;
            });
            dian.eq(now).removeClass("active");
            dian.eq(next).addClass("active");
            now=next;
        }else{
            flag=true;
        }
    })
}
//乐拼购
{
    let lisda = $(".bq-yx");
    let lis = $(".bq-nei");
    let left = $(".bth-left1");
    let right = $(".bth-right1");
    let now = 0;
    let next = 0;
    let flag = true;

    function mov() {
        next = now + 1;
        if (next >= lis.length) {
            next = 0;
        }
        lis.eq(next).css({"left":"100%"});
        lis.eq(now).animate({left:-590},500);
        lis.eq(next).animate({left:0},500,function(){
            flag=true;
        });
        now = next;
    }
    mov();
    right.click(function(){
        if(!flag){
            return
        }
        flag=false;
        mov();
    })
    left.click(function(){
        if(!flag){
            return
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis.eq(next).css({"left":"-100%"});
        lis.eq(now).animate({left:590},1000);
        lis.eq(next).animate({left:0},1000,function(){
            flag=true;
        });
        now=next;
    })
}
// 楼层跳转
// {
//     let flag=true;
//     let totop=$(".aside-di-1");
//     totop.click(function(){
//         let st=$(document).scrollTop();
//         let speed=st*30/400;
//         let t=setInterval(function(){
//             st-=speed;
//             if(st<=0){
//                 st=0;
//                 clearInterval(t);
//             }
//             document.scrollTop(st);
//         },30)
//     })
//
//     let topbar =$(".topbar");
//     let leftbar =$(".aside-nei");
//     let lists =$(".lists");
//     let floors =$(".aside-nei li");
//
//     $(window).scroll(function () {
//         if(flag) {
//             let st = $(document).scrollTop();
//             // console.log(st);
//             if (st >= 900) {
//                 topbar.css("top" ,"0");
//             } else {
//                 topbar.css("top" , "-50px");
//             }
//             if (st >= 2740) {
//                 leftbar.css("display" , "block");
//             } else {
//                 leftbar.css("display", "none");
//             }
//             let index=$(lists).index();
//             // let a=lists.offset(top-110);
//             // console.log(a);
//             if(st>=lists.offset(top-110)){
//                 floors.removeClass("active");
//                 foors.eq(index).addClass("active");
//             }
//
//         }
//     })
// }
//楼层跳转
{
    let flag=true;
    let totop=document.querySelector(".aside-di-1");
    totop.onclick=function(){
        let st = document.documentElement.scrollTop;
        let speed=st*30/400;
        let t=setInterval(function(){
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }


    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".aside-nei");
    let lists = document.querySelectorAll(".lists");
    let floors = document.querySelectorAll(".aside-nei li");
    window.onscroll = function () {
        if(flag){
            let st = document.documentElement.scrollTop;
            // console.log(st);
            if (st >= 900) {
                topbar.style.top = "0";
            } else {
                topbar.style.top = "-50px";
            }
            if (st >= 2740) {
                leftbar.style.display = "block";
            } else {
                leftbar.style.display = "none";
            }
            lists.forEach(function (value, index) {
                if (st >= value.offsetTop-110) {
                    for (let i = 0; i < lists.length; i++) {
                        floors[i].classList.remove("active");
                    }
                    floors[index].classList.add("active");
                }
            })
        }
    }


    floors.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = lists[index].offsetTop;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 400;
            let time = 0;
            flag=false;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}
// 侧导航
let fiexd = $(".fixed ul li.si");
fiexd.mouseenter(function () {
    $(this).addClass("active");
    $(this).children().children(".block").animate({left:-47},500);
});
fiexd.mouseleave(function () {
    $(this).removeClass("active");
    $(this).children().children(".block").animate({left:0},500);
});
let three = $(".fixed ul li.san");
three.mouseenter(function () {
    $(this).addClass("active");
    $(this).children().children(".block1").animate({left:-75},500);
});
three.mouseleave(function () {
    $(this).removeClass("active");
    $(this).children().children(".block1").animate({left:0},500);
});

















