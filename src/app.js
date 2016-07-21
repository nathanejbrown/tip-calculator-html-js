$(document).ready(function() {
  console.log('Sanity check');

  $('form').on('submit', function(event) {
    event.preventDefault();
    var initialTotal = parseFloat($('#number').val());
    var tipAmount = initialTotal * $('#pickPercent').val();
    var grandTotal = initialTotal + tipAmount;
    $('.result').append('Your total after tip is: $' + grandTotal);
  });
});
