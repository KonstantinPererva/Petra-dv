$(document).ready(function(){

//HEADER SLIDER
  $('.header__slider').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	fade: true,
  	speed: 500,
    dots: true
  });

// HEADER MENU
    $('.header__menu ul li').hover(function(){
        if($(this).prev('li').hasClass('active') == true){
            $(this).next('li').removeClass('line-white');
        }
    },function(){
        if($(this).prev('li').hasClass('active') == true){
            $(this).next('li').addClass('line-white');
        }
    });

    $('.header__menu ul li:first-child').hover(
        function(){
            $(this).next('li').removeClass('line-white');
     },
       function(){
           if($(this).next('li').hasClass('active') != true && $(this).hasClass('active') != true){
            $(this).next('li').addClass('line-white');
        };
    });  

  $('.line-white').hover(
    function(){
      $(this).removeClass('line-white').next('li').removeClass('line-white');
  },
    function(){
        if($(this).next('li').hasClass('active') == true){
            $(this).addClass('line-white').next('li').removeClass('line-white');
        }else{
            $(this).addClass('line-white').next('li').addClass('line-white');
        }
    });

 //MENU DROPDOWN
    $('.menu__item>a').click(function(e){
      if($(window).width() < 768){
            e.preventDefault();
            $(this).siblings('.menu__dropdowns').slideToggle(300).parents('li').toggleClass('active');
      };
    });

//BUTTON MENU
    $('.header__btn-menu').click(function(){
        $(this).toggleClass('close-menu');
        $('.header__menu').slideToggle(300);
    });

//PHOTOGALERY MENU
    $('.photogallery__menu a').click(function(e){
        e.preventDefault();
        var text = $(this).text();
        if($(window).width() > 1021){
            $('.photogallery__menu a').removeClass('active');
            $(this).addClass('active');
            $('.photogallery__menu-dropdown').text(text);
        }else{
            $('.photogallery__menu a').removeClass('active');
            $(this).addClass('active');
            $('.photogallery__menu ul').slideUp(300);
            $('.photogallery__menu-dropdown').text(text);
        };
    });

    $('.photogallery__menu-dropdown').click(function(){
        $('.photogallery__menu ul').slideToggle(300);
    });
});


