//class_sound_markers.js
//enfant de la class 'Pointeur' du fichier class_pointeur.js

//permet de placer les pastilles des enregistrements de sons sur le cercle avec la lettre correspondante
class Sound_Marker
{

    constructor(letter, t, parent_id = 'cercle', class_name = 'sound_marker', color = '#37FDFC')
    {
        this.time = t;
        this.class_name = class_name;
        this.parent = document.getElementById(parent_id);//parent du bouton dans le HTML
        this.key = letter;
        this.color = color;
        
        this.out;

        this.timer;//pour pouvoir faire un clearTimeout

        this.img = document.getElementById('img_cercle');//balise <img> du cercle dans le html
        this.active;
        this.is_draw = false;//true si dans le code html

//        this.row;//la rangée correspondant aux enregistrements des touches
        //on dessine la pastille
        this.refresh_position();
        this.draw(this.time);
    }

//change l'apparence de la pastille
    activate(t = 80)
    {
        if(this.active)
        {
            clearTimeout(this.timer);
        }

        this.active = true;

        this.out.style.transition = "0s";
        this.out.style.backgroundColor = "white";


        this.timer = window.setTimeout(() => {
            // lorsque la durée de changement atteint zero...
            this.active = false;
            // on remet le style d'origine
            this.out.style.transition = "0.4s";
            this.out.style.backgroundColor = this.color;
        }, t);
    }

    //detruit la div dans le html
    destroy()
    {
        this.parent.removeChild(this.out);
        this.is_draw = false;
    }

//permet de créé un Sound marker (le dessiner)
    draw(t)
    {
        if (this.is_draw)
        {
            destroy();
        }
        //On calcule l'angle en degrés
        let angle = 360 / (duration / t) - 90;//duration est déclaré dans sequenceur.js
        //On calcule l'angle en radiants
        angle = angle * Math.PI / 180.0;

        //on calcule la position
        this.posX = this.centreX + this.rayon * Math.cos(angle);
        this.posY = this.centreY + this.rayon * Math.sin(angle);

        this.out = document.createElement("div");
        this.parent.appendChild(this.out);
        //on lui met une classe
        this.out.className = this.class_name;
        //on place le point de pivot au centre de la div
        this.out.style.transformOrigin = "50% 50%";
        this.out.innerHTML = this.key;
        this.out.style.backgroundColor = this.color;


        //on déplace la div du sound marker à la bonne position
        this.out.style.left = this.posX + "px";
        this.out.style.top = this.posY + "px";

        this.is_draw = true;
    }

    move(t = this.time)
    {
        this.refresh_position();
        //On calcule l'angle en degrés
        let angle = 360 / (duration / t) - 90;//duration est déclaré dans sequenceur.js
        //On calcule l'angle en radiants
        angle = angle * Math.PI / 180.0;

        //on calcule la position
        this.posX = this.centreX + this.rayon * Math.cos(angle);
        this.posY = this.centreY + this.rayon * Math.sin(angle);


        this.out.style.left = this.posX + "px";
        this.out.style.top = this.posY + "px";

    }

    //met à jour le centre et le rayon
    refresh_position()
    {
        this.centreX = this.img.clientWidth / 2 - 6;
        this.centreY = this.img.clientHeight / 2 - 6;
        this.rayon = this.img.clientHeight / 2 + 10;
        //on prend key_sounds pour définir la taille du rayon en fonction de l'index de la lettre
        for (let i = 1, len = Object.keys(key_sounds).length; i < len + 1; i++)//key_sound est dans sequenceur.js
        {
            if (Object.keys(key_sounds)[i-1] === this.key)
            {
                this.rayon += 14 * i;
                //console.log('rayon: '+this.rayon);
            }
        }
    }
}