//购物车
{
    let shop = $(".shop");
    let shops = $(".shop .active01");
    shop.mouseenter(function () {
        shops.stop(true).animate({height: 100},100);
    })
    shop.mouseleave(function(){
        shops.animate({height: 0}, 100);
    })
}
//  头部选项卡
{
    // let title=$(".daohang-text");
    // let content=$(".search-box");
    $(".daohang-text").mouseenter(function(){
        var index=$(this).index();
        // eve.preventDefault();

        $(".search-box").removeClass("active").eq(index).addClass("active");

    })
    $(".daohang-text").mouseleave(function(){
        // var index=$(this).index();
        $(".search-box").removeClass("active")
    })
}
// 侧导航
{
    let xuan = $(".aside>li");
    let ka = $('.banner .view');
    xuan.mouseenter(function(){
        var index=$(this).index()
        ka.removeClass("xianshi").eq(index).addClass("xianshi");
    })
    xuan.mouseleave(function(){
        ka.removeClass("xianshi");
    })
}
// 明星单品
{
    let left = $(".danping-top-right-zuo");
    let right = $(".danping-top-right-you");
    let inner = $(".danping-list-box");
    let starContainer = $(".danping");
    left.click(function(){
        var index=$(this).index()
        left.removeClass("active").eq(index).addClass("active");
        inner.css({"transform":"translateX(0)"});
    })
    right.click(function(){
        var index=$(this).index()
        right.removeClass("active").eq(index).addClass("active");
        inner.css({"transform":"translateX(-1226px)"});
    })
    let n = 1;

    function starfn() {
        n++;
        if (n % 2 === 0) {
            right.click();
        } else {
            left.click();
        }
    }
    let t = setInterval(starfn, 2000);
    starContainer.mouseenter(function(){
        clearInterval(t);
    })
    starContainer.mouseleave(function(){
        t = setInterval(starfn, 2000);
    })
}
//  轮播图
{
    // 轮播点点击换图
    let imgs =$(".img_box li");
    let pages =$(".btn_box li");
    let banner = $(".banner");
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
    var left = $(".banner-left");
    var right = $(".banner-right");
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
// 家电选项卡
{
    let title = $(".second-header-right .second-header-right-text");
    let tit = $(".center-right");
    title.mouseenter (function(){
        var index=$(this).index();
        title.removeClass("active").eq(index).addClass("active");
        tit.removeClass("active").eq(index).addClass("active");
    })
    title.mouseleave (function(){
        var index=$(this).index();
        title.removeClass("active").eq(index).addClass("active");
        tit.removeClass("active").eq(index).addClass("active");
    })
}
// 为你推荐
{
    let left = $(".anjiankuang-zuo");
    let right = $(".anjiankuang-you");
    let inner = $(".center-right2");
    let starContainer = $(".dakuang2");
    left.click(function(){
        var index=$(this).index();
        left.removeClass("active");
        right.eq(index).addClass("active");
        inner.css({"transform":"translateX(0)"})
    })
    right.click(function(){
        var index=$(this).index();
        right.removeClass("active");
        left.eq(index).addClass("active");
        inner.css({"transform":"translateX(-1226px)"})
    })
    let n = 1;

    function starfn() {
        n++;
        if (n % 2 === 0) {
            right.click();
        } else {
            left.click();
        }
    }
    let t = setInterval(starfn, 2000);
    starContainer.mouseenter(function(){
        clearInterval(t);
    })
    starContainer.mouseleave(function(){
        t = setInterval(starfn, 2000);
    })
}

//内容
{
    function movb() {
        noww++
        if (noww >= tiall.length - 1) {
            noww = tiall.length - 1;
        }
        animate(tuboxs, {left: -width1 * noww}, 500)
    }

    function lun(parents) {
        let tushu = parents.querySelector('.tushu');
        let width2 = parseInt(getComputedStyle(tushu, null).width);
        let tusu = tushu.firstElementChild;
        let lefttwo = parents.querySelector('.neiron-jiantou');
        let righttwo = parents.querySelector('.neiron-jiantou1');
        let suall = parents.querySelectorAll('.tusu .shum');
        let diand = parents.querySelectorAll('.neiron-dian .neiron-dian2')
        let no = 0;
        lefttwo.onclick = movb;
        function movd() {
            no++
            if (no >= suall.length - 1) {
                no = suall.length - 1;
            }
            animate(tusu, {left: -width2 * no}, 500)
            for (let n = 0; n < diand.length; n++) {
                diand[n].classList.remove('neiron-dian1');
            }
            diand[no].classList.add('neiron-dian1');
        }

        righttwo.onclick = movd;
        lefttwo.onclick = function () {
            if (no == 0) {
                return;
            }
            no--;
            if (no < 0) {
                no = 0
            }
            animate(tusu, {left: -width2 * no}, 500)
            for (let n = 0; n < diand.length; n++) {
                diand[n].classList.remove('neiron-dian1');
            }
            diand[no].classList.add('neiron-dian1');
        }
        diand.forEach(function (value, index) {
            value.onclick = function () {
                for (let n = 0; n < diand.length; n++) {
                    diand[n].classList.remove('neiron-dian1');
                }
                diand[index].classList.add('neiron-dian1');
                animate(tusu, {left: -width2 * index}, 500);
            }

        })
    }

    let neiron = document.querySelectorAll('.neiron-tu .neiron-left')
    neiron.forEach(function (value, index) {
        lun(value);
    })
}