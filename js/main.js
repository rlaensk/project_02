// 햄버거메뉴 누르면 X
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});


$(function () {
  $('.menu-trigger').click(function () {
    $('#slider').animate({ left: '100%' }, 3000);
    $('.menu-trigger span').css({backgroundColor:'rgb(50,50,50)'});
    $('.dropdown_label').css({color:'rgb(50,50,50)'});
    $('.arrow::after').css({borderTop:'1px solid rgb(50,50,50)', borderRight:'1px solid rgb(50,50,50)'});
    $('#logo p').css({color:'rgb(50,50,50)'});
    $('#book_tap').css({border:'1px solid rgb(50,50,50)'});
    $('#book_tap a').css({color:'rgb(50,50,50)'});
    $('#slider').animate({ left: '0' }, 3000);
  });


});

// 사이드메뉴 밑에서올라오게
$(function(){
  let ws=$('.menu-trigger').click();
  if(ws>-700){
    $('.about_us').css('transform','translateY(0px').css('opacity','1');
  }
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