(function() {

  $(document).ready(function() {
    var csrfSafeMethod, csrftoken;
    csrfSafeMethod = function(method) {
      return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
    };
    wf_log_wrapper("setting up ajax");
    $.ajaxsetup({
      crossDomain: false,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type)) {
          return xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      }
    });
    csrftoken = $.cookie('csrftoken');
    return false;
  });

  wf_log_wrapper(function(text) {
    return console.log(text);
  });

}).call(this);
