// Variable pour captcha
var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);
var c = a + b;
// Fonction qui intègre le captcha
function DrawBotBoot(){
  document.write("<div class='profil_input'><input type='text' id='BotBootInput' placeholder='combien font "+ a + " + " + b +" ?'>");
  document.write("test de QI pour robot</div>");
}
