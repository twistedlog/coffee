$(document).ready ->
  csrfSafeMethod =  (method)->
    /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)

  wf_log_wrapper("setting up ajax")
  
  $.ajaxsetup(
    crossDomain: false,
    beforeSend: (xhr, settings)->
      xhr.setRequestHeader("X-CSRFToken", csrftoken) if !csrfSafeMethod(settings.type)  
  )
  csrftoken = $.cookie('csrftoken')
  
     
  false

wf_log_wrapper (text)->
  console.log(text);
