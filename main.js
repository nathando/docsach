$(document).ready(function() {
  new WOW().init();
  // intro
  $('#main-author').hide();
  var mainIntroOptions = {
    strings: [
      "The only way it gets better for you is when you get better.</br>^2000 Better is not something you wish, it's something you become.",
      "Second line"
    ],
    fadeOut: true,
    shuffle: true,
    typeSpeed: 60,
    startDelay: 3,
    preStringTyped: function(arrPos, self) {
      if (arrPos>0)
        $('#main-author').fadeOut();
    },
    onStringTyped: function(arrPos, self) {
      $('#main-author').html('Jim Rohn').fadeIn();
    }
  }
  if ($('#main-intro').length) {
    new Typed("#main-intro", mainIntroOptions);
  }
  // toggle
  $('.toggler').click(function(e){
    var el = e.currentTarget,
        selector = $(el).attr('data-toggle');
    $(selector).toggleClass('hide');
    $(el).toggleClass('clicked');
  })

});
