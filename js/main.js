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




// 사이드메뉴 나타나게
$(function () {
  $('.menu-trigger').click(function () {
    if ($('#menu_trigger').css('width') == '0px') {
      $('#menu_trigger').css('display', 'block');
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

      $('.logo_text>p').css('color', '#fff');
      $('.menu-trigger span').css('background-color', '#fff');
      $('.country_toggle span').css('color', '#fff');
      $('.dropdown_label').css('color', '#fff');
      $('#book_tap a').css('color', '#fff');
      $('#book_tap').css('border', '1px solid #fff');
      $('.dropdown_menu').css('box-shadow', 'none ');
      $('.cstoggle+ul').css('box-shadow', 'none');
      $('#about_us').css('transform', 'translateY(100px)').css('opacity', '0');
      $('#accom').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#special').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#offers').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#community').css('transform', 'translateY(100px)').css('opacity', '0');

      $('#reservation').css('transform', 'translateY(100px)').css('opacity', '0');

      $('.side_footer').css('opacity', '0');

      $('#menu_trigger').css({ 'width': '0px' }, 1500);
      // $('#menu_trigger ').css({'display':'none'})
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

$(function () {
  $('#popup').css('opacity', '1');
});

$('#close1').click(function () {
  $('.pop1').css('opacity', '0');
});
$('#close2').click(function () {
  $('.pop2').css('opacity', '0');
});
// hotel room
$('.room_').not(':first').css('display', 'none');

$('.next_1').click(function () {
  $('.room_img:first').insertAfter('.room_img:last');
  $('.room_img_box').css('margin-left', -50.5);
  $('.room_img_box').stop().animate({ marginLeft: 0 }, 1000);

  $('.room_:first').insertAfter('.room_:last');
  $('.room_:first').css('display', 'block');
  $('.room_').not(':first').css('display', 'none');
  $('.room_').css('margin-left', 50);
  $('.room_').stop().animate({ marginLeft: 0 }, 1000);

  // $('.room_:first').insertAfter('.room_:last');


});

$('.next_2').click(function () {
  $('.room_img:last').insertBefore('.room_img:first');
  $('.room_img_box').css('margin-left', 50.5);
  $('.room_img_box').stop().animate({ marginLeft: 0 }, 1000);

  $('.room_:last').insertBefore('.room_:first');
  $('.room_:first').css('display', 'block');
  $('.room_').not(':first').css('display', 'none');
  $('.room_').css('margin-left', 50.5);
  $('.room_').stop().animate({ marginLeft: 0 }, 1000);
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

// 반응형 자바
let mal = window.matchMedia('screen and (max-width:1230px)');
if (mal.matches) {
  $('#about_line>p').text("Pool Villa Room");
  $('#inpnity>p').text('Infinity&Rooftop Pool');
  $('#BBQ>p').text('Breakfast&BBQ');
}
let mal__=window.matchMedia('(min-width:320px) adn (max-width:774px)');
if(mal__.matches){
  $('.room-text2>h2').text('Hotel Room');
}



window.addEventListener('scroll', function () {

let mal_1 = window.matchMedia('(min-width:320px) and (max-widht:774px)')
let mal_2 = window.matchMedia('(min-width:775px) and (max-width:1000px)').matches;
let mal_3 = window.matchMedia('(min-width:1001px) and (max-width:1206px)').matches;
let mal_4 = window.matchMedia('(min-width:1207px) and (max-width:1600px)').matches;
let mal_5 = window.matchMedia('(min-width:1601px)').matches;

  let value1 = window.scrollY
  console.log('scrollY', value1)
  console.log(mal_5)
  $('#inpnity p').text('Inpinity Pool');
  $('#BBQ p').text('Breakfast & BBQ');
  if(mal_5){
    if (value1 > 200) {
        $('#about_line p').css('animation', 'pool 1s').css('opacity', '1');
        $('#about_text .but').css('animation', 'pool_p 1.5s').css('opacity', '1');
      } if (value1 > 1250) {
        $('.room-text2>h2').css('animation', 'hotel 1s').css('opacity', '1');
        $('.room-text2>p').css('animation', 'hotel_p 1.5s').css('opacity', '1');
    
      }if(value1 > 2100) {
        $('#room_kind .see a').css('animation', 'see 1s').css('opacity', '1');
    
      } if (value1 > 2900) {
        $('.tion_box h2').css('animation', 'fac 1.5s').css('opacity', '1');
        $('.tion_box p').css('animation', 'fac_p 1.5s').css('opacity', '1');
      } if (value1 > 3500) {
        $('#inpnity p').text('Inpinity Pool').css('animation', 'infi 1s').css('opacity', '1');
        $('#BBQ p').text('Breakfast & BBQ').css('animation', 'infi 1s').css('opacity', '1');
      } if (value1 > 3700) {
        $('.read1').css('animation', 'infi 1s').css('opacity', '1');
        $('.read2').css('animation', 'infi 1s').css('opacity', '1');
    
    
      } if (value1 > 4000) {
        $('#review h2').css('animation', 'rew 1s').css('opacity', '1');
    
      } if (value1 > 4800) {
        $('.review_>p').css('animation', 'rew_p 1s').css('opacity', '1');
        $('.see_2').css('animation', 'event2 1.5s').css('opacity', '1');
      } if (value1 > 5203) {
        $('#Event_s h2').css('animation', 'infi1 1.5s').css('opacity', '1');
        $('.see_').css('animation', 'event1 1s').css('opacity', '1');
        
      } if (value1 > 6200) {
        $('.newsletter_text p').css('animation', 'infi2 1s').css('opacity', '1');
      }  if (value1 > 6250 ) {
        $('.newsletter_text span').css('animation', 'news2_ 1s').css('opacity', '1');
      }if (value1 > 6300) {
        $('.form_a').css('animation', 'event 1s').css('opacity', '1');
      } if (value1 > 8000) {
        $('#neighbourhood p').css('animation', 'fac_p 1s').css('opacity', '1');
      } if (value1 >8050) {
        $('#neighbourhood span').css('animation', 'rew_ 1s').css('opacity', '1');
      } 
      if (value1 >8055) {
        $('#neighbourhood a').css('animation', 'rew1 1s').css('opacity', '1');
      }if (value1 > 8550 ) {
        $('#map p').css('animation', 'map 1s').css('opacity', '1');
      } if (value1 > 9000) {
        $('#about_hotel').css('transform', 'scale(1.5)').css('transition', '.5s');
       }
    }else if(mal_4){
      if (value1 > 200) {
    $('#about_line p').css('animation', 'pool 1s').css('opacity', '1');
    $('#about_text .but').css('animation', 'pool_p 1.5s').css('opacity', '1');
  } if (value1 > 1250) {
    $('.room-text2>h2').css('animation', 'hotel 1s').css('opacity', '1');
    $('.room-text2>p').css('animation', 'hotel_p 1.5s').css('opacity', '1');

  }if(value1 > 2100) {
    $('#room_kind .see a').css('animation', 'see 1s').css('opacity', '1');

  } if (value1 > 2900) {
    $('.tion_box h2').css('animation', 'fac 1.5s').css('opacity', '1');
    $('.tion_box p').css('animation', 'fac_p 1.5s').css('opacity', '1');
  } if (value1 > 3500) {
    $('#inpnity p').text('Inpinity Pool').css('animation', 'infi 1s').css('opacity', '1');
    $('#BBQ p').text('Breakfast & BBQ').css('animation', 'infi 1s').css('opacity', '1');
  } if (value1 > 3700) {
    $('.read1').css('animation', 'infi 1s').css('opacity', '1');
    $('.read2').css('animation', 'infi 1s').css('opacity', '1');


  } if (value1 > 4000) {
    $('#review h1').css('animation', 'rew 1s').css('opacity', '1');

  } if (value1 > 4800) {
    $('.review_>p').css('animation', 'rew_p 1s').css('opacity', '1');
    $('.see_2').css('animation', 'event2 1.5s').css('opacity', '1');
  } if (value1 > 5203) {
    $('#Event_s h1').css('animation', 'infi1 1.5s').css('opacity', '1');
    $('.see_').css('animation', 'event1 1s').css('opacity', '1');
    
  } if (value1 > 6200) {
    $('.newsletter_text p').css('animation', 'infi2 1s').css('opacity', '1');
  }  if (value1 > 6250) {
    $('.newsletter_text span').css('animation', 'news2 1s').css('opacity', '1');
  }if (value1 > 6300) {
    $('.form_a').css('animation', 'event 1s').css('opacity', '1');
  } if (value1 > 7544) {
    $('#neighbourhood p').css('animation', 'fac_p 1s').css('opacity', '1');
  } if (value1 >7570) {
    $('#neighbourhood span').css('animation', 'rew_ 1s').css('opacity', '1');
  } 
  if (value1 >7570) {
    $('#neighbourhood a').css('animation', 'rew1 1s').css('opacity', '1');
  }if (value1 > 8059) {
    $('#map p').css('animation', 'map 1s').css('opacity', '1');
  } if (value1 > 8500) {
    $('#about_hotel').css('transform', 'scale(1.5)').css('transition', '.5s');
    
    }
  }else if(mal_3){
      if (value1 > 200) {
        $('#about_line p').css('animation', 'pool 1s').css('opacity', '1');
        $('#about_text .but').css('animation', 'pool_p 1.5s').css('opacity', '1');
      } if (value1 > 1250) {
        $('.room-text2>h1').css('animation', 'hotel 1s').css('opacity', '1');
        $('.room-text2>p').css('animation', 'hotel_p 1.5s').css('opacity', '1');
    
      }
      if(value1 > 2100) {
        $('#room_kind .see a').css('animation', 'see 1s').css('opacity', '1');
    
      } if (value1 > 2900) {
        $('.tion_box h1').css('animation', 'fac 1.5s').css('opacity', '1');
        $('.tion_box p').css('animation', 'fac_p 1.5s').css('opacity', '1');
      } if (value1 > 3500) {
        $('#inpnity p').text('Inpinity Pool').css('animation', 'infi 1s').css('opacity', '1');
        $('#BBQ p').text('Breakfast & BBQ').css('animation', 'infi 1s').css('opacity', '1');
      } if(value1 > 3700 ) {
        $('.read1').css('animation', 'infi 1s').css('opacity', '1');
        $('.read2').css('animation', 'infi 1s').css('opacity', '1');
    
    
      } if (value1 > 4000) {
        $('#review h1').css('animation', 'rew 1s').css('opacity', '1');
    
      } if(value1 > 4800 ) {
        $('.review_>p').css('animation', 'rew_p_ 1s').css('opacity', '1');
        $('.see_2').css('animation', 'event2 1.5s').css('opacity', '1');
      } if (value1 > 5200) {
        $('#Event_s h1').css('animation', 'infi1 1.5s').css('opacity', '1');
        $('.see_').css('animation', 'event1 1s').css('opacity', '1');
        
      } if(value1 > 6300 ) {
        $('.newsletter_text p').css('animation', 'infi2 1s').css('opacity', '1');
      }  if (value1 > 6330) {
        $('.newsletter_text span').css('animation', 'news2_ 1s').css('opacity', '1');
      }if (value1 > 6600) {
        $('.form_a').css('animation', 'event 1s').css('opacity', '1');
      } if (value1 > 7544) {
        $('#neighbourhood p').css('animation', 'fac_p 1s').css('opacity', '1');
      } 
      if (value1 >7570) {
        $('#neighbourhood span').css('animation', 'rew_ 1s').css('opacity', '1');
      } 
      
      if (value1 >7570) {
        $('#neighbourhood a').css('animation', 'rew1 1s').css('opacity', '1');
      }if (value1 > 8059) {
        $('#map p').css('animation', 'map 1s').css('opacity', '1');
      } if(value1 > 8500 ) {
        $('#about_hotel').css('transform', 'scale(1.5)').css('transition', '.5s');

    }

    }else if(mal_2){
      if (value1 > 100) {
        $('#about_line p').css('animation', 'pool 1s').css('opacity', '1');
        $('#about_text .but').css('animation', 'pool_p 1.5s').css('opacity', '1');
      } if (value1 > 800) {
        $('.room-text2>h1').css('animation', 'hotel 1s').css('opacity', '1');
        $('.room-text2>p').css('animation', 'hotel_p 1.5s').css('opacity', '1');
    
      }if(value1 >1450) {
        $('#room_kind .see a').css('animation', 'see 1s').css('opacity', '1');
    
      } if (value1 > 2100) {
        $('.tion_box h1').css('animation', 'fac 1.5s').css('opacity', '1');
        $('.tion_box p').css('animation', 'fac_p 1.5s').css('opacity', '1');
      } if (value1 > 2600 ) {
        $('#inpnity p').text('Inpinity Pool').css('animation', 'infi 1s').css('opacity', '1');
        $('#BBQ p').text('Breakfast & BBQ').css('animation', 'infi 1s').css('opacity', '1');
      } if (value1 > 2700 ) {
        $('.read1').css('animation', 'infi 1s').css('opacity', '1');
        $('.read2').css('animation', 'infi 1s').css('opacity', '1');
    
    
      } if (value1 > 2995 ) {
        $('#review h1').css('animation', 'infi2 1s').css('opacity', '1');
    
      } if (value1 > 3695) {
        $('.review_>p').css('animation', 'rew_p_ 1s').css('opacity', '1');
        $('.see_2').css('animation', 'event2_ 1.5s').css('opacity', '1');
      } if (value1 > 4000 ) {
        $('#Event_s h1').css('animation', 'infi2 1.5s').css('opacity', '1');
        $('.see_').css('animation', 'event1 1s').css('opacity', '1');
        
      } if (value1 > 4893 ) {
        $('.newsletter_text p').css('animation', 'infi2 1s').css('opacity', '1');
      }  if (value1 > 4993) {
        $('.newsletter_text span').css('animation', 'news2_ 1s').css('opacity', '1');
      }if (value1 > 5293) {
        $('.form_a').css('animation', 'event 1s').css('opacity', '1');
      } if (value1 > 5992) {
        $('#neighbourhood p').css('animation', 'fac_p 1s').css('opacity', '1');
      } if (value1 >6100){
        $('#neighbourhood span').css('animation', 'rew_ 1s').css('opacity', '1');
      } 
      if (value1 >6300){
        $('#neighbourhood a').css('animation', 'rew1 1s').css('opacity', '1');
      }if (value1 > 6501) {
        $('#map p').css('animation', 'map 1s').css('opacity', '1');
      } if (value1 > 6887) {
        $('#about_hotel').css('transform', 'scale(1.5)').css('transition', '.5s');
        
      }


    }else if(mal_1){
      if (value1 > 100) {
        $('#about_line p').css('animation', 'pool 1s').css('opacity', '1');
        $('#about_text .but').css('animation', 'pool_p_ 1.5s').css('opacity', '1');
      } if (value1 > 900) {
        $('.room-text2>h1').css('animation', 'pool_p_ 1s').css('opacity', '1');
        $('.room-text2>p').css('animation', 'pool_p_ 1.5s').css('opacity', '1');
    
      }if(value1 >1700) {
        $('#room_kind .see a').css('animation', 'see_ 1s').css('opacity', '1');
    
      } if (value1 > 2200) {
        $('.tion_box h1').css('animation', 'fac 1.5s').css('opacity', '1');
        $('.tion_box p').css('animation', 'fac_p_1 1.5s').css('opacity', '1');
      } if (value1 > 2600) {
        $('#inpnity p').text('Inpinity Pool').css('animation', 'infi1 1s').css('opacity', '1');
        $('.read1').css('animation', 'infi 1s').css('opacity', '1');
    
      } if (value1 > 2900 ) {
        $('#BBQ p').text('Breakfast & BBQ').css('animation', 'infi 1s').css('opacity', '1');
        $('.read2').css('animation', 'infi 1s').css('opacity', '1');
    
    
      } if (value1 > 3300) {
        $('#review h1').css('animation', 'infi2 1s').css('opacity', '1');
    
      } if (value1 > 3900) {
        $('.review_>p').css('animation', 'rew_p_ 1s').css('opacity', '1');
        $('.see_2').css('animation', 'event2_ 1.5s').css('opacity', '1');
      } if (value1 > 4184) {
        $('#Event_s h1').css('animation', 'infi2_ 1.5s').css('opacity', '1');
       } if (value1 > 4684 ) {
        $('.see_').css('animation', 'event1 1s').css('opacity', '1');
        
      } if (value1 > 4782 ) {
        $('.newsletter_text p').css('animation', 'infi2 1s').css('opacity', '1');
      }  if (value1 > 4980) {
        $('.newsletter_text span').css('animation', 'news2__ 1s').css('opacity', '1');
      }if (value1 > 5282 ) {
        $('.form_a').css('animation', 'event 1s').css('opacity', '1');
      } if (value1 > 5582) {
        $('#neighbourhood p').css('animation', 'fac_p_ 1s').css('opacity', '1');
      } if (value1 >5650){
        $('#neighbourhood span').css('animation', 'rew__ 1s').css('opacity', '1');
      } 
      if (value1 >5660){
        $('#neighbourhood a').css('animation', 'rew11 1s').css('opacity', '1');
      }if (value1 > 5900) {
        $('#map p').css('animation', 'map 1s').css('opacity', '1');
      } if (value1 > 6150) {
        $('#about_hotel').css('transform', 'scale(1.3)').css('transition', '.5s');
        
      }
    
    }

  
    
  
  
  

});


