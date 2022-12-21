
// hotel room

$('.next_1').click(function(){
  $('.room_img_box .room_img:first').prependTo('.room_img_box');
  $('.room_img_box').css('margin-left',-951.5);
  $('.room_img_box').stop().animate({marginLeft:0},2000);
});

$('.next_2').click(function(){
  $('.room_img_box').stop().animate({marginLeft:-951.5},2000, function(){
    $('.room_img_box .room_img:last').appendTo('.room_img_box');
    $('.room_img_box').css({marginLeft:0});
  })
});


$(function(){
  $('.next_1').click(function(){
    $('.room_').fadein();
    $('.room1').hide();
    $('.room2').hide();
    $('.room3').hide();
    $('.room4').hide();
  });
});

$(function(){
  $('.next_1').click(function(){
    $('.room_text').hide();
    $('.room1').fadein();
    $('.room2').hide();
    $('.room3').hide();
    $('.room4').hide();
  });
});
$(function(){
  $('.next_1').click(function(){
    $('.room_text').hide();
    $('.room1').hide();
    $('.room2').fadein();
    $('.room3').hide();
    $('.room4').hide();
  });
});
$(function(){
  $('.next_1').click(function(){
    $('.room_text').hide();
    $('.room1').hide();
    $('.room2').hide();
    $('.room3').fadein();
    $('.room4').hide();
  });
});
$(function(){
  $('.next_1').click(function(){
    $('.room_text').hide();
    $('.room1').hide();
    $('.room2').hide();
    $('.room3').hide();
    $('.room4').fadein();
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
$('.next_3').click(function(){
  $('.review_1 .review_img:last').prependTo('.review_1');
  $('.review_1').css('margin-left',-400);
  $('.review_1').stop().animate({marginLeft:0},800);
});

$('.next_4').click(function(){
  $('.review_1').stop().animate({marginLeft:-400},800, function(){
    $('.review_1 .review_img:first').appendTo('.review_1');
    $('.review_1').css({marginLeft:0});
  })
});