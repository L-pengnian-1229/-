/*Initialize Swiper */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next'
        /*prevEl: '.swiper-button-prev'*/
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
/*音乐开始*/
var music = document.getElementById("music");
var musicBg = document.querySelectorAll(".musicBg")[0];
var musicImg = document.querySelectorAll(".musicImg")[0];
var audio = document.querySelector("audio");
var abc = 1;
music.onclick=function(){
    if(abc==1){
        musicBg.style.animation="none";
        musicImg.style.display="none";
        audio.pause();
        abc=0;
    }else {
        musicBg.style.animation="myMusic 2s linear infinite";
        musicImg.style.display="block";
        audio.play();
        abc=1;
    }
};
/*音乐结束*/