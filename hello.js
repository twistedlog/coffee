(function() {
  var coffee;

  coffee = function(message) {
    var answer;
    if (message == null) message = "Ready for some coffee";
    answer = confirm(message);
    return "Your answer is " + answer;
  };

}).call(this);
