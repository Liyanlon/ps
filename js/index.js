$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    sectionsColor: ["#ccc", "#fff", "#295674", "#20272E", "#fff"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["111", "222", "333", "444"],
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#head",
    afterLoad:function(anchor,index){
        if(index ===1){
            $(".text-box").css("transform","translateX(0)");
            $(".p-left").css("transform","translateX(0)");
            $(".p-right").css({"width":"50%","left":"calc(50% - 25%)"})

        }
        if(index===2){
            $(".two-left").css("transform","translateX(0)");
            $(".two-right").css("transform","translateX(0)");
        }
        if(index===3){
            $(".three-s").css("transform","translateY(0)");
            $(".three-d").css("transform","translateY(0)");
        }
        if(index===4){
            $(".four-list:nth-child(n)").css("transform","translateX(0)");
            $(".four-list:nth-child(2n)").css("transform","translateX(0)");
        }
    },
    afterRender:function (index) {
            $(".text-box").css("transform","translateX(0)");
            $(".p-left").css("transform","translateX(0)");
            $(".p-right").css({"width":"50%","left":"calc(50% - 25%)"})
    },
    onLeave:function(index){
        if(index ===1){
            $(".text-box").css("transform","translateX(-1500px)");
            $(".p-left").css("transform","translateX(1500px)");
            $(".p-right").css({"width":"1px","left":"calc(50% - 1px)"})

        }
        if(index===2){
            $(".two-left").css("transform","translateX(-1000px)");
            $(".two-right").css("transform","translateX(1000px)");
        }
        if(index===3){
            $(".three-s").css("transform","translateY(700px)");
            $(".three-d").css("transform","translateY(-700px)");
        }
        if(index===4){
            $(".four-list:nth-child(n)").css("transform","translateX(-2000)");
            $(".four-list:nth-child(2n)").css("transform","translateX(2000)");
        }
    }
});
 $(".three-s,.three-d").mouseenter(function () {
     // console.log($(this));
     $(this).css({"transform":"rotateY(180deg)"});
 }).mouseleave(function () {
    // console.log($(this));
    $(this).css({"transform":"rotateY(360deg)"});
});
var n=0,lastX=0,lastY=0;
$(".four-list").mousemove(function (e) {
   
    n++;
    var newX=e.offsetX,newY=e.offsetY;
    var dir=Math.abs(newX-lastX)>Math.abs(newY-lastY)?"hon":"ver";

    if(dir==="hon"){
        if(newX>lastX) {
            $(this).data("dir","right");
        }else{
            $(this).data("dir","left");
        }
    } else{
        if(newY>lastY){
            $(this).data("dir","bottom");
        }else{
            $(this).data("dir","top");
        }
    }
    if(n===2){
        if(!$(this).data("isShow")){
            $(this).data("isShow",true);
            var mask=$(this).find(".maskguo");
            if(dir==="hon"){
                if(newX>lastX){
                    mask.css({left:-370,top:0})
                }else{
                    mask.css({left:370,top:0})
                }
            }else {
                if(newY>lastY){
                    mask.css({left:0,top:-270})
                }else{
                    mask.css({left:0,top:270})
                }
            }
            mask.animate({left:0,top:0},200);
        }}
    lastX=newX;
    lastY=newY;
});
$(".four-list").mouseleave(function () {
    $(this).find(".maskguo").finish();
    n=0;
    $(this).data("isShow",false);
    var dir=$(this).data("dir");
    var mask=$(this).find(".maskguo").css({left:0,top:0});
    if(dir==="left"){
        mask.animate({left:-370,top:0},200)
    }else if(dir==="right"){
        mask.animate({left:370,top:0},200)
    }else if(dir==="top") {
        mask.animate({left: 0, top:-270}, 200)
    }else if(dir==="bottom") {
        mask.animate({left: 0, top:270}, 200)
    }

})

let a=$("#head li");
let b=$("section");
let index=$(this).index();
a.click(function(){
    console.log(1);
    a.removeClass("active").filter(this).addClass("active");
})