$(document).ready(function() {
  new WOW().init();
  // intro
  $('#main-author').hide();
  $.getJSON("quotes.json", function(data){
    var quotes = $.map(data, function(val) {return val.quote;})
    var mainIntroOptions = {
      strings: quotes,
      fadeOut: true,
      shuffle: true,
      typeSpeed: 60,
      backDelay: 10000,
      loop: true,
      preStringTyped: function(arrPos, self) {
        $('#main-author').hide();
      },
      onStringTyped: function(arrPos, self) {
        var idx = self.sequence[arrPos]
        $('#main-author').html(data[idx].author).fadeIn();
      }
    }
    if ($('#main-intro').length) {
      new Typed("#main-intro", mainIntroOptions);
    }
  });
  // toggle
  $('.toggler').click(function(e){
    var el = e.currentTarget,
        selector = $(el).attr('data-toggle');
    $(selector).toggleClass('hide');
    $(el).toggleClass('clicked');
  })

});
