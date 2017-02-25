$(document).ready(function(){
    //navigation search form    
    $("#topsearch_form").click(function(){
        $(".mainmenu .header-search").slideToggle();
    });

    $('#property-dtl-thumbslider').lightSlider({
        gallery:true,
        item:1,
        thumbItem:4,
        slideMargin: 0,
        thumbMargin:0,
        speed:500,
        auto:false,
        loop:true,
        iframeMaxWidth:'100%',
        prevHtml: '<i class="fa fa-angle-left"></i>',
        nextHtml: '<i class="fa fa-angle-right"></i>',
        addClass: 'property-thumbnail',
        responsive : [
            {
                breakpoint:480,
                settings: {
                    thumbItem:2,
                }
            },
        ],
        onSliderLoad: function() {
            $('#property-dtl-thumbslider').removeClass('cS-hidden');
        } 
    });
    //master slider
    $('#masterslider').masterslider({
        width: 1089,
        height: 735,
        
        // more options...
        controls : {
            
            
            thumblist:{arrows:true, autohide:false  , dir:"h", align:"bottom",width: 193,height: 130,margin:50,space:50,count: 4}
            
        }
        
    });
});

//testimonial
$('#testimonial .owl-carousel, #sidebar-testimonial .owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:false

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