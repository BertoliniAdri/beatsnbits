window.addEventListener("load", function(){
  // alert(document.getElementById("message_display_text:"+message_display_text));
  var message_display_div = document.getElementById('message_display_div');
  var message_display_text = document.getElementById('message_display_text');

});

function message_display(color, message){
  message_display_div.style.borderColor = color;
  message_display_div.style.color = color;
  message_display_text.innerHTML = message;
  $(message_display_div).fadeIn(10);
  $(message_display_div).fadeOut(5000);
}

