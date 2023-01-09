// scroll하면 헤더배경색 변하기
$(function () {
    let isOn = false;
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        if (!isOn) {
          $('header').addClass('on');
          isOn = true;
        }
      } else {
        if (isOn) {
          $('header').removeClass('on');
          isOn = false;
        }
      }
    });
  
  });
  
  
  // 햄버거메뉴 누르면 X
  const menuTrigger = document.querySelector('.menu-trigger');
  
  menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
  });
  
  
  
  $('.plus').click(function () {
    $(this).not('.plus').removeClass(' active').parent().next().slideUp();
    $(this).toggleClass(' active').parent().next().slideToggle();
  
  });
  

//   헤더 색상바꾸기
$(function(){
  $('.menu-trigger span').css('background-color', 'rgb(128,128,128)');
  $('.logo_text>p').css('color', 'rgb(128,128,128)');
  $('.country_toggle span').css('color', 'rgb(128,128,128)')
  $('.dropdown_label').css('color', 'rgb(128,128,128)')
  $('#book_tap a').css({ 'color': 'rgb(128,128,128)' });
  $('#book_tap').css('border', '1px solid rgb(128,128,128)');
  $('.dropdown_menu').css('box-shadow', '0 0 8px #99a1a7 ');
  $('.cstoggle+ul').css('box-shadow', '0 0 8px #99a1a7 ');
});
// 사이드메뉴 나타나게
$(function () {
    $('.menu-trigger').click(function () {
      if ($('#menu_trigger').css('width') == '0px') {
        $('#menu_trigger').css('width', '100%');
  
        $('.menu-trigger span').css('background-color', 'rgb(128,128,128)');
        $('.logo_text>p').css('color', 'rgb(128,128,128)');
        $('.country_toggle span').css('color', 'rgb(128,128,128)')
        $('.dropdown_label').css('color', 'rgb(128,128,128)')
        $('#book_tap a').css({ 'color': 'rgb(128,128,128)' });
        $('#book_tap').css('border', '1px solid rgb(128,128,128)');
        $('.dropdown_menu').css('box-shadow', '0 0 8px #99a1a7 ');
        $('.cstoggle+ul').css('box-shadow', '0 0 8px #99a1a7 ');
  
        $('#about_us').css('transform', 'translateY(0px)').css('opacity', '1');
        $('#accom').css('transform', 'translateY(0px)').css('opacity', '1');
  
        $('#special').css('transform', 'translateY(0px)').css('opacity', '1');
  
        $('#offers').css('transform', 'translateY(0px)').css('opacity', '1');
  
        $('#community').css('transform', 'translateY(0px)').css('opacity', '1');
  
        $('#reservation').css('transform', 'translateY(0px)').css('opacity', '1');
  
        $('.side_footer').css('opacity', '1');
  
      } else {
  
     
        $('.dropdown_menu').css('box-shadow', 'none ');
        $('.cstoggle+ul').css('box-shadow', 'none');
        $('#about_us').css('transform', 'translateY(100px)').css('opacity', '0');
        $('#accom').css('transform', 'translateY(100px)').css('opacity', '0');
  
        $('#special').css('transform', 'translateY(100px)').css('opacity', '0');
  
        $('#offers').css('transform', 'translateY(100px)').css('opacity', '0');
  
        $('#community').css('transform', 'translateY(100px)').css('opacity', '0');
  
        $('#reservation').css('transform', 'translateY(100px)').css('opacity', '0');
  
        $('.side_footer').css('opacity', '0');
        $('#menu_trigger').css({ 'width': '0px' });
  
      }
    });
  });
  
  
// EU

$(function () {
    let btn = $(".country_toggle");
    let layer = $('.dropdown_menu');
  
    btn.click(function () {
      layer.slideToggle();
  
    });
  });
  
  
  
  
  
  // cs
  $(function () {
    let btn1 = $('.cstoggle');
    let layer1 = $('.csdropdown');
  
    btn1.click(function () {
      layer1.slideToggle();
    });
  });
  

  let mal1=window.matchMedia('screen and (min-width:500px) and (max-width:1599px)');
  let mal2=window.matchMedia('screen and (min-width:320px) and (max-width:766px)');
  if(mal1.matches){
    $('.royal h2').text('Royal Suite room');
    $('.tm_img h2').text('Delux Twin Room');
    $('.dm_img h2').text('Delux Double Room');
    $('.t2m_img h2').text('Delux Twin SPA Room ');
    $('.d2m_img h2').text('Delux Double SPA Room ');
  }




$('.prev1').click(function () {
  $('.rimg .r_img1:last').prependTo('.rimg');
  $('.rimg').css({ marginLeft: '-100%' });
  $('.rimg').stop().animate({ marginLeft: 0 }, 800);

});

$('.next1').click(function () {
  $('.rimg').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('.rimg .r_img1:first').appendTo('.rimg');
    $('.rimg').css({ marginLeft: 0 });
  });
});


$('.prev2').click(function () {
  $('#s-img-box .s_img1:last').prependTo('#s-img-box');
  $('#s-img-box').css({ marginLeft: '-100%' });
  $('#s-img-box').stop().animate({ marginLeft: 0 }, 800);

});

$('.next2').click(function () {
  $('#s-img-box').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('#s-img-box .s_img1:first').appendTo('#s-img-box');
    $('#s-img-box').css({ marginLeft: 0 });
  });
});



$('.prev3').click(function () {
  $('#t-img-box .t_img1:last').prependTo('#t-img-box');
  $('#t-img-box').css({ marginLeft: '-100%' });
  $('#t-img-box').stop().animate({ marginLeft: 0 }, 800);

});

$('.next3').click(function () {
  $('#t-img-box').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('#t-img-box .t_img1:first').appendTo('#t-img-box');
    $('#t-img-box').css({ marginLeft: 0 });
  });
});


$('.prev4').click(function () {
  $('#t2-img-box .t2_img1:last').prependTo('#t2-img-box');
  $('#t2-img-box').css({ marginLeft: '-100%' });
  $('#t2-img-box').stop().animate({ marginLeft: 0 }, 800);

});

$('.next4').click(function () {
  $('#t2-img-box').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('#t2-img-box .t2_img1:first').appendTo('#t2-img-box');
    $('#t2-img-box').css({ marginLeft: 0 });
  });
});

$('.prev5').click(function () {
  $('#d-img-box .d_img1:last').prependTo('#d-img-box');
  $('#d-img-box').css({ marginLeft: '-100%' });
  $('#d-img-box').stop().animate({ marginLeft: 0 }, 800);

});

$('.next5').click(function () {
  $('#d-img-box').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('#d-img-box .d_img1:first').appendTo('#d-img-box');
    $('#d-img-box').css({ marginLeft: 0 });
  });
});


$('.prev6').click(function () {
  $('#d2-img-box .d2_img1:last').prependTo('#d2-img-box');
  $('#d2-img-box').css({ marginLeft: '-100%' });
  $('#d2-img-box').stop().animate({ marginLeft: 0 }, 800);

});

$('.next6').click(function () {
  $('#d2-img-box').stop().animate({ marginLeft: '-100%' }, 800, function () {
    $('#d2-img-box .d2_img1:first').appendTo('#d2-img-box');
    $('#d2-img-box').css({ marginLeft: 0 });
  });
});

window.addEventListener('scroll',function(){

let value=window.scrollY
  console.log('scrollY' ,value)

   if(value>50){
    $('#r-text-box').css('animation','slide1 1s').css('opacity','1');
   }if(value>800){
    $('#s-text-box').css('animation','slide2 1s').css('opacity','1');
   }if(value>2000){
    $('#t-text-box').css('animation','slide1 1s').css('opacity','1');
   }if(value>3000){
   $('#t2-text-box').css('animation','slide2 1s').css('opacity','1');
   }if(value>4000){
    $('#d-text-box').css('animation','slide1 1s').css('opacity','1');
    }if(value>5000){
      $('#d2-text-box').css('animation','slide2 1s').css('opacity','1');
      }


  });

