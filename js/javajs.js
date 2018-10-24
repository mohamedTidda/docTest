/* global $, alert, console */

$(function () {
   
    'use strict';
        // ----------------------------------------------- header height -------------------------------------------
    var myHeader = $('.header');
    myHeader.height($(window).height());
    $(window).resize(function () {
            
        myHeader.height($(window).height());
    });

// -----------------------------------------------------------------links add active class---------------------------------------
    $('.links li ').click(function () {
        $(this).parent.addClass('home').siblings().removeClass('home');
    });
    
    // -----------------------------------------------------------------bxslider list iteam center 
    
   
  /*   $('.bxslider').each(function () {
         $(this).css('paddingTop' , ($(window).height() - $('.bxslider li ').height())/2);
         
    }); */
    
    
    // ------------------------------------------------bxslider -------------------------------------------------------------
    $('.bxslider').bxSlider();
    
     //-----------------------------------smooth scroll to div service-----------------------------------------------------
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
      //  c'est a dire : console.log($(this).data('value'));
        
    });
    //  ------------------------our auto slider code (What our clients say)---------------------------------------------------
    
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
                
            }
            
        });
        
        
        //------------------------------------------mixit up-------------------------------------------------------------------
        $('#container').mixItUp();
        
        // ----------------------------------------------shuflle links--------------------------------------------------------
        
        $('.shuflle li').click(function () {
            $(this).addClass('selected').siblings().removeClass('selected'); 
        });
        //-------------------------------nice scroll-----------------------------------------------------------------
        $('html').niceScroll();
        //------------------------------------------------------
            
    }());
      
});