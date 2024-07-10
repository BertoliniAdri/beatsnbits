var timerId_anim = null;//timer pour la génération de la couleur alétoire
var random_nbr;//nombre aléatoire pour génération de la couleur aléatoire
var fill_color = "#37FDFC";//couleur des lignes sur svg

var svg_style_tri;//style du svg triangle
var svg_style_car;//style du svg carré
var svg_style_los;//style du svg losange
var svg_style_cer;//style du svg cercle
var svg_style_xcar;//style du svg x_carre

var svg_anim_zoom;//instructions css pour animation
var svg_anim;//animation appliquée au svg

var timeOutId = null;


// declaration en init-----------------------
// --------------------------------------------
window.addEventListener('load', function () {

// Déclaration des zones--------------------------------

 zone_triangle = document.getElementById('zone1');
 console.log("animation chargé ok");

svg_style_tri ="";
svg_style_car="";
svg_style_los="";
svg_style_cer="";
svg_style_xcar="";


svg_anim_zoom ="animation:zoom 0.2s linear";
svg_anim ="@keyframes zoom {0% {transform:scale(1.0);} 100% {transform:scale(1.5);}}";

startTimer_anim();//démarrage du timer pour génération de la couleur aléatoire

 });
// fin de l'init-------------------------------------
// --------------------------------------------------


// fonction qui lance le timer pour la génération de la couleur aléatoire------
function startTimer_anim () {

//  timerId_anim = window.setInterval("random_color()", 100);
//  console.log("startTimer_anim chargé");

}
// fin fonction----------------------------------------------------------------



// fonction pour la génération des couleurs aléatoires--------------------------
function random_color() {

  random_nbr = Math.random();

  if (random_nbr > 0.5) {
     fill_color = "#FF4F4F";
  } else {
    fill_color = "#37FDFC";
  }
}
// fin fonction-----------------------------------------------------------------



// PREPARATION DE L'AFFICHAGE DES SVG----------------------------------------
// fonction pour la préparation du svg triangle----------------------------
function svg_tri() {

  svg_style_tri ='#triangle_svg{width:20%;'+svg_anim_zoom+';}.cls-tri{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:visible;}'+svg_anim;

  // SVG TRIANGLE zone 1
  document.getElementById("zone1").innerHTML = '<svg id="triangle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.79 288.45"><defs><style>'+svg_style_tri+'</style></defs><title>triangle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-tri" x1="0.89" y1="287.45" x2="290.89" y2="287.45"/><line class="cls-tri" x1="145.89" y1="0.45" x2="0.89" y2="287.45"/><line class="cls-tri" x1="290.89" y1="287.45" x2="145.89" y2="0.45"/></g></g></svg>';

  // SVG TRIANGLE zone 10
  document.getElementById("zone10").innerHTML = '<svg id="triangle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.79 288.45"><defs><style>'+svg_style_tri+'</style></defs><title>triangle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-tri" x1="0.89" y1="287.45" x2="290.89" y2="287.45"/><line class="cls-tri" x1="145.89" y1="0.45" x2="0.89" y2="287.45"/><line class="cls-tri" x1="290.89" y1="287.45" x2="145.89" y2="0.45"/></g></g></svg>';
}
// fin fonction prep svg triangle------------------------------------------


function svg_car() {

  svg_style_car ='#carre_cercle_svg{width:20%;'+svg_anim_zoom+';}.cls-carre{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:visible;}'+svg_anim;


  // SVG CARRE_CERCLE zone 2
  document.getElementById('zone2').innerHTML = '<svg id="carre_cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_car+'</style></defs><title>square_circle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-carre" d="M286,2V286H2V2H286m2-2H0V288H288V0Z"/><path class="cls-carre" d="M144,2A142,142,0,0,1,244.41,244.41,142,142,0,0,1,43.59,43.59,141.07,141.07,0,0,1,144,2m0-2A144,144,0,1,0,288,144,144,144,0,0,0,144,0Z"/></g></g></svg>';

  // SVG CARRE_CERCLE zone 9
  document.getElementById('zone9').innerHTML = '<svg id="carre_cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_car+'</style></defs><title>square_circle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-carre" d="M286,2V286H2V2H286m2-2H0V288H288V0Z"/><path class="cls-carre" d="M144,2A142,142,0,0,1,244.41,244.41,142,142,0,0,1,43.59,43.59,141.07,141.07,0,0,1,144,2m0-2A144,144,0,1,0,288,144,144,144,0,0,0,144,0Z"/></g></g></svg>';
}

function svg_los () {

  svg_style_los ='#losange_svg{width:20%;'+svg_anim_zoom+';}.cls-los{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:visible;}'+svg_anim;

  // SVG LOSANGE zone 3
  document.getElementById('zone3').innerHTML ='<svg id="losange_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_los+'</style></defs><title>losange</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-los" d="M142.78,2.83l142.39,140-140,142.39L2.83,145.22l140-142.39m0-2.83L0,145.24,145.24,288,288,142.76,142.76,0Z"/><line class="cls-los" x1="41.25" y1="44.2" x2="99.51" y2="101.46"/><line class="cls-los" x1="245.15" y1="244.62" x2="186.09" y2="186.56"/><line class="cls-los" x1="243.81" y1="42.05" x2="186.15" y2="100.71"/><line class="cls-los" x1="43.79" y1="245.55" x2="100.65" y2="187.7"/></g></g></svg>';

  // SVG LOSANGE zone 8
  document.getElementById('zone8').innerHTML ='<svg id="losange_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_los+'</style></defs><title>losange</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-los" d="M142.78,2.83l142.39,140-140,142.39L2.83,145.22l140-142.39m0-2.83L0,145.24,145.24,288,288,142.76,142.76,0Z"/><line class="cls-los" x1="41.25" y1="44.2" x2="99.51" y2="101.46"/><line class="cls-los" x1="245.15" y1="244.62" x2="186.09" y2="186.56"/><line class="cls-los" x1="243.81" y1="42.05" x2="186.15" y2="100.71"/><line class="cls-los" x1="43.79" y1="245.55" x2="100.65" y2="187.7"/></g></g></svg>';

}

function svg_cer () {

  svg_style_cer ='#cercle_svg{width:20%;'+svg_anim_zoom+';}.cls-cer{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:visible;}'+svg_anim;

  // SVG CERCLE zone 4
  document.getElementById('zone4').innerHTML ='<svg id="cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_cer+'</style></defs><title>circle_x</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-cer" d="M144,2A142,142,0,0,1,244.95,243.87,142,142,0,0,1,43.05,44.13,141,141,0,0,1,144,2h0m0-2A144,144,0,1,0,245.27,41.63,143.58,143.58,0,0,0,144,0Z"/><line class="cls-cer" x1="245.27" y1="41.63" x2="42.73" y2="246.37"/><line class="cls-cer" x1="41.63" y1="42.73" x2="246.37" y2="245.27"/></g></g></svg>';

  // SVG CERCLE zone 9
  document.getElementById('zone7').innerHTML ='<svg id="cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_cer+'</style></defs><title>circle_x</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-cer" d="M144,2A142,142,0,0,1,244.95,243.87,142,142,0,0,1,43.05,44.13,141,141,0,0,1,144,2h0m0-2A144,144,0,1,0,245.27,41.63,143.58,143.58,0,0,0,144,0Z"/><line class="cls-cer" x1="245.27" y1="41.63" x2="42.73" y2="246.37"/><line class="cls-cer" x1="41.63" y1="42.73" x2="246.37" y2="245.27"/></g></g></svg>';
}

function svg_xcar() {

  svg_style_xcar='#xcar_svg{width:20%;'+svg_anim_zoom+';}.cls-xcar{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:visible;}'+svg_anim;

  // SVG X-CARRE zone 5
  document.getElementById('zone5').innerHTML ='<svg id="xcar_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.57 289.4"><defs><style>'+svg_style_xcar+'</style></defs><title>x_square</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-xcar" x1="1" y1="0.71" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="287.58" y1="0.71" x2="288.57" y2="288.4"/><line class="cls-xcar" x1="3.97" y1="288.4" x2="287.58" y2="0.71"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="1" y2="0.71"/></g></g></svg>';


  // SVG X-CARRE zone 6
  document.getElementById('zone6').innerHTML ='<svg id="xcar_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.57 289.4"><defs><style>'+svg_style_xcar+'</style></defs><title>x_square</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-xcar" x1="1" y1="0.71" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="287.58" y1="0.71" x2="288.57" y2="288.4"/><line class="cls-xcar" x1="3.97" y1="288.4" x2="287.58" y2="0.71"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="1" y2="0.71"/></g></g></svg>';

}
// FIN PREPARATION DE L'AFFICHAGE SVG---------------------------------------


// DISPARITION DES SVG----------------------------------------------------------
function svg_tri_out() {

  svg_style_tri ='#triangle_svg{width:20%;'+svg_anim_zoom+';}.cls-tri{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:hidden;}'+svg_anim;

 // SVG TRIANGLE zone 1
  document.getElementById("zone1").innerHTML = '<svg id="triangle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.79 288.45"><defs><style>'+svg_style_tri+'</style></defs><title>triangle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-tri" x1="0.89" y1="287.45" x2="290.89" y2="287.45"/><line class="cls-tri" x1="145.89" y1="0.45" x2="0.89" y2="287.45"/><line class="cls-tri" x1="290.89" y1="287.45" x2="145.89" y2="0.45"/></g></g></svg>';

 // SVG TRIANGLE zone 10
 document.getElementById("zone10").innerHTML = '<svg id="triangle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.79 288.45"><defs><style>'+svg_style_tri+'</style></defs><title>triangle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-tri" x1="0.89" y1="287.45" x2="290.89" y2="287.45"/><line class="cls-tri" x1="145.89" y1="0.45" x2="0.89" y2="287.45"/><line class="cls-tri" x1="290.89" y1="287.45" x2="145.89" y2="0.45"/></g></g></svg>';

}

function svg_car_out() {

  svg_style_car ='#carre_cercle_svg{width:20%;'+svg_anim_zoom+';}.cls-carre{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:hidden;}'+svg_anim;

  // SVG CARRE_CERCLE zone 2
  document.getElementById('zone2').innerHTML = '<svg id="carre_cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_car+'</style></defs><title>square_circle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-carre" d="M286,2V286H2V2H286m2-2H0V288H288V0Z"/><path class="cls-carre" d="M144,2A142,142,0,0,1,244.41,244.41,142,142,0,0,1,43.59,43.59,141.07,141.07,0,0,1,144,2m0-2A144,144,0,1,0,288,144,144,144,0,0,0,144,0Z"/></g></g></svg>';

  // SVG CARRE_CERCLE zone 9
  document.getElementById('zone9').innerHTML = '<svg id="carre_cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_car+'</style></defs><title>square_circle</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-carre" d="M286,2V286H2V2H286m2-2H0V288H288V0Z"/><path class="cls-carre" d="M144,2A142,142,0,0,1,244.41,244.41,142,142,0,0,1,43.59,43.59,141.07,141.07,0,0,1,144,2m0-2A144,144,0,1,0,288,144,144,144,0,0,0,144,0Z"/></g></g></svg>';
}


function svg_los_out() {

  svg_style_los ='#losange_svg{width:20%;'+svg_anim_zoom+';}.cls-los{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:hidden;}'+svg_anim;

  // SVG LOSANGE zone 3
  document.getElementById('zone3').innerHTML ='<svg id="losange_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_los+'</style></defs><title>losange</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-los" d="M142.78,2.83l142.39,140-140,142.39L2.83,145.22l140-142.39m0-2.83L0,145.24,145.24,288,288,142.76,142.76,0Z"/><line class="cls-los" x1="41.25" y1="44.2" x2="99.51" y2="101.46"/><line class="cls-los" x1="245.15" y1="244.62" x2="186.09" y2="186.56"/><line class="cls-los" x1="243.81" y1="42.05" x2="186.15" y2="100.71"/><line class="cls-los" x1="43.79" y1="245.55" x2="100.65" y2="187.7"/></g></g></svg>';

  // SVG LOSANGE zone 8
  document.getElementById('zone8').innerHTML ='<svg id="losange_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_los+'</style></defs><title>losange</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-los" d="M142.78,2.83l142.39,140-140,142.39L2.83,145.22l140-142.39m0-2.83L0,145.24,145.24,288,288,142.76,142.76,0Z"/><line class="cls-los" x1="41.25" y1="44.2" x2="99.51" y2="101.46"/><line class="cls-los" x1="245.15" y1="244.62" x2="186.09" y2="186.56"/><line class="cls-los" x1="243.81" y1="42.05" x2="186.15" y2="100.71"/><line class="cls-los" x1="43.79" y1="245.55" x2="100.65" y2="187.7"/></g></g></svg>';
}

function svg_cer_out() {

  svg_style_cer ='#cercle_svg{width:20%;'+svg_anim_zoom+';}.cls-cer{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:hidden;}'+svg_anim;

  // SVG CERCLE zone 4
  document.getElementById('zone4').innerHTML ='<svg id="cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_cer+'</style></defs><title>circle_x</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-cer" d="M144,2A142,142,0,0,1,244.95,243.87,142,142,0,0,1,43.05,44.13,141,141,0,0,1,144,2h0m0-2A144,144,0,1,0,245.27,41.63,143.58,143.58,0,0,0,144,0Z"/><line class="cls-cer" x1="245.27" y1="41.63" x2="42.73" y2="246.37"/><line class="cls-cer" x1="41.63" y1="42.73" x2="246.37" y2="245.27"/></g></g></svg>';

  // SVG CERCLE zone 9
  document.getElementById('zone7').innerHTML ='<svg id="cercle_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288"><defs><style>'+svg_style_cer+'</style></defs><title>circle_x</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-cer" d="M144,2A142,142,0,0,1,244.95,243.87,142,142,0,0,1,43.05,44.13,141,141,0,0,1,144,2h0m0-2A144,144,0,1,0,245.27,41.63,143.58,143.58,0,0,0,144,0Z"/><line class="cls-cer" x1="245.27" y1="41.63" x2="42.73" y2="246.37"/><line class="cls-cer" x1="41.63" y1="42.73" x2="246.37" y2="245.27"/></g></g></svg>';
}

function svg_xcar_out() {

  svg_style_xcar='#xcar_svg{width:20%;'+svg_anim_zoom+';}.cls-xcar{fill:none;stroke:'+fill_color+';stroke-miterlimit:10;stroke-width:2px;visibility:hidden;}'+svg_anim;

  // SVG X-CARRE zone 5
  document.getElementById('zone5').innerHTML ='<svg id="xcar_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.57 289.4"><defs><style>'+svg_style_xcar+'</style></defs><title>x_square</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-xcar" x1="1" y1="0.71" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="287.58" y1="0.71" x2="288.57" y2="288.4"/><line class="cls-xcar" x1="3.97" y1="288.4" x2="287.58" y2="0.71"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="1" y2="0.71"/></g></g></svg>';


  // SVG X-CARRE zone 6
  document.getElementById('zone6').innerHTML ='<svg id="xcar_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.57 289.4"><defs><style>'+svg_style_xcar+'</style></defs><title>x_square</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><line class="cls-xcar" x1="1" y1="0.71" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="3.97" y2="288.4"/><line class="cls-xcar" x1="287.58" y1="0.71" x2="288.57" y2="288.4"/><line class="cls-xcar" x1="3.97" y1="288.4" x2="287.58" y2="0.71"/><line class="cls-xcar" x1="288.57" y1="288.4" x2="1" y2="0.71"/></g></g></svg>';

}

// FIN DISPATION DES SVG--------------------------------------------------------



// DETECTION DE TOUCHE APPUYEE--------------------------------------------------
window.addEventListener('keydown', function (e) {

  // TRIANGLE/touche W-----------
  if (e.keyCode === 87) {

    svg_tri();

  // fin TRIANGLE/touche W-----------
  }

  // CARRE_CERCLE/touche X-----------
  if (e.keyCode === 88) {

    svg_car();

    // fin CARRE_CERCLE/touche X--------
    }

    // LOSANGE/ touche C------------------
    if (e.keyCode === 67) {

    svg_los();

    }
    // fin LOSANGE/ touche C-------------------

    // CERCLE/touche V---------------------------
    if (e.keyCode === 86) {

    svg_cer();

    }
    // fin CERCLE/touche V-------------------------

    // X-CARRE/touche B----------------------------
    if (e.keyCode === 66) {

    svg_xcar();

    }
    // fin X-CARRE/touche B

});
  // FIN DETECTION TOUCHE APPUYEE-----------------------------------------------



  // DETECTION TOUCHE RELEVEE---------------------------------------------------
window.addEventListener('keyup', function(e) {

  // TRIANGLE/touche W-----------
 if (e.keyCode === 87) {

 svg_tri_out();

  // fin TRIANGLE/touche W-----------
 }

  // CARRE_CERCLE/touche X-----------
 if (e.keyCode === 88) {

 svg_car_out();

  // fin CARRE_CERCLE/touche X--------
 }

 // LOSANGE/ touche C------------------
 if (e.keyCode === 67) {

 svg_los_out();

 }
 // fin LOSANGE/ touche C-------------------

 // CERCLE/touche V---------------------------
 if (e.keyCode === 86) {

 svg_cer_out();

 }
 // fin CERCLE/touche V-------------------------

 // X-CARRE/touche B----------------------------
 if (e.keyCode === 66) {

 svg_xcar_out();

}
 // fin X-CARRE/touche B

});
  // FIN DETECTION TOUCHE RELEVEE-----------------------------------------------


// ANIMATION LORSQUE LES SONS SONT JOUES-------------------
function anim_svg_tri() {

svg_tri();
  timeOutId = window.setTimeout(svg_tri_out, 100);
  }

  function anim_svg_car() {

  svg_car();
  timeOutId = window.setTimeout(svg_car_out, 100);
  }

  function anim_svg_los() {

  svg_los();
  timeOutId = window.setTimeout(svg_los_out, 100);
  }

  function anim_svg_cer() {

  svg_cer();
  timeOutId = window.setTimeout(svg_cer_out, 100);
  }

  function anim_svg_xcar() {

  svg_xcar();
  timeOutId = window.setTimeout(svg_xcar_out, 100);
  }

// FIN ANIMATION------------------------------------------------
