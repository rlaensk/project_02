$('.country_toggle').click(function(){
    $(this).next($('.dropdown_menu')).slideToggle('fast');
  })
  $('.country_toggle').click(function(e){
    e.stopPropagation();
    $(this).next($('dropdown_menu')).slideToggle('fast');
  })