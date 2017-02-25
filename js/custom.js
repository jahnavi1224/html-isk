$(document).ready(function(){
    //navigation search form    
    $("#topsearch_form").click(function(){
        $(".mainmenu .header-search").slideToggle();
    });
    //property-search-form sticky
    if ( $('div').hasClass( "innerpage-content" ) ) {
        $target = $('.innerpage-content');
        h_height = $('header').height();
        targetoffsetTop = $target.offset().top - h_height;
        search_h = $('.header-property-search').height();
        //pro_search = css('height','search_h');
        div_add = true;
        
        $(window).scroll(function() {
          if($(window).width() > 767){
            if ($(window).scrollTop() > targetoffsetTop ) {
                $('.header-property-search').addClass('stickysearch').css('top',h_height);
              
                /*if (div_add) {
                    $('.header-property-search').after("<div class='apended-div' style= 'height:"+ search_h + "px;'></div>");
                    div_add = false;
                }*/

            }   
            else{
                $('.header-property-search').removeClass('stickysearch').css('top','0');
                
                    //$('.apended-div').remove();
                 
            }
          }
        });
    }

    $('#property-dtl-thumbslider').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 0,
        thumbMargin:0,
        currentPagerPosition:'left',
        speed:500,
        auto:true,
        loop:true,
        
        prevHtml: '<i class="fa fa-angle-left"></i>',
        nextHtml: '<i class="fa fa-angle-right"></i>',
        addClass: 'property-thumbnail',
        responsive : [
            {
                breakpoint:991,
                settings: {
                    thumbItem:3,

                  }
            },
            {
                breakpoint:639,
                settings: {
                    thumbItem:2,
                }
            },
            {
                breakpoint:479,
                settings: {
                    thumbItem:1,
                }
            },
        ],
        onSliderLoad: function() {
            $('#property-dtl-thumbslider').removeClass('cS-hidden');
        } 
    });
    
});

//testimonial
$('#testimonial .owl-carousel, #sidebar-testimonial .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
//properies slider
$('#properties-slider .owl-carousel').owlCarousel({
    loop:true,
    items:4,
    margin:30,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
        0:{
            items:1
        },
        480:{
            items:2
        },
        768: {
            items:3
        },
        1023:{
            items:4
        }
    }

});
//sidebar properies slider
$('#sidebar-propery .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:30,
    nav:false,
    responsive: {
        0:{
            items:1
        },
        480:{
            items:2
        },
        768: {
            items:1
        },
        1023:{
            items:1
        }
    }

});
// submenu mobile toggle
$('.mainmenu .navbar-nav li ul').prev('a').after('<span class="glyphicon glyphicon-plus">&nbsp;</span>');
    $(".glyphicon").click(function(){
       if(false == $(this).next().is(':visible'))
       {
           $(this).next().slideDown();
           $(this).removeClass("glyphicon-plus");
           $(this).addClass("glyphicon-minus");
       }
       else
       {
           $(this).next().slideUp();
           $(this).removeClass("glyphicon-minus");
           $(this).addClass("glyphicon-plus");
       }
});