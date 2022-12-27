// 햄버거메뉴 누르면 X
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});

// 사이드메뉴 나타나게
$(function () {
  $('.menu-trigger').click(function () {
    if ($('#menu_trigger').css('width') == '0px') {
      $('#menu_trigger').css('width', '100%');

      $('.menu-trigger span').css('background-color','rgb(128,128,128)');
      $('.logo_text>p').css('color','rgb(128,128,128)');
      $('.country_toggle span').css('color','rgb(128,128,128)')
      $('.dropdown_label').css('color','rgb(128,128,128)')
      $('#book_tap a').css({'color':'rgb(128,128,128)'});
      $('#book_tap').css('border','1px solid rgb(128,128,128)');
      $('.dropdown_menu').css('box-shadow','0 0 8px #99a1a7 ');
      $('.cstoggle+ul').css('box-shadow','0 0 8px #99a1a7 ');

       $('#about_us').css('transform', 'translateY(0px)').css('opacity', '1');
      $('#accom').css('transform', 'translateY(0px)').css('opacity', '1');

      $('#special').css('transform', 'translateY(0px)').css('opacity', '1');

      $('#offers').css('transform', 'translateY(0px)').css('opacity', '1');

      $('#community').css('transform', 'translateY(0px)').css('opacity', '1');

      $('#reservation').css('transform', 'translateY(0px)').css('opacity', '1');
      $('.side_footer').fadeIn();
    } else {
      $('.side_footer').fadeOut();
      $('.logo_text>p').css('color','#fff');
      $('.menu-trigger span').css('background-color','#fff');
      $('.country_toggle span').css('color','#fff');
      $('.dropdown_label').css('color','#fff');
      $('#book_tap a').css('color','#fff');
      $('#book_tap').css('border','1px sold #fff');
      $('.dropdown_menu').css('box-shadow','none ');
      $('.cstoggle+ul').css('box-shadow','none');
      $('#about_us').css('transform', 'translateY(100px)').css('opacity', '0');
      $('#accom').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#special').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#offers').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#community').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#reservation').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#menu_trigger').css({ 'width': '0px' });

    }
  });
});


// // 사이드메뉴 밑에서올라오게
// $(function(){
  
//   if($('#menu_trigger').css('width')=='0px'){
//     $('.menu-trigger').click(function(){
//     $('#about_us').css('transform','translateY(0px)').css('opacity','1');
//     $('#accom').css('transform','translateY(0px)').css('opacity','1');
 
//    $('#special').css('transform','translateY(0px)').css('opacity','1');

//   $('#offers').css('transform','translateY(0px)').css('opacity','1');

//   $('#community').css('transform','translateY(0px)').css('opacity','1');

//   $('#reservation').css('transform','translateY(0px)').css('opacity','1');
//     }); 
// } 
// });

// // 사이드메뉴 열릴때 헤더css변경
// $(function(){
//   $('.menu-trigger').click(function(){
//    if($('#menu_trigger').css('width')=='0px'){
//      $('.menu-trigger span').css('background-color','rgb(128,128,128)');
//      $('.logo_text>p').css('color','rgb(128,128,128)');
//      $('.country_toggle span').css('color','rgb(128,128,128)')
//      $('.dropdown_label').css('color','rgb(128,128,128)')
//      $('#book_tap a').css({'color':'rgb(128,128,128)'});
//      $('#book_tap').css('border','1px sold');
     
     
// }else{
//   $('.logo_text>p').css('color','#fff');
//   $('.menu-trigger span').css('background-color','#fff');
//   $('.country_toggle span').css('color','#fff');
//   $('.dropdown_label').css('color','#fff');
// }
// });
// });



  




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
    let layer1 = $('.cstoggle+ul')

    btn1.click(function () {
      layer1.slideToggle();
    });
  });


  // hotel room

  $('.next_1').click(function () {
    $('.room_img_box .room_img:last').prependTo('.room_img_box');
    $('.room_img_box').css('margin-left', -100.5);
    $('.room_img_box').stop().animate({ marginLeft: 0 }, 1000);
  });

  $('.next_2').click(function () {
    $('.room_img_box').stop().animate({ marginLeft: -600.5 }, 1000, function () {
      $('.room_img_box .room_img:first').appendTo('.room_img_box');
      $('.room_img_box').css({ marginLeft: 0 });
    })
  });

  $(function () {
    $('.next_1').click(function () {
      $('.room1').show();
      $('.room2').hide();
      $('.room3').hide();
      $('.room4').hide();

    });
    $('.next_1').click(function () {
      $('.room1').hide();
      $('.room2').fadeIn();
      $('.room3').hide();
      $('.room4').hide();

    });
    $('.next_1').click(function () {
      $('.room1').hide();
      $('.room2').hide();
      $('.room3').fadeIn();
      $('.room4').hide();

    });
    $('.next_1').click(function () {
      $('.room1').hide();
      $('.room2').hide();
      $('.room3').hide();
      $('.room4').fadeIn();

    });

  });


  //index.js

  let slider = document.querySelector("#slider_box")
  let innerSlider = document.querySelector("#offer_box")
  let pressed = false
  let startx
  let x

  slider.addEventListener("mousedown", e => {
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft
    slider.style.cursor = "grabbing"
  })

  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab"
  })

  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab"
  })



  window.addEventListener("mouseup", () => {
    pressed = false
  })

  slider.addEventListener("mousemove", e => {
    if (!pressed) return
    e.preventDefault()
    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`
    checkboundary()
  })

  function checkboundary() {
    let outer = slider.getBoundingClientRect()
    let inner = innerSlider.getBoundingClientRect()

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px"
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`
    }
  }



  // review 무한반복
  $('.next_3').click(function () {
    $('.review_1 .review_img:last').prependTo('.review_1');
    $('.review_1').css('margin-left', -400);
    $('.review_1').stop().animate({ marginLeft: 0 }, 800);
  });

  $('.next_4').click(function () {
    $('.review_1').stop().animate({ marginLeft: -400 }, 800, function () {
      $('.review_1 .review_img:first').appendTo('.review_1');
      $('.review_1').css({ marginLeft: 0 });
    })
  });