$(document).ready(function() {
  console.log('Sanity check');

  $('form').on('submit', function(event) {
    event.preventDefault();
    var initialTotal = parseFloat($('#number').val());
    var grandTotal = initialTotal + (initialTotal * (0.2));
    $('.result').append('Your total after tip is: $' + grandTotal);
  });
});
