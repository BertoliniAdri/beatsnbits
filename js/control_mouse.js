var timer_undo;
var timer_clear;


function changeStylePause () {

  play_pause.style.backgroundColor = "white";
  // changement du mode et du style mode live
  document.getElementById('affiche_mode').innerHTML = "Live";
  affiche_mode.style.color = "black";
  affiche_mode.style.backgroundColor = "white";

  // changement du logo en pause
  document.getElementById('play_pause').innerHTML = "<img src='img/pause.svg' alt='Play / Pause' title='Play / Pause'/>";

}

function changeStyleReprise() {

  play_pause.style.backgroundColor = "";
  // changement du mode et du style mode loop
  document.getElementById('affiche_mode').innerHTML = "Loop";
  affiche_mode.style.color = "white";
  affiche_mode.style.backgroundColor = "#FF4F4F";

  // changement du logo en play
  document.getElementById('play_pause').innerHTML = "<img src='img/play-arrow.svg' alt='Play / Pause' title='Play / Pause'/>";

}

 function sourisPause_fx() {

  window.clearInterval(timerId);
  timerStarted = false;
  pause = !pause;
  changeStylePause();

  }

function sourisReprise_fx() {


  if (pause === false) {

    startTimer();
    changeStyleReprise();

  }

}


function sourisUndo_fx() {

  let len = key_time.length;
  if (len > 0) {
      key_time[len - 1][2].destroy();
      key_time.pop();//RADO
      
      undo.style.transition = "0s";
      undo.style.backgroundColor = "white";
      
      timer_undo = window.setTimeout(function() {
          
      undo.style.transition = "0.2s";
      undo.style.backgroundColor = "";
      }, 10);
     

  }

}

function sourisClear_fx() {

  let len = key_time.length;
  if (len > 0) {
      for (let i = 0; i < len; i++) {
          key_time[i][2].destroy();
      }
      key_time = [];//RADO
      
      clear.style.transition = "0s";
      clear.style.backgroundColor = "white";
      
      timer_clear = window.setTimeout(function() {
          
      clear.style.transition = "0.2s";
      clear.style.backgroundColor = "";
      }, 10);
  }

}

function sourisSync_fx() {
  console.log("SYNC");
  stick_to_mesure = !stick_to_mesure;
//        console.log(stick_to_beat);

  // Changement de style sur le SYNC actif/non actif
  if (stick_to_mesure === true) {
      console.log("activé");
      // style de SYNC lorsque stick to beat activé
      sync.style.backgroundColor = "#FF4F4F"; //RADO
  } else {
      console.log("desactive");
      sync.style.backgroundColor = "";//RADO
  }

}

function sourisClick_fx() {
  console.log("CLICK");
  metronome_active = !metronome_active;
  dot_active = !dot_active;
  console.log("DOT ACTIVE = " + dot_active);
  //console.log("etat metronome = "+ metronome_active);

// -------------------------------------------------------RADO
  if (metronome_active === true) {
      // changement de style lorsque le metronome est activé
      click_state.style.backgroundColor = "white";
      click_state.style.color = "black";
      document.getElementById('click_state').innerHTML = "ON";
      
      
      
  } else {
      // changement de style lorsque le metronome est desactivé
      click_state.style.backgroundColor = "";
      click_state.style.color = "white";
      document.getElementById('click_state').innerHTML = "OFF";
            
  }

}


