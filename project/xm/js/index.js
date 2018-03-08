/**
 * Created by Administrator on 2017/12/27/027.
 */
// 购物车
{
    let shop = document.querySelector(".shop");
    let shops = document.querySelector(".shop .active01");

    shop.onmousemove = function () {
        animate(shops, {height: 100}, 100);
        shops.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
    }
    shop.onmouseout = function () {
        animate(shops, {height: 0}, 100);
    }
}


//  轮播图
{
    // 轮播点点击换图
    let imgs = document.querySelectorAll(".img_box li");
    let pages = document.querySelectorAll(".btn_box li");
    let banner = document.querySelector(".banner");
    pages.forEach(function (value, index) {
        value.onclick = function () {
            for (var i = 0; i < imgs.length; i++) {
                pages[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    })
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

        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
    }

    let t = setInterval(bannerfn, 4000);
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(bannerfn, 4000);
    }

    // 左右箭头
    var left = document.querySelector(".banner-left");
    var right = document.querySelector(".banner-right");
    let flag = true;
    right.onclick = function () {
        if (flag) {
            flag = false;
            bannerfn();
        }

    }
    left.onclick = function () {
        if (flag) {
            flag = false;
            bannerfn("l");
        }
    }
    imgs.forEach(function (val, index) {
        val.addEventListener("transitionend", function () {
            flag = true;
        });
    })
}


// 明星单品
{
    let left = document.querySelector(".danping-top-right-zuo");
    let right = document.querySelector(".danping-top-right-you");
    let inner = document.querySelector(".danping-list-box");
    let starContainer = document.querySelector(".danping");
    left.onclick = function () {
        this.classList.remove("active");
        right.classList.add("active");
        inner.style.transform = "translateX(0)";
    };
    right.onclick = function () {
        this.classList.remove("active");
        left.classList.add("active");
        inner.style.transform = "translateX(-1226px)";
    };
    let n = 1;

    function starfn() {
        n++;
        if (n % 2 === 0) {
            right.onclick();
        } else {
            left.onclick();
        }
    }

    let t = setInterval(starfn, 5000);
    starContainer.onmouseover = function () {
        clearInterval(t);
    }
    starContainer.onmouseout = function () {
        t = setInterval(starfn, 5000);
    }

}

{
    // 侧导航
    let xuan = document.querySelectorAll(".aside>li");
    let ka = document.querySelectorAll('.banner .view');
    xuan.forEach(function (value, index) {
        value.onmousemove = function () {
            for (let i = 0; i < xuan.length; i++) {
                ka[i].classList.remove('xianshi');
            }
            ka[index].classList.add("xianshi");
        }
        value.onmouseout = function () {
            for (let i = 0; i < xuan.length; i++) {
                ka[i].classList.remove('xianshi');
            }
        }
    })
}

{
    // 家电选项卡
    let title = document.querySelectorAll(".second-header-right .second-header-right-text");
    let tit = document.querySelectorAll(".center-right");
    title.forEach(function (value, index) {
        value.onmouseover = function () {
            for (let i = 0; i < title.length; i++) {
                tit[i].classList.remove("active");
                title[i].classList.remove("active");
            }
            tit[index].classList.add("active");
            title[index].classList.add("active");
        }
        value.onmouseout = function () {
            for (let i = 0; i < title.length; i++) {
                tit[i].classList.remove("active");
                title[i].classList.remove("active");
            }
            tit[index].classList.add("active");
            title[index].classList.add("active");
        }
    })
}

{
    // 为你推荐
    let left = document.querySelector(".anjiankuang-zuo");
    let right = document.querySelector(".anjiankuang-you");
    let inner = document.querySelector(".center-right2");
    let starContainer = document.querySelector(".dakuang2");
    left.onclick = function () {
        this.classList.remove("active");
        right.classList.add("active");
        inner.style.transform = "translateX(0)";
    };
    right.onclick = function () {
        this.classList.remove("active");
        left.classList.add("active");
        inner.style.transform = "translateX(-1226px)";
    };
    let n = 1;

    function starfn() {
        n++;
        if (n % 2 === 0) {
            right.onclick();
        } else {
            left.onclick();
        }
    }

    let t = setInterval(starfn, 5000);
    starContainer.onmouseover = function () {
        clearInterval(t);
    }
    starContainer.onmouseout = function () {
        t = setInterval(starfn, 5000);
    }

}

// 内容开始
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

//  头部选项卡
{
    let title=document.querySelectorAll(".daohang-text");
    let content=document.querySelectorAll(".search-box");
    title.forEach(function(ele,index){
        ele.onmouseover=function(e){
            e.stopPropagation();
            for(let i=0;i<title.length;i++){
                content[index].classList.add("active");
            }
        };
        ele.onmouseout=function(){
            content[index].classList.remove("active");
        }
    })
}

