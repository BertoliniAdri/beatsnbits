//class_button.js
//

//faire une div avec une id pour placer le bouton
//Ex: <div id="ma_div" id="parent"></div>
//appeler le bouton
//Ex:
//var c = new Button("X", "parent", key_sounds[0], true);



class Button
{
    //is_playButton est false par défaut (fichier son)
    constructor(key, parent_id, sound_file_id, is_playButton = false)
    {
        this.parent = document.getElementById(parent_id);//parent du bouton dans le HTML
        this.key = key;//Label du bouton
        this.sound_file = sound_file_id;//id de l'obj audio associé au bouton (pour les boutons fichier son)
        this.is_active = false;
        this.is_over = false;
        this.is_playButton = is_playButton;//si true: bouton d'édition, si false: bouton fichier son
        this.out = document.createElement("div");//le div du bouton dans le HTML
        this.playsound = false;//passe en true quand mousedown et false quand drag


        this.bouton_on = false;//le bouton n'est pas actif
        this.timer;//pour pouvoir faire un clearTimeout
//    this.key_value = key_value;
//    this.key_label = String.fromCharCode(key_value);
//    this.key_label = key;
        this.parent.appendChild(this.out);

//si c'est un bouton d'édition de boucle
        if (this.is_playButton)
        {
            this.out.className = "launchpad dropper";
//            this.out.innerHTML = '<h1>' + this.key + '</h1>';
            this.out.innerHTML = this.key;
        }
        //si c'est un bouton de fichier son
        else
        {
            this.out.className = "samples draggable";
            this.out.innerHTML = '<h6>' + this.key + '</h6>';
            this.out.draggable = 'true';
        }


        //On place un écouteur pour les les clicks de souris

        //on utilise une fonction fléchée pour préserver le "this"
        //comme: this.out.addEventListener("mousedown", function ()
        //mais this existe dedans
        this.out.addEventListener("mousedown", ()=>
        {

            if (this.is_playButton)
            {
                //on ajoute le son
                get_time(this.key, time);//time est déclarée dans sequenceur.js
//                console.log(ici.key + ", " + time);
            } else
            {
                this.playsound = true;

                clicked_button = this;//on déclare ce bouton comme étant cliqué (pour le dragndrop
                //
                //on crée un listener pour détecter mouse up
                let mup;
                this.out.addEventListener("mouseup", mup = () =>
                {
                    //on lit le son
                    console.log(this.sound_file);
                    playSound(this.sound_file);
//            console.log("mouseup_fx");
                    this.out.removeEventListener("mouseup", mup);
                });

            }
        });


    }
//fin du constructor

    activate(t)
    {
//        this.clearTimeout(timer);

        this.bouton_on = true;

        this.out.style.transition = "0s";
        this.out.style.backgroundColor = "white";


        this.timer = window.setTimeout(() => {
            // lorsque la durée de changement atteint zero...
            this.bouton_on = false;
            // on remet le style d'origine
            this.out.style.transition = "0.4s";
            this.out.style.backgroundColor = "";
        }, t);
    }

    destroy()
    {
        var parent = document.getElementById(this.parent);
        //on efface le contenu du parent
        var rip = document.getElementsByClassName(this.out.className);
        if (rip.length > 0)
        {
            for (var i = rip.length - 1; i > -1; i--) {
                this.parent.removeChild(rip[i]);
            }
        }
    }

}