var primeFind = function (num){
  var primesArray = [];
  for(var i = 2; i <= num; i++) {
    if (primeCheck(i, primesArray)) {
      primesArray.push(i);
    }
  }
  return primesArray;
};

var primeCheck = function(number, array) {
  for(var i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      return false;
    }
  }
  return true;
};

$(document).ready(function() {
  $("form#number").submit(function(event) {
    $('#result').hide();
    var number = parseInt($("#input").val());
    var result = primeFind(number).join(', ');
    $('.array').text(result);
    $('#result').show();
    event.preventDefault();
  });
});
