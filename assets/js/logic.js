$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    $(window).scroll(function(){
        if($(window).scrollTop()>150){
            $("nav").addClass("sticky-nav");
        }
        else {
            $("nav").removeClass("sticky-nav");
        }
    });

});