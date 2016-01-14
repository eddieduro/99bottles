$(document).ready(function() {
  var counter = 100;
  var counterless = 0;
  for (var index = 99; index >= 0; index += -1) {
    counter = (counter - 1);
    counterless = (counter - 1);
    $(".test").append('<p>' + counter + ' bottles of beer on the wall, ' + counter + ' bottles of beer.' + "<br>" + 'Take one down and pass it around,' + counterless + ' bottles of beer on the wall.' + '</p>');

  }

});


// <span class="current-number"></span> bottles of beer on the wall, <span class="current-number"></span>  bottles of beer.
// Take one down and pass it around, <span class="less-number"></span>  bottles of beer on the wall.
// </p>
