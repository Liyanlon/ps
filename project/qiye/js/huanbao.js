/**
 * Created by Administrator on 2018/1/13/013.
 */
// 选项卡
{
    let title=document.querySelectorAll(".hb-left-tit li");
    let imgs=document.querySelectorAll(".hb-right-img ul");

    title.forEach(function(value,index){
        value.onmouseover=function(){
            for(let i=0;i<title.length;i++){
                title[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            value.classList.add("active");
            imgs[index].classList.add("active")
        };

    })
}
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