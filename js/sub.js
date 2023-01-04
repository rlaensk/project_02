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
  