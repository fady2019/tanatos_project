$(document).ready(function(){
    //  Initialize Swiper 
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //top
    $(window).scroll(function(){
        if($(this).scrollTop() > 750){
            $(".toUp").fadeIn(500)
        }else{
            $(".toUp").fadeOut(500)
        }
    })
    $(".toUp").click(function(){
        $("body, html").animate({
            scrollTop:0
        },1500)
    })

    //next of header
    $(".header .down").click(function(){
        let featOffsetTop = $(".header").next().offset().top;
        $("body, html").animate({
            scrollTop:featOffsetTop
        },500)
    })

    //buttons of header
    $(".header button").click(function(){
        let eleOffsetTop = $("." + $(this).data("class")).offset().top;
        $("body, html").animate({
            scrollTop:eleOffsetTop
        },1500)
    })
})