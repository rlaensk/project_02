


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


// review

$(function(){
  let page=0;
  $('.next_3').click(function(){
    page--;
    if(page<0){
      page=0;
      return;
    }
    $('.review_1').stop().animate({marginLeft:-400*page},800);
  });

  $('.next_4').click(function(){
    page++;
    if(page>$('.review_img').length-4){
      page=$('.review_img').length-4;
      return;
    }
    $('.review_1').stop().animate({marginLeft: -400*page},800);

  });

});

// review 무한반복
$('.next_3').click(function(){
  $('.review_1 .review_img:last').prependTo('.review_1');
  $('.review_1').css('margin-left','-400');
  $('.review_1').stop().anmate({marginLeft:0},800);
});

$('.next_4').click(function(){
  $('.review_1').stop().animate({marginLeft:-400},800, function(){
    $('.review_1 .review_img:first').appendTo('.review_1');
    $('.review_1').css({marginLeft:0});
  })
});