//sequenceur.js

//Presser sur des touches du clavier ou cliquer pour composer des boucles.

//A FAIRE:

//en stick to beat -> jouer le son quand on presse la touche
//stocker un truc dans une variable skip_sound si le son n'existe pas déjà
//réparer bug affichage sync
//Adapter les pastiles avec taille écran (responsive)
//Incrémenter le bpm de 1 et adpater la durée (duration) en fonction

//optimiser la boule qui tourne autour du cercle

//placer curseur pour modifier le bpm


//Ajouts: trucs placés dans eventlistener mousedown, var disable_sound_keys, var active_saveslot;

var timerID = null;//pour le timer...
var key_time = []; //tab à 2 dim non indexé Pourcentage de la timeline/touche/pastille (obj) -> (LISTE ENREGISTREMENTS)

//liste des catégories de sons
var sound_categories = [
    "kicks",
    "claps",
    "cymbals",
    "snares",
    "fx"];

//référence des fichiers son et la référence à leur catégorie
var soundFiles = [

    [new Audio("library/sounds/kicks/kick_1.mp3"), sound_categories[0]],
    [new Audio("library/sounds/kicks/kick_2.mp3"), sound_categories[0]],
    [new Audio("library/sounds/kicks/kick_3.mp3"), sound_categories[0]],
    [new Audio("library/sounds/kicks/kick_4.mp3"), sound_categories[0]],
    [new Audio("library/sounds/kicks/kick_5.mp3"), sound_categories[0]],
    [new Audio("library/sounds/claps/clap_1.mp3"), sound_categories[1]],
    [new Audio("library/sounds/claps/clap_2.mp3"), sound_categories[1]],
    [new Audio("library/sounds/claps/clap_3.mp3"), sound_categories[1]],
    [new Audio("library/sounds/claps/clap_4.mp3"), sound_categories[1]],
    [new Audio("library/sounds/claps/clap_5.mp3"), sound_categories[1]],
    [new Audio("library/sounds/cymbals/cymbals_1.mp3"), sound_categories[2]],
    [new Audio("library/sounds/cymbals/cymbals_2.mp3"), sound_categories[2]],
    [new Audio("library/sounds/cymbals/cymbals_3.mp3"), sound_categories[2]],
    [new Audio("library/sounds/cymbals/cymbals_4.mp3"), sound_categories[2]],
    [new Audio("library/sounds/cymbals/cymbals_5.mp3"), sound_categories[2]],
    [new Audio("library/sounds/snares/snare_1.mp3"), sound_categories[3]],
    [new Audio("library/sounds/snares/snare_2.mp3"), sound_categories[3]],
    [new Audio("library/sounds/snares/snare_3.mp3"), sound_categories[3]],
    [new Audio("library/sounds/snares/snare_4.mp3"), sound_categories[3]],
    [new Audio("library/sounds/snares/snare_5.mp3"), sound_categories[3]],
    [new Audio("library/sounds/fx/fx_1.mp3"), sound_categories[4]],
    [new Audio("library/sounds/fx/fx_2.mp3"), sound_categories[4]],
    [new Audio("library/sounds/fx/fx_3.mp3"), sound_categories[4]],
    [new Audio("library/sounds/fx/fx_4.mp3"), sound_categories[4]],
    [new Audio("library/sounds/fx/fx_5.mp3"), sound_categories[4]]];// Liste des objets audios (référence des fichiers son)

//référence des fichiers son et la référence à leur catégorie
var soundFx = [
    new Audio("library/sounds/click.mp3"), //source sonore click metronome
    new Audio("library/sounds/beep2.mp3")];//source sonore debut de boucle


//associassion Touche/Son
// Object tab indéxée Touche/index Son
//Pour avoir taille: Object.keys(key_sounds).length

var key_sounds = {
    "W": 0,
    "X": 5,
    "C": 10,
    "V": 19,
    "B": 23};

var bpm_min_value = 40;
var bpm_max_value = 200;

var bpm = 80; //les beats par minute

//var duration = 300; // durée de la boucle
var duration = get_duration(); // durée de la boucle

var mesures = 8; //nombre de segments sur la timeline
var mesure_duration = duration / mesures;//durée d'un mesure
var mesure = 0; //mesure actuel

var beat_duration = duration / 4;//durée d'un beat
var beat = 1;//bit actuel sur la timeline

var stick_to_mesure = true; //le mode quantification est il actif ?
//timer
var timerStarted = false; //le timer est il actif ?
var time = 0; //position du curseur sur la timeline
var time_pause;//position du curseur au moment de la pause
var pause = false;//pour mettre en pause

var metronome_sound = soundFx[0]; //le son du metronome RADO
soundFx[1].volume = 0.1; // volume du beep debut de boucle RADO
var metronome_active = false;//false pour éteindre le métronome

var clicked_button;//pour les boutons...

var soundFiles_buttons = [];//Array de boutons de fichiers sons à sélectionner (obj)

var boutons_creation = [];//Array de boutons pour créer des boucles de sons (obj)

var loaded = 0;//pour verifier que tous les fichiers audio à utiliser son en cache

var browser_window_width;//largeur de la fenêtre du navigateur


var pointeur;//truc qui tourne autour du cercle

var active_AudioCategory;//pour menu Categories Ne pas toucher !!
var audioCategory_menu = [];//array du menu categories

var sound_markers = [];//liste de Sound_Markers

var rec = false; //pour vérifier si l'enregistrement est enclenché RADO

var disable_sound_keys = false;//si true les touches clavier ne font plus de sons

var active_saveslot;//saveslot sélectionné actuellement (pour sauvegarde)
var seq_not_empty = false;//true si la séquence n'est pas vide
// --------------------------------
var play_pause;
var undo;
var clear;
var sync;
var dot1;
var dot2;
var rec_loop;
var affiche_mode;
var click_state;


var dot_active = false;

// s'excecute après le chargement de la page comme le init
//INIT -------------------------------

window.addEventListener('load', function () {

    //on prend la largeur de l'écran
    browser_window_width = window.innerWidth;
    //on dessine les indicateurs de mesures autour du cercle
    draw_items(mesures);

    //on met l'audio en cache
    //--------------------
    preloadAudio(metronome_sound);

    for (var i in key_sounds) {
        preloadAudio(soundFiles[key_sounds[i]][0]);
    }
    //---------------------




//CREATION DE BOUTONS
    // creation des boutons de creation de sample
    for (i in key_sounds)
    {
        boutons_creation.push(new Button(i, "launchpad", key_sounds[i], true));
//        boutons_creation.push(new Button(i, "launchpad", true));
    }
    //On affiche les bpm
    display_bpm();

    //test: dessine cercle
//    draw_cercle(mesures);

//on crée le pointeur qui gravite autour du cercle
    pointeur = new Pointer('pointeur', 'cercle');
    //on dessine le pointeur dans le code html
    pointeur.draw(time);

    //on crée le menu des catégories de sons
    create_audioCategories_menu();


    // boutons controle

    // ----------------------------------------------------RADO
    play_pause = document.getElementById('play_pause');
    undo = document.getElementById('undo');
    clear = document.getElementById('clear');
    sync = document.getElementById('sync');
    dot1 = document.getElementById('metronome_1');
    dot2 = document.getElementById('metronome_2');
    //rec_loop = document.getElementById('rec');
    affiche_mode = document.getElementById('affiche_mode');
    click_state = document.getElementById('click_state');


    // affichage de l'avancé dans la timeline
    document.getElementById('time').innerHTML = beat + " / 4";
    // affichage du mode loop/live


    dot1.style.backgroundColor = "#FF4F4F";
    dot2.style.backgroundColor = "";

    stick_to_beat = true;
    rec = false;

    sync.style.backgroundColor = "#FF4F4F";
    //rec_loop.style.backgroundColor = "";

// ---------------------------------------------------------RADO

//ECOUTEURS SOURIS---------------------------------------------RADO
    play_pause.addEventListener('click', sourisPause_fx);
    play_pause.addEventListener('click', sourisReprise_fx);

    undo.addEventListener('click', sourisUndo_fx);
    clear.addEventListener('click', sourisClear_fx);

    sync.addEventListener('click', sourisSync_fx);
    click_state.addEventListener('click', sourisClick_fx);
//FIN ECOUTEURS SOURIS--------------------------------------------
});

//FIN de l'init -----------------

//On détecte le changement de taille de la fenêtre du navigateur
window.onresize = function (event) {
    browser_window_width = window.innerWidth;
    draw_items(mesures);
    //bouge le pointeur qui tourne autour du cercle
    if (pointeur)
    {
        pointeur.refresh_position();
        pointeur.move(time);
    }
    //on update la position des pastilles de sons
    for (let i = 0, len = key_time.length; i < len; i++)
    {
        key_time[i][2].move();
    }
};


// Une fois ce fichier chargé il vas appeller loadedAudio()
// le fichier sera gardé dans le navigateur dans le cache
function preloadAudio(audio)
{
//    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.oncanplaythrough = loadedAudio();
}

//Verifie si l'audio est en cache et lance la boucle
function loadedAudio() {
    loaded++;
    //console.log(Object.keys(key_sounds).length + 1 + ": " + loaded);
    //on regarde si tout est chargé:
    if (loaded >= Object.keys(key_sounds).length + 1) {
        //si tout est chargé:
        //on lance la boucle
        startTimer();
        console.log("loaded");
        loaded = 0;
    }
}

//démarrage du timer
function startTimer() {
    if (timerStarted === false) {
        timerId = window.setInterval("timer_sequencer()", 10);
    }
    timerStarted = true;

    timerId_anim = window.setInterval("random_color()", 100);
    console.log("startTimer_anim chargé");

}


//fonction qui anime les dots actifs----------RADO
function active_dot () {

        if (beat % 2 == 0) {

        dot1.style.backgroundColor = "#FF4F4F";
        dot2.style.backgroundColor = "";
    } else {

        dot1.style.backgroundColor = "";
        dot1.style.border = "1px #FF4F4F solid";
        dot2.style.backgroundColor = "#FF4F4F";

    }
}
//fin fonction--------------------------------

//fonction qui annule animation dots------------RADO
function desactive_dot () {

        dot1.style.border = "1px #FF4F4F solid";
        dot2.style.border = "1px #FF4F4F solid";

        dot1.style.backgroundColor = "";
        dot2.style.backgroundColor = "";
}



// renvoie un bouton à partir de la lettre (l'intitulé ou k pour key) et l'array ou il se trouve (table)
function get_button_from_letter(k, table)
{
    for (var i = 0; i < table.length; i++) {
        if (table[i].key === k) {
            return table[i];
        }
    }
}

// une fonction qui permet de changer l'apparence d'un bouton
function activate_bouton(button)
{
    button.bouton_on = true;
    button.time_bouton_on = 10;

    button.out.style.transition = "0s";
    button.out.style.backgroundColor = "white";
}


//------------------------------------------
// TIMER
//------------------------------------------

function timer_sequencer() {
    if (time < duration) {
        time++;
        //bouge le bidule qui tourne autour du cercle
        pointeur.move(time);

        //si on passe une mesure sur la timeline
        if (time > beat * beat_duration)
        {
            //si le metronome est actif on joue un son
            if (metronome_active)
            {
                playSoundFX(metronome_sound);
//                console.log("m " + time);
            }
            beat++;
        }
    } else {
        time = 0;
        beat = 1;
        if (metronome_active)
        {
            playSoundFX(metronome_sound);
//            console.log("m " + time);
        }
    }


// -------------------------------------------------------RADO
    // affichage de l'avancée dans la timeline RADO
    document.getElementById('time').innerHTML = beat + " / 4";

    // clignottement des dots metronome

    if (beat % 2 == 0) {

        dot1.style.backgroundColor = "#FF4F4F";
        dot2.style.backgroundColor = "";
    } else {

        dot1.style.backgroundColor = "";
        dot1.style.border = "1px #FF4F4F solid";
        dot2.style.backgroundColor = "#FF4F4F";

    }
// -------------------------------------------------------RADO

//on regarde si il y a un son enregistré à cet instant (on arrondie)
    for (var i = 0; i < key_time.length; i++) {
        if (Math.round(percentage_to_time(key_time[i][0])) === time) {
            //on joue le son
            playSound(key_sounds[key_time[i][1]]);

            if ([key_time[i][1]] == "W") {
                anim_svg_tri();
            } else if ([key_time[i][1]] == "X") {
                anim_svg_car();
            } else if ([key_time[i][1]] == "C") {
                anim_svg_los();
            } else if ([key_time[i][1]] == "V") {
                anim_svg_cer();
            } else if ([key_time[i][1]] == "B") {
                anim_svg_xcar();
            }
            //on change son apparence
            get_button_from_letter(key_time[i][1], boutons_creation).activate(100);
            key_time[i][2].activate();
        }
    }

//    RADO-------------------------------
     if (dot_active) {

         active_dot();
     } else if (dot_active === false) {
         desactive_dot();
     }
//     FIN RADO--------------------------

}
//FIN TIMER

//------------------------------------
// Ecouteur pour clavier (touche pressée)
//------------------------------------



// On ajoute un listener pour la detection des touches
window.addEventListener('keydown', function (e) {

    //si les touches ne sont pas désactivées
    if (!disable_sound_keys)
    {
// on detecte si la touche w est pressee
        if (e.keyCode === 87) {
//            get_time("W", time);
            //console.log(disable_sound_keys);
// -------------------------------------------------------RADO
            if (pause) {
                playSound(key_sounds["W"]);
            } else {
// -------------------------------------------------------RADO
                get_time("W", time);
            }
// appelle la fonction lisant le son à chaque pression de w
        }

        if (e.keyCode === 88) {
// -------------------------------------------------------RADO
            if (pause) {
                playSound(key_sounds["X"]);
            } else {
                get_time("X", time);
            }
// -------------------------------------------------------RADO
// appelle la fonction lisant le son à chaque pression de w
        }

        if (e.keyCode === 67) {
// -------------------------------------------------------RADO
            if (pause) {
                playSound(key_sounds["C"]);
            } else {
                get_time("C", time);
            }
// -------------------------------------------------------RADO
// appelle la fonction lisant le son à chaque pression de w
        }

        if (e.keyCode === 86) {
// -------------------------------------------------------RADO
            if (pause) {
                playSound(key_sounds["V"]);
            } else {
                get_time("V", time);
            }
// -------------------------------------------------------RADO
// appelle la fonction lisant le son à chaque pression de w
        }

        if (e.keyCode === 66) {
// -------------------------------------------------------RADO
            if (pause) {
                playSound(key_sounds["B"]);
            } else {
                get_time("B", time);
            }
        }

        // la barre espace active la pause
        if (e.keyCode === 32) {

            pause = !pause;//pause activée
            if (pause) {
// -------------------------------------------------------RADO
                window.clearInterval(timerId);
                timerStarted = false;//compteur en pause

                play_pause.style.backgroundColor = "white";
                // changement du mode et du style mode live
                document.getElementById('affiche_mode').innerHTML = "Live";
                affiche_mode.style.color = "black";
                affiche_mode.style.backgroundColor = "white";

                // changement du logo en pause
                document.getElementById('play_pause').innerHTML = "<img src='img/pause.svg' alt='Play / Pause' title='Play / Pause'/>";
                // ----------------------------------------------------------RADO
            } else
            {
                // -------------------------------------------------------RADO
                startTimer();

                play_pause.style.backgroundColor = "";
                // changement du mode et du style mode loop
                document.getElementById('affiche_mode').innerHTML = "Loop";
                affiche_mode.style.color = "white";
                affiche_mode.style.backgroundColor = "#FF4F4F";

                // changement du logo en play
                document.getElementById('play_pause').innerHTML = "<img src='img/play-arrow.svg' alt='Play / Pause' title='Play / Pause'/>";
            }
        }

        //Réduit le nombre de mesures par boucle
        if (e.keyCode === 49 && mesures > 4) {
            mesures /= 2;
            mesure_duration = duration / mesures;
            draw_items(mesures);
            mesure = Math.floor(time / mesure_duration) + 1;
            console.log(mesures);
            console.log("mesure actuelle: " + mesure);
            display_bpm();
        }
//augmente le nombre de mesures
//        if (e.keyCode === 50 && mesures / duration < 0.2) {
        if (e.keyCode === 50 && mesures < 65) {
            //on multiplie le nombre de mesures par 2
            mesures *= 2;
            //on recalcule la durée d'un mesure
            mesure_duration = duration / mesures;
            //on recalcule à quelle mesure on est actuellement
            mesure = Math.floor(time / mesure_duration) + 1;
            //on redessine les indicateurs
            draw_items(mesures);
            console.log(mesures);
            console.log("mesure actuel: " + mesure);
            display_bpm();
        }

//change la longueur de la séquence
//diminue la durée (augmente le bpm)
        if (e.keyCode === 51 && bpm < bpm_max_value) {
            bpm += 1;
            duration = get_duration();
            mesure_duration = duration / mesures;
            beat_duration = duration / 4;
            //console.log(duration);
            display_bpm();
//            console.log('duration:' + duration);
        }

//augmente la durée (diminue le bpm)
        if (e.keyCode === 52 && bpm > bpm_min_value) {
            bpm -= 1;
            duration = get_duration();
            mesure_duration = duration / mesures;
            beat_duration = duration / 4;
            console.log('duration:' + duration);
            display_bpm();
        }


//efface le dernier element placé en appuyant sur 0
        if (e.keyCode === 48) {//RADO
            let len = key_time.length;
            if (len > 0) {
                //on détruit les pastilles dans le code HTML
                key_time[len - 1][2].destroy();

                key_time.pop();
                undo.style.backgroundColor = "white";//RADO

                //pour éviter les sauvegarde de boucle vide
                if (len == 1 && seq_not_empty)
                {
                    seq_not_empty = false;
                    if (active_saveslot)
                    {
                        active_saveslot.disable_save();
                    }
                }
            }
        }

//efface tout en appuyant sur backspace;
        if (e.keyCode === 8) {//RADO
            clearAllSounds();
            clear.style.backgroundColor = "white";//RADO
        }

//active desactive le metronome avec la touche 7
        if (e.keyCode === 55) {
            metronome_active = !metronome_active;
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
//active desactive stick to mesure touche 8
        if (e.keyCode === 56) {
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

//active/desactive le mode enregistement EN MODE CONNECTE ATTENTION !
        if (e.keyCode === 82) {
            rec = !rec;
            console.log(rec);
            if (rec === true) {
                rec_loop.style.backgroundColor = "white";
                console.log("changement color ok on");
            } else {
                rec_loop.style.backgroundColor = "";
                console.log("changmement color off");
            }
        }
// -------------------------------------------------------RADO
    }
});

//------------------------------
//------------------------------

//------------------------------------
// Ecouteur pour clavier (touche relevée)
//------------------------------------


window.addEventListener('keyup', function (e) {
// -------------------------------------------------------RADO
    //efface le dernier element placé en appuyant sur 0
    if (e.keyCode === 48) {
        undo.style.backgroundColor = "";
    }
    //efface tout en appuyant sur backspace;
    if (e.keyCode === 8) {
        clear.style.backgroundColor = "";
    }
// -------------------------------------------------------RADO
});


//------------------------------
//------------------------------

//fonction qui efface tout
function clearAllSounds(){
    
            let len = key_time.length;
            if (len > 0) {
                for (let i = 0; i < len; i++) {
                    key_time[i][2].destroy();
                }
                key_time = [];//RADO
                //pour éviter les sauvegarde de boucle vide
                if (seq_not_empty)
                {
                    seq_not_empty = false;
                    if (active_saveslot)
                    {
                        active_saveslot.disable_save();
                    }
                }
            }
    }

// fonction qui joue du son pour touches
function playSound(soundID) {
    if (soundFiles[soundID][0].currentTime > 0)
    {
        soundFiles[soundID][0].pause();
        soundFiles[soundID][0].currentTime = 0;
//        console.log("paused");
    }
    soundFiles[soundID][0].play();
}

// fonction qui joue du son (pour metronome
function playSoundFX(sound) {
    if (sound.currentTime > 0)
    {
        sound.pause();
        sound.currentTime = 0;
//        console.log("paused");
    }
    sound.play();
}

//Fonction pour ajouter du son à la boucle
// on place la référence du son dans le tableau keytime
function get_time(key, t) {
    //si on colle au mesure
    if (stick_to_mesure === true) {

// c = le nombre de mesures situées avant la position enregistrée (t)
        var c = Math.floor(t / mesure_duration);

        //si t est plus proche de la mesure située avant que de celle située après
        //on place t sur la mesure précédente
        if (t % mesure_duration < mesure_duration / 2)
        {
            t = c * mesure_duration;
            playSound(key_sounds[key]);//!! placé ici pour éviter répétition de sons
            //sinon on place t à la mesure suivante
        } else
            t = (c * mesure_duration) + mesure_duration;
//            console.log("c: "+c+" t: "+t);
        //si t dépasse de la durée on le repositionne par rapport au début
        if (t > duration)
        {
            t = t - duration;
//            console.log("c: "+c+" t: "+t);
        }
    } else
    {
        playSound(key_sounds[key]);//!! placé ici pour éviter répétition
    }
    //on vérifie que ce son n'a pas déjà été placé à cet endroit
    for (var i = 0, len = key_time.length; i < len; i++)
    {
        if (percentage_to_time(key_time[i][0]) === t && key_time[i][1] === key)
        {
            return;
        }
    }
    //on enregistre le son et on crée la pastille
    key_time.push([time_to_percentage(t), key, create_sound_marker(key, t)]);
    //pour autoriser les sauvegardes:
    if (!seq_not_empty)
    {
        seq_not_empty = true;
        if (active_saveslot)
        {
            active_saveslot.ennable_save();
        }
    }
    //on change l'apparence du bouton
    get_button_from_letter(key, boutons_creation).activate(100);
//    console.log("+ " + t);
}

//        renvoie un pourcentage par rapport à la durée de la boucle
function time_to_percentage(t)
{
    return t / duration * 100;
}

//        renvoie un repère de temps par rapport au pourcentage
function percentage_to_time(p)
{
    return duration / 100 * p;
}

//calculateur de bpm (renvoie les bpm)
function get_bpm(b, t)
{
    let seconds = t / 100;
    bpm = 60 * (b / seconds);
    return Math.round(bpm);
}

//calculateur de durée (duration) renvoie la duré en fonction des bpm (avec 4 beats)
function get_duration()
{
    return Math.round(24000/bpm);
}



//-------------------------------------------------
//AFFICHAGE ---------------------------------------
//-------------------------------------------------

//affiche les bpm dans la page
function display_bpm(d)
{
    let parent = document.getElementById("bpm");
    if(d)
    {
        
        bpm = get_bpm(4, d);
    }
    
    parent.innerHTML = bpm + ' bpm';
    //console.log("affiche bpm");
}

//dessine les indicateurs de mesure autour du cercle
function draw_items(items)
{
    var img = document.getElementById('img_cercle');
    //on se base sur la taille de l'image du cercle
    var centreX = img.clientWidth / 2 - 10;
    var centreY = img.clientHeight / 2 - 2;
    var rayon = img.clientWidth / 2;

    destroy('beats', 'cercle');
    destroy('mesures', 'cercle');
    for (var i = 0; i < items; i++)
    {
        //On calcule l'angle en degrés
        var angle = 360 / (items / i) - 90;
//        console.log("angle deg: " + angle);

        //si c'est un beat:
        if (angle % 90 === 0)
        {
            //On calcule l'angle en radiants
            angle = angle * Math.PI / 180.0;
//        console.log(angle);
            draw('beats', angle, rayon, centreX, centreY, 'cercle');
        }
        //si c'est une mesure:
        else
        {
            //On calcule l'angle en radiants
            angle = angle * Math.PI / 180.0;
//        console.log(angle);
            draw('mesures', angle, rayon, centreX + 5, centreY + 2, 'cercle');
        }
    }
}


//détruit tous les éléments avec la class class_name placés dans parent_id
function destroy(class_name, parent_id)
{
    var parent = document.getElementById(parent_id);
    //on efface le contenu du parent
    var rip = document.getElementsByClassName(class_name);
    if (rip.length > 0)
    {
        for (var i = rip.length - 1; i > -1; i--) {
            parent.removeChild(rip[i]);
        }
    }
}

//crée une div sur un cercle
function draw(class_name, angle, rayon, centreX, centreY, parent_id)
{

    var parent = document.getElementById(parent_id);
    var x = centreX + rayon * Math.cos(angle);
    var y = centreY + rayon * Math.sin(angle);
    var out = document.createElement("div");
    parent.appendChild(out);

    out.className = class_name;
    out.style.left = x + "px";
    out.style.top = y + "px";
//    out.style.transformOrigin = "50% 50%";

    out.style.webkitTransform = 'rotate(' + angle + 'rad)';
    out.style.mozTransform = 'rotate(' + angle + 'rad)';
    out.style.msTransform = 'rotate(' + angle + 'rad)';
    out.style.oTransform = 'rotate(' + angle + 'rad)';
    out.style.transform = 'rotate(' + angle + 'rad)';

    return out;
}

//crée le menu
function create_audioCategories_menu()
{
    parent = document.getElementById('libraryCategories');

    //on crée le <ul></ul>
    var libraryCategories_ul = document.createElement("ul");//le div du bouton dans le HTML
    parent.appendChild(libraryCategories_ul);

    for (var i = 0; i < sound_categories.length; i++)
    {
        audioCategory_menu.push(new AudioCategory(libraryCategories_ul, sound_categories[i]));
    }
    active_AudioCategory = audioCategory_menu[0];
    active_AudioCategory.activate();
    //on affiche les boutons
    create_audioCategories_buttons(sound_categories[0]);
}

//on remplit un tableau de boutons de la librairie de sons
function create_audioCategories_buttons(categorie)
{
    if (soundFiles_buttons.length > 0)
    {
        //on efface les boutons
        for (let i = 0; i < soundFiles_buttons.length; i++)
        {
            soundFiles_buttons[i].destroy();
        }
        //on vide l'array
        soundFiles_buttons = [];
    }

    //on crée les nouveaux boutons
    for (var i = 0, len = soundFiles.length; i < len; i++)
    {
        if (soundFiles[i][1] === categorie)
        {
            soundFiles_buttons.push(new Button("sample " + (i < 9 ? "0" + (i + 1) : (i + 1)), "librarySamples_1", i, false));
        }
    }
    refresh_dnd_listOfButtons();
}

//crée un sound marker autour du cercle
function create_sound_marker(letter, t)
{
    return new Sound_Marker(letter, t);
}