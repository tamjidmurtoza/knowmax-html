(function ($) {
  'use strict';

  /*
  |--------------------------------------------------------------------------
  | Template Name: KnowMax
  | Author: Laralink
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Preloader
  | 2. Mobile Menu
  | 3. Sticky Header
  | 4. Dynamic Background
  | 5. Swiper Initialize
  | 6. Modal Video
  | 7. Parallax
  | 8. Scroll Up
  | 9. Portfolio Section
  | 10. Circle Button Animation
  | 11. Dynamic contact form
  | 12. RippleInit
  | 13. Random Portfolio
  | 14. Cursor Animation
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on('load', function () {
    preloader();
    isotopInit();
  });

  $(function () {
    //mainNav();
    //stickyHeader();
    dynamicBackground();
    counterInit();
    modalVideo();
    isotopInit();
    lightGallery();
    slickInit();
    scrollUp();
    accordianInit();
    tabs();
    select2Function();
    catToggle();
    review();
    animationInit();
    progressBar();
    modal();
    dataTable();
  });

  $(window).on('scroll', function () {
    showScrollUp();
    //animationInit();
  });
/*--------------------------------------------------------------
    1. Preloader
  --------------------------------------------------------------*/
  function preloader() {
    setInterval(() => {
     $('.cs_preloader').addClass("hide");
    }, calculateWindowLoadTime());
  }
  /*-----------------------------------------------------------
  Window load time calculation
  --------------------------------------------------------------*/
   function calculateWindowLoadTime() {
    if (window.performance && window.PerformanceNavigationTiming) {
      const timing = window.PerformanceNavigationTiming;
      const loadTime = timing.navigationStart - timing.loadEventEnd;
      return loadTime;
    } else {
      console.log('Performance API is not supported in this browser.');
    }
  }
  /*--------------------------------------------------------------
    2. Mobile Menu
  --------------------------------------------------------------*/
  // function mainNav() {
  //   $('.cs_nav').append('<span class="cs_menu_toggle"><span></span></span>');
  //   $('.menu-item-has-children').append(
  //     '<span class="cs_munu_dropdown_toggle"><span></span></span>',
  //   );
  //   $('.cs_menu_toggle').on('click', function () {
  //     $(this)
  //       .toggleClass('cs_toggle_active')
  //       .siblings('.cs_nav_list')
  //       .toggleClass('cs_active');
  //   });
  //   $('.cs_menu_toggle')
  //     .parents('body')
  //     .find('.cs_side_header')
  //     .addClass('cs_has_main_nav');
  //   $('.cs_menu_toggle')
  //     .parents('body')
  //     .find('.cs_toolbox')
  //     .addClass('cs_has_main_nav');
  //   $('.cs_munu_dropdown_toggle').on('click', function () {
  //     $(this).toggleClass('active').siblings('ul').slideToggle();
  //     $(this).parent().toggleClass('active');
  //   });

  //   // Mega Menu
  //   // $('.cs_mega_wrapper>li>a').removeAttr('href');

  //   // Side Nav
  //   $('.cs_icon_btn').on('click', function () {
  //     $('.cs_side_header').addClass('active');
  //   });
  //   $('.cs_close, .cs_side_header_overlay').on('click', function () {
  //     $('.cs_side_header').removeClass('active');
  //   });
  //   //  Menu Text Split
  //   $('.cs_animo_links > li > a').each(function () {
  //     let xxx = $(this).html().split('').join('</span><span>');
  //     $(this).html(`<span class="cs_animo_text"><span>${xxx}</span></span>`);
  //   });
  // }

  /*--------------------------------------------------------------
    3. Sticky Header
  --------------------------------------------------------------*/
  // function stickyHeader() {
  //   var $window = $(window);
  //   var lastScrollTop = 0;
  //   var $header = $('.cs_sticky_header');
  //   var headerHeight = $header.outerHeight() + 30;

  //   $window.scroll(function () {
  //     var windowTop = $window.scrollTop();

  //     if (windowTop >= headerHeight) {
  //       $header.addClass('cs_gescout_sticky');
  //     } else {
  //       $header.removeClass('cs_gescout_sticky');
  //       $header.removeClass('cs_gescout_show');
  //     }

  //     if ($header.hasClass('cs_gescout_sticky')) {
  //       if (windowTop < lastScrollTop) {
  //         $header.addClass('cs_gescout_show');
  //       } else {
  //         $header.removeClass('cs_gescout_show');
  //       }
  //     }

  //     lastScrollTop = windowTop;
  //   });
  // }

  /*--------------------------------------------------------------
    4. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $('[data-src]').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')',
      });
    });
  }

  /*--------------------------------------------------------------
    5. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    if ($.exists('.cs_video_open')) {
      $('body').append(`
        <div class="cs_video_popup">
          <div class="cs_video_popup_overlay"></div>
          <div class="cs_video_popup_content">
            <div class="cs_video_popup_layer"></div>
            <div class="cs_video_popup_container">
              <div class="cs_video_popup_align">
                <div class="embed_responsive embed_responsive_16by9">
                  <iframe class="embed_responsive_item" src="about:blank"></iframe>
                </div>
              </div>
              <div class="cs_video_popup_close"></div>
            </div>
          </div>
        </div>
      `);
      $(document).on('click', '.cs_video_open', function (e) {
        e.preventDefault();
        var video = $(this).attr('href');

        $('.cs_video_popup_container iframe').attr('src', `${video}`);

        $('.cs_video_popup').addClass('active');
      });
      $('.cs_video_popup_close, .cs_video_popup_layer').on(
        'click',
        function (e) {
          $('.cs_video_popup').removeClass('active');
          $('html').removeClass('overflow-hidden');
          $('.cs_video_popup_container iframe').attr('src', 'about:blank');
          e.preventDefault();
        },
      );
    }
  }
  /*--------------------------------------------------------------
    6. Isotop Initialize
  --------------------------------------------------------------*/
  function isotopInit() {
    if ($.exists('.cs_isotope')) {
      $('.cs_isotope').isotope({
        itemSelector: '.cs_isotope_item',
        transitionDuration: '0.60s',
        percentPosition: true,
        masonry: {
          columnWidth: '.cs_grid_sizer',
        },
      });
      /* Active Class of Portfolio*/
      $('.cs_isotope_filter ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
      /*=== Portfolio filtering ===*/
      $('.cs_isotope_filter ul').on('click', 'a', function () {
        var filterElement = $(this).attr('data-filter');
        $('.cs_isotope').isotope({
          filter: filterElement,
        });
      });
    }
  }
  /*--------------------------------------------------------------
   7. Light Gallery
 --------------------------------------------------------------*/
  function lightGallery() {
    $('.cs_lightgallery').each(function () {
      $(this).lightGallery({
        selector: '.cs_lightbox_item',
        subHtmlSelectorRelative: false,
        thumbnail: false,
        mousewheel: true
      });
    });
  }
  /*----------------------------------------------------------
  8. category Toggle function
  -----------------------------------------------------------*/
  function catToggle() {
    $('.cs_category_toggle').click(function () {
      $(this).toggleClass("active");
      $(this).siblings(".cs_hidden_text").slideToggle();
      $(this).siblings("a").toggleClass("dark");
    })
    $('.cs_widget_title').click(function () {
      $(this).siblings(".cs_widget_body").slideToggle();
      $(this).toggleClass("active");
    })
  }

  /*-----------------------------------------------------------
    9. Scroll Up
  ------------------------------------------------------------*/
  function scrollUp() {
    $('.cs_scrollup').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        0,
      );
    });
  }
  // For Scroll Up
  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $('.cs_scrollup').addClass('cs_scrollup_show');
    } else {
      $('.cs_scrollup').removeClass('cs_scrollup_show');
    }
  }
  /*----------------------------------------------------------
    10. Select2 function
  ----------------------------------------------------------*/
  function select2Function() {
    if ($.exists('.cs_select1')) {
      $('.cs_select1').select2({
        placeholder: function () {
          $(this).data('placeholder')
        },
      });
    }
  }
 
  /*---------------------------------------------------------
    11. Counter Animation
  ----------------------------------------------------------*/
  function counterInit() {
    if ($.exists('.odometer')) {
      $(window).on('scroll', function () {
        function winScrollPosition() {
          var scrollPos = $(window).scrollTop(),
            winHeight = $(window).height();
          var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
          return scrollPosition;
        }

        $('.odometer').each(function () {
          var elemOffset = $(this).offset().top;
          if (elemOffset < winScrollPosition()) {
            $(this).html($(this).data('count-to'));
          }
        });
      });
    }
  }
  /*---------------------------------------------------------
    12. Accordian
  ---------------------------------------------------------*/
  function accordianInit() {
    var $this = $(this);
    $('.cs_accordian').children('.cs_accordian_body').hide();
    $('.cs_accordian.active').children('.cs_accordian_body').show();
    $('.cs_accordian_title').on('click', function () {
      $(this)
        .parent('.cs_accordian')
        .siblings()
        .children('.cs_accordian_body')
        .slideUp(250);
      $(this).siblings().slideDown(250);
      /* Accordian Active Class */
      $(this).parents('.cs_accordian').addClass('active');
      $(this).parent('.cs_accordian').siblings().removeClass('active');
    });
  }
  /*---------------------------------------------------------
  13. Tabs
  ------------------------------------------------------------*/
  function tabs() {
    $('.cs_tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs_tabs '  + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }
  /*-----------------------------------------------------------
    14. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs_rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs_rating_percentage').css('width', reviewVal);
    });
  }
  /*-----------------------------------------------------------
    15. Slick Slider
  --------------------------------------------------------------*/
  function slickInit() {
    if ($.exists('.cs_slider')) {
      $('.cs_slider').each(function () {
        // Slick Variable
        var $ts = $(this).find('.cs_slider_container');
        var $slickActive = $(this).find('.cs_slider_wrapper');

        // Auto Play
        var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
        // Auto Play Time Out
        var autoplaySpdVar = 3000;
        if (autoPlayVar > 1) {
          autoplaySpdVar = autoPlayVar;
          autoPlayVar = 1;
        }
        // Slide Change Speed
        var speedVar = parseInt($ts.attr('data-speed'), 10);
        // Slider Loop
        var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
        // Slider Center
        var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
        // Variable Width
        var variableWidthVar = Boolean(
          parseInt($ts.attr('data-variable-width'), 10),
        );
        // Pagination
        var paginaiton = $(this)
          .find('.cs_pagination')
          .hasClass('cs_pagination');
        // Slide Per View
        var slidesPerView = $ts.attr('data-slides-per-view');
        if (slidesPerView == 1) {
          slidesPerView = 1;
        }
        if (slidesPerView == 'responsive') {
          var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
          var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
          var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
          var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
          var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
        }
        // Fade Slider
        var fadeVar = parseInt($($ts).attr('data-fade-slide'));
        fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

        // Slick Active Code
        $slickActive.slick({
          centerMode: centerVar,
          autoplay: autoPlayVar,
          dots: paginaiton,
          speed: speedVar,
          infinite: loopVar,
          autoplaySpeed: autoplaySpdVar,
          fade: fadeVar,
          prevArrow: $(this).find('.cs_left_arrow'),
          nextArrow: $(this).find('.cs_right_arrow'),
          appendDots: $(this).find('.cs_pagination'),
          slidesToShow: slidesPerView,
          variableWidth: variableWidthVar,
          // slidesToScroll: slidesPerView,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: lgPoint,
                // slidesToScroll: lgPoint,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: mdPoint,
                // slidesToScroll: mdPoint,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: smPoint,
                // slidesToScroll: smPoint,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: xsPoing,
                slidesToScroll: xsPoing,
              },
            },
          ],
        });
      });
    }
    // Testimonial Slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
    });
  }
  /*-----------------------------------------------------------
    16. Animate function
  --------------------------------------------------------------*/
  function animationInit(){
    new WOW().init({
      once:true,
    });
  }
  /*-----------------------------------------------------------
    17. Progress Bar
  --------------------------------------------------------------*/
  function progressBar() {
    $('.cs_progress').each(function () {
      let progress = $(this).data('progress');
      if(progress>100){
        progress = 100
      }
      $(this).find('.cs_progress_percentage').css('width', `${progress}%`);
    });
  }
  /*--------------------------------------------------------------
   18. Modal
 --------------------------------------------------------------*/
  function modal() {
    $('.cs_modal_btn').on('click', function () {
      var modalData = $(this).attr('data-modal');
      $(`[data-modal='${modalData}']`).addClass('active');
      $(this).parents('.cs_modal').removeClass('active');
    });
    $('.cs_close_modal, .cs_close_overlay').on('click', function () {
      var modalData = $(this).parents('.cs_modal').attr('data-modal');
      $(`[data-modal='${modalData}']`).removeClass('active');
    });
  }
  /*--------------------------------------------------------------
   19. dataTable
 --------------------------------------------------------------*/
  function dataTable() {
    $('.cs_dataTable').DataTable();
  }
})(jQuery); // End of use strict
