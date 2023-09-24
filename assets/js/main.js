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
    // preloader();
    isotopInit();
  });

  $(function () {
    //mainNav();
    //stickyHeader();
    dynamicBackground();
    counterInit();
    //swiperInit();
    //modalVideo();
    isotopInit();
    slickInit();
    //parallaxEffect();
    //scrollUp();
    //rippleInit();
    accordianInit();
    tabs();
    select2Function();
    //hoverTab();
    //awardHover();
    //hoverActive();
    //progressBar();
    //roundPercentInit();
    review();
    //ecommerce();
    if ($.exists('.wow')) {
      new WOW().init();
    }
  });

  $(window).on('scroll', function () {
    //parallaxEffect();
    //showScrollUp();
  });

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
    5. Swiper Initialize
  --------------------------------------------------------------*/
  // function swiperInit() {
  //   if ($.exists('.cs_slider_1')) {
  //     new Swiper('.cs_slider_1', {
  //       slidesPerView: 1,
  //       loop: true,
  //       speed: 1000,
  //       spaceBetween: 24,
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //       breakpoints: {
  //         575: {
  //           slidesPerView: 2,
  //         },
  //         991: {
  //           slidesPerView: 3,
  //         },
  //       },
  //     });
  //   }
  //   if ($.exists('.cs_slider_1_1')) {
  //     var swiper = new Swiper('.cs_slider_1_1', {
  //       slidesPerView: 1,
  //       loop: true,
  //       speed: 1000,
  //       spaceBetween: 24,
  //       pagination: {
  //         el: '.cs_pagination',
  //         clickable: true,
  //       },
  //       breakpoints: {
  //         575: {
  //           slidesPerView: 2,
  //         },
  //         991: {
  //           slidesPerView: 3,
  //         },
  //         1300: {
  //           slidesPerView: 3,
  //         },
  //       },
  //     });
  //   }
  //   if ($.exists('.cs_slider_2')) {
  //     var swiper2 = new Swiper('.cs_slider_2', {
  //       loop: true,
  //       speed: 1000,
  //       navigation: {
  //         nextEl: '.cs_swiper_next',
  //         prevEl: '.cs_swiper_prev',
  //       },
  //     });
  //   }
  //   if ($.exists('.cs_slider_3')) {
  //     var swiper = new Swiper('.cs_slider_3', {
  //       slidesPerView: 1,
  //       loop: true,
  //       speed: 1000,
  //       spaceBetween: 24,
  //       pagination: false,
  //       breakpoints: {
  //         575: {
  //           slidesPerView: 2,
  //         },
  //         991: {
  //           slidesPerView: 4,
  //         },
  //         1300: {
  //           slidesPerView: 6,
  //         },
  //       },
  //     });
  //   }
  //   if ($.exists('.cs_slider_4')) {
  //     var swiper = new Swiper('.cs_slider_4', {
  //       slidesPerView: 1,
  //       loop: true,
  //       speed: 1000,
  //       pagination: {
  //         el: '.cs_number_pagination',
  //         clickable: true,
  //         renderBullet: function (index, className) {
  //           return '<span class="' + className + '">' + (index + 1) + '</span>';
  //         },
  //       },
  //     });
  //   }
  // }

  /*--------------------------------------------------------------
    6. Modal Video
  --------------------------------------------------------------*/
  // function modalVideo() {
  //   if ($.exists('.cs_video_open')) {
  //     $('body').append(`
  //       <div class="cs_video_popup">
  //         <div class="cs_video_popup_overlay"></div>
  //         <div class="cs_video_popup_content">
  //           <div class="cs_video_popup_layer"></div>
  //           <div class="cs_video_popup_container">
  //             <div class="cs_video_popup_align">
  //               <div class="embed-responsive embed-responsive-16by9">
  //                 <iframe class="embed-responsive-item" src="about:blank"></iframe>
  //               </div>
  //             </div>
  //             <div class="cs_video_popup_close"></div>
  //           </div>
  //         </div>
  //       </div>
  //     `);
  //     $(document).on('click', '.cs_video_open', function (e) {
  //       e.preventDefault();
  //       var video = $(this).attr('href');
  //       video = video.split('?v=')[1].trim();
  //       $('.cs_video_popup_container iframe').attr(
  //         'src',
  //         `https://www.youtube.com/embed/${video}`,
  //       );
  //       $('.cs_video_popup').addClass('active');
  //     });
  //     $('.cs_video_popup_close, .cs_video_popup_layer').on(
  //       'click',
  //       function (e) {
  //         $('.cs_video_popup').removeClass('active');
  //         $('html').removeClass('overflow-hidden');
  //         $('.cs_video_popup_container iframe').attr('src', 'about:blank');
  //         e.preventDefault();
  //       },
  //     );
  //   }
  // }

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
        // filter: '.engineering',
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
    7. Parallax
  --------------------------------------------------------------*/
  // function parallaxEffect() {
  //   $('.cs_parallax').each(function () {
  //     var windowScroll = $(document).scrollTop(),
  //       windowHeight = $(window).height(),
  //       barOffset = $(this).offset().top,
  //       barHeight = $(this).height(),
  //       barScrollAtZero = windowScroll - barOffset + windowHeight,
  //       barHeightWindowHeight = windowScroll + windowHeight,
  //       barScrollUp = barOffset <= windowScroll + windowHeight,
  //       barSctollDown = barOffset + barHeight >= windowScroll;

  //     if (barSctollDown && barScrollUp) {
  //       var calculadedHeight = barHeightWindowHeight - barOffset;
  //       var mediumEffectPixel = barScrollAtZero / 7;
  //       var miniEffectPixel = calculadedHeight / 10;
  //       var miniEffectPixel2 = calculadedHeight / 3;
  //       var miniEffectPixel3 = calculadedHeight / 6;
  //       var miniEffectPixel4 = barScrollAtZero / 5;
  //       // console.log(windowHeight / 2);
  //       $(this)
  //         .find('.cs_to_left')
  //         .css('transform', `translateX(-${miniEffectPixel}px)`);
  //       $(this)
  //         .find('.cs_to_right')
  //         .css('transform', `translateX(${miniEffectPixel}px)`);
  //       $(this)
  //         .find('.cs_to_up')
  //         .css('transform', `translateY(-${miniEffectPixel}px)`);
  //       $(this)
  //         .find('.cs_to_up_2')
  //         .css('transform', `translateY(-${miniEffectPixel2}px)`);
  //       $(this)
  //         .find('.cs_to_up_3')
  //         .css('transform', `translateY(-${miniEffectPixel3}px)`);
  //       $(this)
  //         .find('.cs_to_up_4')
  //         .css('transform', `translateY(-${miniEffectPixel4}px)`);
  //       $(this)
  //         .find('.cs_to_down')
  //         .css('transform', `translateY(${miniEffectPixel}px)`);
  //       $(this)
  //         .find('.cs_to_down_4')
  //         .css('transform', `translateY(${miniEffectPixel4}px)`);
  //       $(this)
  //         .find('.cs_to_rotate')
  //         .css('transform', `rotate(${miniEffectPixel}deg)`);
  //       $(this)
  //         .find('.cs_parallax_bg')
  //         .css('background-position', `center -${mediumEffectPixel}px`);
  //     }
  //   });
  // }

  /*--------------------------------------------------------------
    8. Scroll Up
  --------------------------------------------------------------*/
  // function scrollUp() {
  //   $('.cs_scrollup').on('click', function (e) {
  //     e.preventDefault();
  //     $('html,body').animate(
  //       {
  //         scrollTop: 0,
  //       },
  //       0,
  //     );
  //   });
  // }
  // // For Scroll Up
  // function showScrollUp() {
  //   let scroll = $(window).scrollTop();
  //   if (scroll >= 350) {
  //     $('.cs_scrollup').addClass('cs_scrollup_show');
  //   } else {
  //     $('.cs_scrollup').removeClass('cs_scrollup_show');
  //   }
  // }
  /*--------------------------------------------------------------
    9. Select2 function
  --------------------------------------------------------------*/
  function select2Function() {
    if ($.exists('.cs_select1')) {
      $('.cs_select1').select2({
        placeholder: function () {
          $(this).data('placeholder');
        },
      });
    }
  }
  /*--------------------------------------------------------------
    11. Dynamic contact form
  --------------------------------------------------------------*/
  // if ($.exists('#cs_form')) {
  //   const form = document.getElementById('cs_form');
  //   const result = document.getElementById('cs_result');

  //   form.addEventListener('submit', function (e) {
  //     const formData = new FormData(form);
  //     e.preventDefault();
  //     var object = {};
  //     formData.forEach((value, key) => {
  //       object[key] = value;
  //     });
  //     var json = JSON.stringify(object);
  //     result.innerHTML = 'Please wait...';

  //     fetch('https://api.web3forms.com/submit', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       body: json,
  //     })
  //       .then(async response => {
  //         let json = await response.json();
  //         if (response.status == 200) {
  //           result.innerHTML = json.message;
  //         } else {
  //           console.log(response);
  //           result.innerHTML = json.message;
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         result.innerHTML = 'Something went wrong!';
  //       })
  //       .then(function () {
  //         form.reset();
  //         setTimeout(() => {
  //           result.style.display = 'none';
  //         }, 5000);
  //       });
  //   });
  // }

  /*--------------------------------------------------------------
    12. Ripple
  --------------------------------------------------------------*/
  // function rippleInit() {
  //   if ($.exists('.cs_ripple_activate')) {
  //     $('.cs_ripple_activate').each(function () {
  //       $('.cs_ripple_activate').ripples({
  //         resolution: 512,
  //         dropRadius: 20,
  //         perturbance: 0.04,
  //       });
  //     });
  //   }
  // }

  /*--------------------------------------------------------------
    11. Counter Animation
  --------------------------------------------------------------*/
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
  /*--------------------------------------------------------------
    10. Accordian
  --------------------------------------------------------------*/
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
  /*--------------------------------------------------------------
    9. Tabs
  --------------------------------------------------------------*/
  function tabs() {
    $('.cs_tab_links a').on('click', function (e) {
      var currentAttrValue = $(this).attr('href');
      $('.cs_tabs ' + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
    });
  }
  /*--------------------------------------------------------------
    15. Hover Tab
  --------------------------------------------------------------*/
  // function hoverTab() {
  //   $('.cs_hover_tab a').hover(function () {
  //     $(this)
  //       .parents('.cs_hover_tab')
  //       .addClass('active')
  //       .siblings()
  //       .removeClass('active');
  //   });
  // }
  /*--------------------------------------------------------------
    **. Award Wining
  --------------------------------------------------------------*/
  // function awardHover() {
  //   const awardItem = document.querySelectorAll('.cs_awaard.cs_style_1');

  //   function followImageCursor(event, awardItem) {
  //     const contentBox = awardItem.getBoundingClientRect();
  //     const dx = event.clientX - contentBox.x;
  //     const dy = event.clientY - contentBox.y;
  //     awardItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  //   }

  //   awardItem.forEach((item, i) => {
  //     item.addEventListener('mousemove', event => {
  //       setInterval(followImageCursor(event, item), 1000);
  //     });
  //   });
  // }
  /*--------------------------------------------------------------
    9. Social Button Hover
  --------------------------------------------------------------*/
  // function hoverActive() {
  //   $('.cs_hover_active').hover(function () {
  //     $(this).addClass('active').siblings().removeClass('active');
  //   });
  // }
  /*--------------------------------------------------------------
    14. Progress Bar
  --------------------------------------------------------------*/
  // function progressBar() {
  //   $('.cs_progress').each(function () {
  //     var progressPercentage = $(this).data('progress') + '%';
  //     $(this).find('.cs_progress_in').css('width', progressPercentage);
  //   });
  // }
  /*--------------------------------------------------------------
    7. Review
  --------------------------------------------------------------*/
  function review() {
    $('.cs_rating').each(function () {
      var review = $(this).data('rating');
      var reviewVal = review * 20 + '%';
      $(this).find('.cs_rating_percentage').css('width', reviewVal);
    });
  }
  /*--------------------------------------------------------------
    5. Slick Slider
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
  /*--------------------------------------------------------------
    20. Round Percent
  --------------------------------------------------------------*/
  // function roundPercentInit() {
  //   if ($.exists('.cs_round_progress_percentage')) {
  //     $(window).on('scroll', function () {
  //       function winScrollPosition() {
  //         var scrollPos = $(window).scrollTop(),
  //           winHeight = $(window).height();
  //         var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
  //         return scrollPosition;
  //       }

  //       $('.cs_round_progress_percentage').each(function () {
  //         var roundEffect = $(this).offset().top;
  //         if (roundEffect < winScrollPosition()) {
  //           $(this).each(function () {
  //             let roundRadius = $(this).find('circle').attr('r');
  //             let roundPercent = $(this).data('percent');
  //             let roundCircum = 2 * roundRadius * Math.PI;
  //             let roundDraw = (roundPercent * roundCircum) / 100 - 3;
  //             $(this).css('stroke-dasharray', roundDraw + ' 999');
  //           });
  //         }
  //       });
  //     });
  //   }
  // }
})(jQuery); // End of use strict
