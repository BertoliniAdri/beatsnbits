/* A FAIRE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/*
 (FAIT) Changer nom boolean "login" car conflit avec ajax connexion.
 Declarer toutes les variables avant de les utiliser
 
 */
/* FIN A FAIRE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */


// DEBUT : DECLARATIONS DES VARIABLES
var v_mobilemenu_open;
var v_mobilemenu_close;

var v_librairy_open;
var v_librairy_close;

var v_mysequences_open;
var v_mysequences_close;

var v_mysounds_open;

var v_controls_open;
var v_controls_close;

var v_soundlist_open;
var v_soundlist_close;

var v_share_open;
var v_share_close;

var v_keyboard_open;
var v_keyboard_close;

var v_options_open;
var v_options_close;

var v_fullscreen_openclose;
var v_fullscreen;

var v_connexion_openclose;
var v_connexion_form;

var v_cercle_container;
var v_icons;
// FIN : DECLARATIONS DES VARIABLES

// DEBUT : DECLARATIONS DES BOOLEANS
//  False = fermé / True =  ouvert
var b_library = false;
var b_options = false;
var b_share = false;
var b_keyboard = false;
var b_sequences = false;
var b_controls = true;
var b_menumobile = true;
var b_login = true; // boolean inversé !a revoir!
var b_soundlist = false;
// FIN : DECLARATIONS DES BOOLEANS


window.addEventListener('load', function () {

    // ATRIBUTIONS DES VARIABLES
    v_mobilemenu_open = document.getElementById('mobilemenu_id');
    v_mobilemenu_close = document.getElementById('mobilemenuClose');

    v_librairy_open = document.getElementById('libraryOpen_id');
    v_librairy_close = document.getElementById('libraryClose_id');

    v_mysequences_open = document.getElementById('mysequencesOpen_id');
    v_mysequences_close = document.getElementById('mysequencesClose_id');

    v_mysounds_open = document.getElementById('mysounds_id');

    v_controls_open = document.getElementById('openControls_id');
    v_controls_close = document.getElementById('closeControls_id');

    v_soundlist_open = document.getElementById('soundlistOpen_id');
    v_soundlist_close = document.getElementById('soundlistClose_id');

    v_share_open = document.getElementById('shareOpen_id');
    v_share_close = document.getElementById('shareClose_id');

    v_keyboard_open = document.getElementById('keyboardOpen_id');
    v_keyboard_close = document.getElementById('keyboardClose_id');

    v_options_open = document.getElementById('optionsOpen_id');
    v_options_close = document.getElementById('optionsClose_id');

    v_fullscreen_openclose = document.getElementById('fullscreenOpen_id');
    v_fullscreen = document.getElementById('fullscreen');

//    v_connexion_openclose = document.getElementById('login_link');
    v_connexion_form = document.getElementById('testForm');

    v_cercle_container = document.getElementById('cercle_container');
    v_icons = document.querySelector('.icons_right');

// DEBUT : EVENTS DETECTION DE CLICK

    // DEBUT : MENU MOBILE 
    if (v_mobilemenu_open) {
        v_mobilemenu_open.addEventListener("click", mobilemenuOpen_fx);
    }

    if (v_mobilemenu_close) {
        v_mobilemenu_close.addEventListener("click", mobilemenuClose_fx);
    }
    // FIN : MENU MOBILE 
    // -----



    // DEBUT : LIBRAIRIE
    if (v_librairy_open) {
        v_librairy_open.addEventListener("click", libraryOpen_fx);
    }

    if (v_librairy_close) {
        v_librairy_close.addEventListener("click", libraryClose_fx);
    }
    // FIN : LIBRAIRIE
    // -----



    // DEBUT : MES SEQUENCES
    if (v_mysequences_open) {
        v_mysequences_open.addEventListener("click", mysequencesOpen_fx);
    }

    if (v_mysequences_close) {
        v_mysequences_close.addEventListener("click", mysequencesClose_fx);
    }
    // FIN : MES SEQUENCES
    // -----



    // DEBUT : MES SEQUENCES
//    if (document.getElementById('mysounds_id')) {
//        let mysoundsOpen = document.getElementById('mysounds_id');
//        mysoundsOpen.addEventListener("click", mysoundsOpen_fx);
//    }
//
//    if (document.getElementById('mysounds_id')) {
//        let mysoundsClose = document.getElementById('mysounds_id');
//        mysoundsClose.addEventListener("click", mysoundsClose_fx);
//    }
    // FIN : MES SEQUENCES
    // -----



    // DEBUT : CONTROLES
    if (v_controls_open) {
        v_controls_open.addEventListener("click", controlsOpen_fx);
    }

    if (v_controls_close) {
        v_controls_close.addEventListener("click", controlsClose_fx);
    }
    // FIN : CONTROLES
    // -----



    // DEBUT : LISTE DE MES SONS
    if (v_soundlist_open) {
        v_soundlist_open.addEventListener("click", soundlistOpen_fx);
    }

    if (v_soundlist_close) {
        v_soundlist_close.addEventListener("click", soundlistClose_fx);
    }
    // FIN : LISTE DE MES SONS
    // -----



    // DEBUT : PARTAGER
    if (v_share_open) {
        v_share_open.addEventListener("click", shareOpen_fx);
    }

    if (v_share_close) {
        v_share_close.addEventListener("click", shareClose_fx);
    }
    // FIN : PARTAGER
    // -----

    // DEBUT : KEYBOARDS
    if (v_keyboard_open) {
        v_keyboard_open.addEventListener("click", keyboardOpen_fx);
    }

    if (v_keyboard_close) {
        v_keyboard_close.addEventListener("click", keyboardClose_fx);
    }
    // FIN : KEYBOARDS
    // -----



    // DEBUT : OPTIONS
    if (v_options_open) {
        v_options_open.addEventListener("click", optionsOpen_fx);
    }

    if (v_options_close) {
        v_options_close.addEventListener("click", optionsClose_fx);
    }
    // FIN : OPTIONS
    // -----



    // DEBUT : FULLSCREEN (MODE PLEIN ECRAN)
    if (v_fullscreen_openclose) {
        v_fullscreen_openclose.addEventListener("click", fullscreen_fx);
    }
    // FIN : FULLSCREEN (MODE PLEIN ECRAN)
    // -----


    // DEBUT : SE CONNECTER
//    if (v_connexion_openclose) {
//        v_connexion_openclose.addEventListener("click", login_fx);
//    }
    // FIN : SE CONNECTER
    // -----

    size_fitting();

// FIN : EVENTS DETECTION DE CLICK
});



// DEBUT : MENU MOBILE ------------------------------------------------------ //
// DEBUT : OUVRIR LE MENU MOBILE
function mobilemenuOpen_fx() {
    document.querySelector('.mobilemenu').style.display = 'block';
    document.querySelector('.mobilemenuOpen').style.display = 'none';
    document.querySelector('.mobilemenuClose').style.display = 'block';
    document.getElementById('mobilemenu_id').className += ' display_none';
    document.getElementById('mobilemenuClose').className = 'mobilemenuClose';
    document.querySelector('.middlepage').style.display = 'none';

    b_menumobile = false;
}
// FIN : OUVRIR LE MENU MOBILE

// FERMER LE MENU MOBILE
function mobilemenuClose_fx() {
    document.querySelector('.mobilemenu').style.display = 'none';
    document.querySelector('.mobilemenuOpen').style.display = 'block';
    document.querySelector('.mobilemenuClose').style.display = 'none';
    document.getElementById('mobilemenu_id').className = 'mobilemenuOpen';
    document.getElementById('mobilemenuClose').className += ' display_none';
    document.querySelector('.middlepage').style.display = 'block';

    b_menumobile = true;
}
// FIN : FERMER LE MENU MOBILE
// FIN : MENU MOBILE -------------------------------------------------------- //


// DEBUT : LA LIBRAIRIE ----------------------------------------------------- //
// DEBUT : OUVRE LA LIBRAIRIE
function libraryOpen_fx() {


    document.querySelector('.libraryOpened').style.display = 'block';
//    document.querySelector('.libraryOpen').style.display = 'none';
    document.querySelector('.libraryClose').style.display = 'block';
    document.querySelector('.mobilemenuOpen').style.display = 'none';
    document.querySelector('.mobilemenuClose').style.display = 'none';
//    document.getElementById('cercle_container').className = 'display_none';

    b_library = true;
}
// FIN : OUVRE LA LIBRAIRIE


// DEBUT : FERME LA LIBRAIRIE
function libraryClose_fx() {
    document.querySelector('.libraryClose').style.display = 'none';
//    document.querySelector('.libraryOpen').style.display = 'block';
    document.querySelector('.libraryOpened').style.display = 'none';
    document.querySelector('.mobilemenuOpen').style.display = 'block';
    document.querySelector('.mobilemenuClose').style.display = 'block';
//    document.getElementById('cercle_container').className = 'cercle_container';

    b_library = false;
}
// FIN : FERME LA LIBRAIRIE
// FIN :  LA LIBRAIRIE ------------------------------------------------------ //

// DEBUT : MES SEQUENCES ----------------------------------------------------- //
// DEBUT : OUVRE MES SEQUENCES
function mysequencesOpen_fx() {
    document.querySelector('.mysequencesOpened').style.display = 'block';
    document.querySelector('.mysequencesClose').style.display = 'block';
    document.querySelector('.mobilemenuOpen').style.display = 'none';
    document.querySelector('.mobilemenuClose').style.display = 'none';

    b_sequences = true;
}
// FIN : OUVRE MES SEQUENCES

// DEBUT : FERME MES SEQUENCES
function mysequencesClose_fx() {
    document.querySelector('.mysequencesClose').style.display = 'none';
    document.querySelector('.mysequencesOpened').style.display = 'none';
    document.querySelector('.mobilemenuOpen').style.display = 'block';
    document.querySelector('.mobilemenuClose').style.display = 'block';

    b_sequences = false;
}
// FIN : FERME MES SEQUENCES
// FIN : MES SEQUENCES ------------------------------------------------------ //


// DEBUT : LES OPTIONS ------------------------------------------------------ //
// DEBUT : OUVRE LES OPTIONS
function optionsOpen_fx() {
    document.querySelector('.optionsOpened').style.display = 'block';
    document.querySelector('.optionsClose').style.display = 'block';
    document.querySelector('.mobilemenuOpen').style.display = 'none';
    document.querySelector('.mobilemenuClose').style.display = 'none';

    b_options = true;
}
// FIN : OUVRE LES OPTIONS

// DEBUT : FERME LES OPTIONS
function optionsClose_fx() {
    document.querySelector('.optionsClose').style.display = 'none';
    document.querySelector('.optionsOpened').style.display = 'none';
    document.querySelector('.mobilemenuOpen').style.display = 'block';
    document.querySelector('.mobilemenuOpen').style.display = 'block';
    document.querySelector('.mobilemenuClose').style.display = 'block';

    b_options = false;
}
// FIN : FERME LES OPTIONS
// FIN : LES OPTIONS -------------------------------------------------------- //


// DEBUT : SHARE ------------------------------------------------------------ //
// DEBUT : OUVRE "SHARE"
function shareOpen_fx() {
    document.querySelector('.shareOpened').style.display = 'block';
//    document.querySelector('.shareOpen').style.display = 'none';
    document.querySelector('.shareClose').style.display = 'block';


    b_share = true;
}
// FIN : OUVRE SHARE

// DEBUT : FERME "SHARE"
function shareClose_fx() {
    document.querySelector('.shareClose').style.display = 'none';
//    document.querySelector('.shareOpen').style.display = 'block';
    document.querySelector('.shareOpened').style.display = 'none';


    b_share = false;
}
// FIN : FERME "SHARE"
// FIN : SHARE -------------------------------------------------------- //


// DEBUT : KEYBOARD ------------------------------------------------------------ //
// DEBUT : OUVRE "KEYBOARD"
function keyboardOpen_fx() {
    document.querySelector('.keyboardOpened').style.display = 'block';
//    document.querySelector('.shareOpen').style.display = 'none';
    document.querySelector('.keyboardClose').style.display = 'block';


    b_share = true;
}
// FIN : OUVRE KEYBOARD

// DEBUT : FERME "KEYBOARD"
function keyboardClose_fx() {
    document.querySelector('.keyboardClose').style.display = 'none';
//    document.querySelector('.shareOpen').style.display = 'block';
    document.querySelector('.keyboardOpened').style.display = 'none';


    b_share = false;
}
// FIN : FERME "KEYBOARD"
// FIN : KEYBOARD -------------------------------------------------------- //



// DEBUT : CONTROLS --------------------------------------------------------- //
// DEBUT : OUVRE "CONTROLS"
function controlsOpen_fx() {
    document.querySelector('.user_controls').style.display = 'block';
    document.querySelector('.controlsOpen').style.display = 'none';
    document.querySelector('.controlsClose').style.display = 'block';
    document.querySelector('.container').style.minHeight = '60vh';
    document.querySelector('.container').style.maxHeight = '60vh';
    v_cercle_container.style.minHeight = '60vh';
    v_cercle_container.style.maxHeight = '60vh';
    v_icons.style.minHeight = '60vh';
    v_icons.style.maxHeight = '60vh';
    v_fullscreen.height = '60vh';

    b_controls = false;
}

//FERME LES CONTROLS
function controlsClose_fx() {
    document.querySelector('.user_controls').style.display = 'none';
    document.querySelector('.controlsOpen').style.display = 'block';
    document.querySelector('.controlsClose').style.display = 'none';
    document.querySelector('.container').style.minHeight = '85vh';
    document.querySelector('.container').style.maxHeight = '85vh';
    v_cercle_container.style.minHeight = '85vh';
    v_cercle_container.style.maxHeight = '85vh';
    v_icons.style.minHeight = '85vh';
    v_icons.style.maxHeight = '85vh';
    v_fullscreen.height = '85vh';

    b_controls = true;
}
// FIN : FERME "OPTIONS"
// FIN : CONTROLS ----------------------------------------------------------- //


// DEBUT : LISTE DES SONS --------------------------------------------------- //
// DEBUT : OUVRE "LISTE DES SONS"
function soundlistOpen_fx() {
    document.querySelector('.sounds-table').style.display = 'block';
    document.querySelector('.sounds-list').style.display = 'block';
    document.querySelector('.soundListOpen').style.display = 'none';
    document.querySelector('.soundListClose').style.display = 'block';
    document.querySelector('.container').style.minHeight = '60vh';
    document.querySelector('.container').style.maxHeight = '60vh';
    v_cercle_container.style.minHeight = '60vh';
    v_cercle_container.style.maxHeight = '60vh';
    v_icons.style.minHeight = '60vh';
    v_icons.style.maxHeight = '60vh';

    b_soundlist = false;
}

//FERME LA LISTE DES SONS
function soundlistClose_fx() {
    document.querySelector('.sounds-table').style.display = 'none';
    document.querySelector('.sounds-list').style.display = 'none';
    document.querySelector('.soundListOpen').style.display = 'block';
    document.querySelector('.soundListClose').style.display = 'none';
    document.querySelector('.container').style.minHeight = '85vh';
    document.querySelector('.container').style.maxHeight = '85vh';
    v_cercle_container.style.minHeight = '85vh';
    v_cercle_container.style.maxHeight = '85vh';
    v_icons.style.minHeight = '85vh';
    v_icons.style.maxHeight = '85vh';

    b_soundlist = true;
}
// FIN : FERME "LISTE DES SONS"
// FIN : LISTE DES SONS ------------------------------------------------------ //



function login_fx() {

    if (b_login) {
        v_connexion_form.style.display = 'block';
        b_login = false;
        console.log("b_login false: " + v_connexion_form.style.display);
    } else {
        v_connexion_form.style.display = 'none';
        b_login = true;
        console.log("b_login true: " + v_connexion_form.style.display);
    }
}

// DEBUT : MODE PLEIN ECRAN ON/OFF 
function fullscreen_fx() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        // Taille de l'écran
        taiEX = window.screen.width;
        taiEY = window.screen.height;
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        taiEX = window.screen.width;
        taiEY = window.screen.height;
    }
}
// FIN : MODE PLEIN ECRAN ON/OFF


function size_fitting() {


}