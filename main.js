$(document).ready(function() {
  new WOW().init();
  // intro
  var mainIntroOptions = {
    strings: ["The only way it gets better for you is when you get better.</br>^500 Better is not something you wish, it's something you become."],
    typeSpeed: 30
  }
  if ($('#main-intro').length)
    var typed = new Typed("#main-intro", mainIntroOptions);
  // toggle
  $('.toggler').click(function(e){
    var el = e.currentTarget,
        selector = $(el).attr('data-toggle');
    $(selector).toggleClass('hide');
    $(el).toggleClass('clicked');
  })

});
