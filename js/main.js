$(document).ready(function(){
    // Mobile Menu Toggler
    $('.hamburger').on('click', function(){
        $('.right_nav_area').addClass('show');
        $('.overlay').addClass('show');
    })

    $('.close_nav').on('click', function(){
        $('.right_nav_area').removeClass('show');
        $('.overlay').removeClass('show');
    })

    // Wow Animation
    new WOW().init();

    //counter
    $("#num1").countMe(40, 300);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 300);

    
    // Current year
    $('#year').text((new Date).getFullYear());

    // Connect to contact form
    $('.lead_area').on('click', function(){
        window.location.href = 'index.html#contact-us'
    })
})



//on scroll add class
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >= 100){
        $('.navigation_bar').addClass('bg_color');
    }

    else{
        $('.navigation_bar').removeClass('bg_color');
    }
    
});;


// // Counter 
// window.onload = ()=>{
//     // $(selector).countMe(delay,speed)
//     $("#num1").countMe(40, 300);
//     $("#num2").countMe(30, 30);
//     $("#num3").countMe(40, 300);
//  }
