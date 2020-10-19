
$(function() {

  //after refresh, to top
  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  // For header menu
  $(document).on('click','.menu_bar', function(){
    $('.sp_menu').slideToggle();
    $(this).toggleClass('is_active');
    if ($(this).hasClass('is_active')) {
      $('.menu_bar_txt').text('CLOSE');
      $('.sp_menu li a').css('transform', 'translateY(0)');
    }else {
      $('.menu_bar_txt').text('MENU');
      $('.sp_menu li a').css('transform', 'translateY(100px)');
    }
    return false;
  });


  $(window).load(function () { 
    $("#wrapper").removeClass("view");
    $(".video_sec").css({
      "transform" : "perspective(1000px) translate3d(0, 0, 0) rotateX(0deg)",
      "transform-origin" : "50% 100%",
    });
  });


      // slide-up script
  $(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '40px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



  //IE
  if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
   $('body').on("mousewheel", function () {
   event.preventDefault();
   var wd = event.wheelDelta;
   var csp = window.pageYOffset;
   window.scrollTo(0, csp - wd);
   });
   }

   if ($(window).innerWidth()<1080) {
      $(".top_img_list .top_img02 p").attr('data-aos','scroll-slideRight');
      $(".top_img_list .top_img03 p").attr('data-aos','scroll-slideLeft');
    } else {
      $(".top_img_list .top_img02 p").attr('data-aos','scroll-flip');
      $(".top_img_list .top_img03 p").attr('data-aos','scroll-slideRight');
    }

   $(window).resize(function() {
    if ($(window).innerWidth()<1080) {
      $(".top_img_list .top_img02 p").attr('data-aos','scroll-slideRight');
      $(".top_img_list .top_img03 p").attr('data-aos','scroll-slideLeft');
    } else {
      $(".top_img_list .top_img02 p").attr('data-aos','scroll-flip');
      $(".top_img_list .top_img03 p").attr('data-aos','scroll-slideRight');
    }
  });

   // smooth scroll to section
  var windowWidth = $(window).width();
   if (windowWidth< 768){
      var height = 100;
   }
   else {
    var height = 140;
   }

      $(window).load(function(){
      function goToByScroll(id){
      $("html, body").animate({scrollTop: $("#"+id).offset().top - 70 }, 1000);
      }
      if(window.location.hash != '') {
      goToByScroll(window.location.hash.substr(1));
      }
      });

});


