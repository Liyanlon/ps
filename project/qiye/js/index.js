/**
 * Created by Administrator on 2018/1/11/011.
 */
// 轮播图
{
    let imgs=document.querySelectorAll(".imgs-box li");
    let circles=document.querySelectorAll(".circle-box li");
    let box=document.querySelector(".banner-container");
    let left=document.querySelector(".prev");
    let right=document.querySelector(".next");
    circles.forEach(function(value,index){
        value.onclick=function(){
            for(var i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                circles[i].classList.remove("active");
            }
            imgs[index].classList.add("active");
            circles[index].classList.add("active");
        }
    })
     //自动轮播
    let n=0;
    function moveFn(dir="r"){
        if(dir==="r"){
            n++;
            if(n===imgs.length) {
                n=0;
            }
        }
        if(dir==="l"){
            n--;
            if(n===-1){
                n=imgs.length-1
            }
        }
        for(var i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            circles[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        circles[n].classList.add("active");
    }
    let st=setInterval(moveFn,5000);
    let flag=true;
    right.onclick=function(){
        if(flag) {
            flag=false;
            moveFn();
        }
    };
    left.onclick=function(){
        if(flag) {
            flag=false;
            moveFn("l");
        }
    }
    box.onmouseover=function(){
        clearInterval(st);
    };
    box.onmouseout=function(){
        st=setInterval(moveFn,5000);
    };
    imgs.forEach(function(val){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}
// 返回顶部
{
    let toTop=document.querySelector(".toTop");
    toTop.onclick=function(){
        document.documentElement.scrollTop=0;
    };
    window.onscroll=function(){
        let st = document.documentElement.scrollTop;
        if (st >= 770) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
    }
}