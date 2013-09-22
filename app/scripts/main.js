require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery']
        },
        bootstrapCollapse: {
            deps: ['jquery']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapPopover: {
            deps: ['jquery']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery']
        },
        bootstrapTooltip: {
            deps: ['jquery']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'bootstrapTransition', 'bootstrapCarousel'], function (app, $) {
    'use strict';
    // use app here
    //$('.carousel').carousel();
    $('.carousel').carousel('pause')
    console.log(app);
    console.log('Running jQuery %s', $().jquery);


    var scrollStart = 0;
    var lastScroll = new Date();

            
            $(document).keydown(function(e){
                if (e.keyCode == 40) { 
                    $('.carousel').carousel('next');
                }
                if (e.keyCode == 38) { 
                    $('.carousel').carousel('prev');        
                }
            });

            $(window).on('DOMMouseScroll mousewheel', function (e) {
              
               //if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) 
               var currentTime = new Date;
               if((currentTime.getTime() - lastScroll.getTime()) < 1000)
               {
                  return false;
               }


              if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 
                $('.carousel').carousel('next');
                
              } else {
                $('.carousel').carousel('prev');
             
              }
            lastScroll = new Date();

              return false;
            });


});
