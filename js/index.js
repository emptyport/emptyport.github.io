$(document).ready(function() {
  numItems = $('.circle-container a').length;
  start = 0.0;
  step = (2*Math.PI)/numItems;

  $('.circle-container a').each(function(index) {
    radius = ($('.circle-container').width() - $(this).width())/2;

  tmpTop = (($('.circle-container').height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
          tmpLeft = (($('.circle-container').width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
          start += step; //add the "step" number of radians to jump to the next icon
                 
          //set the top/left settings for the image
          $(this).css('top',tmpTop);
          $(this).css('left',tmpLeft);

  });
});