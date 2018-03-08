// 轮播图
{
    let imgs=document.querySelectorAll(".imgs-box li");
    let box=document.querySelector(".luobo-neikuan");
    let n=0;
    let zidong=function (value,index) {
        n++;
        if(n===imgs.length){
            n=0
        }
        imgs.forEach(function (val,i) {
            val.classList.remove("active")
        });
        imgs[n].classList.add("active")
    };
    let sj=setInterval(zidong,500);
    box.onmouseover=function () {
        clearInterval(sj);
    };
    box.onmouseout=function () {
        sj=setInterval(zidong,500);
    };
    let prev=document.querySelector(".prev");
    let next=document.querySelector(".next");
    prev.onclick=function () {
        console.log(1);
        n--;
        if(n===-1){
            n=imgs.length-1
        }
        imgs.forEach(function (val,i) {
            val.classList.remove("active")
        });
        imgs[n].classList.add("active")
    };
    next.onclick=function () {
        zidong()
    }
}