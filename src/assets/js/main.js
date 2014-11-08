/* Main Scripts */

$(function() {

  var temp = parseInt($('.temperature .number').text());
  console.log(temp);

  $('.toggle .on').click(function() {
    $(this).parents('.toggle').children('.checkbox').prop('checked', true);
  });

  $('.toggle .off').click(function() {
    $(this).parents('.toggle').children('.checkbox').prop('checked', false);
  });

  var checkTemp = function(current) {
    if (temp != current) {
      $('.current-temperature').fadeIn();
    }
    else {
      $('.current-temperature').fadeOut();
    }
  };

  $('.chevron-up').click(function() {
    temp++;

    $('.temperature .number').text(temp);
    checkTemp(68);

    return false;
  });

  $('.chevron-down').click(function() {
    temp--;

    $('.temperature .number').text(temp);
    checkTemp(68);
    
    return false;
  });
});