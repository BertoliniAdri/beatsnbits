//class_curseurHT.js

//exemple:
//----------
window.addEventListener('load', function () {
    mycursor1 = new CurseurHT('cercle', 0.4);
});
//----------

//Définition de la Class Curseur
class CurseurHT
{
    constructor(parent_id, sensibility = 0.5)
    {
        this.mov;
        this.up;
        this.x_start = 0;
        this.diff_pos_x = 0;
        this.clickValue;
        this.sensibility = sensibility;

        this.parent = document.getElementById(parent_id);
        this.parent.className = "cursor_clickArea";

        display_bpm();

        this.listen();
    }

    listen()
    {

        this.parent.addEventListener("mousedown", (e) => {
            if (e.which === 1)
            {
                this.change_value(e);
            }
        });
    }

    change_value(e)
    {
        this.clickValue = bpm;
        this.canvas_circle = document.createElement('canvas');
        this.parent.appendChild(this.canvas_circle);
        this.canvas_circle.style.position = 'fixed';
        this.canvas_circle.style.zIndex = 60000;
        //!!!!!!  il faut déclarer la taille de la fenêtre canvas de cette façon
        this.canvas_circle.width = 140;
        this.canvas_circle.height = 140;
        this.canvas_circle.className = "myCanvas";


        this.ctx = this.canvas_circle.getContext("2d");

//on dessine
        this.draw_canvas_circles(e);


        this.x_start = e.clientX;

        //on crée un listener pour savoir si la souris bouge
        window.addEventListener("mousemove", this.mov = (e) => {
            this.move(e);
        });

        //on crée un listener pour détecter mouse up
        window.addEventListener("mouseup", this.up = () => {
            this.mouseup();
        });

        this.canvas_circle.bind('contextmenu', (e) => {
            return false;
        });
    }

    move(e)
    {
//        console.log('move: '+e.clientX);
        this.diff_pos_x = Math.floor((e.clientX - this.x_start) * this.sensibility);
        
        //augmente les bpm
        if ((this.clickValue + this.diff_pos_x) > bpm_max_value)
        {
            bpm = bpm_max_value;
            this.x_start = e.clientX;
            this.clickValue = bpm_max_value;
        } else if ((this.clickValue + this.diff_pos_x) < bpm_min_value)
        {
            bpm = bpm_min_value;
            this.x_start = e.clientX;
            this.clickValue = bpm_min_value;
        } else
        {
            bpm = this.clickValue + this.diff_pos_x;
        }
        
            duration = get_duration();
            mesure_duration = duration / mesures;
            beat_duration = duration / 4;

        display_bpm();

        this.draw_canvas_circles(e);


    }

    mouseup()
    {
        this.parent.removeChild(this.canvas_circle);

        //on supprime les listeners dont on a plus besoin...
        window.removeEventListener("mousemove", this.mov);
        window.removeEventListener("mouseup", this.up);
    }

    reset_value()
    {
        console.log(bpm);
        bpm = bpm_min_value;
        //on affiche...
//        this.out.innerHTML = "" + (bpm);
//        console.log('reset value: '+bpm);
    }

    draw_canvas_circles(e)
    {
        this.canvas_circle.style.left = e.clientX - 70 + 'px';
        this.canvas_circle.style.top = e.clientY - 70 + 'px';


        this.ctx.clearRect(0, 0, this.canvas_circle.width, this.canvas_circle.height);


        this.ctx.beginPath();
        this.ctx.arc(70, 70, 40, 0, 2 * Math.PI);
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = '#191567';
        this.ctx.stroke();
        this.ctx.closePath();
        //on sauvegarde
        this.ctx.save();
        this.ctx.beginPath();

        this.ctx.shadowColor = '#37FDFC';
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowBlur = 6;

        this.ctx.arc(70, 70, 40, 0, (2 * Math.PI / 100 * (((bpm - bpm_min_value) * 100) / (bpm_max_value - bpm_min_value))));
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = '#37FDFC';
        this.ctx.stroke();

        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.font = "20px Abel";
        this.ctx.fillStyle = 'white';
        if (bpm < 10)
        {
            this.ctx.fillText(bpm, 63 + 10, 28);
        } else if (bpm < 100)
        {
            this.ctx.fillText(bpm, 57, 28);
        } else
        {
            this.ctx.fillText(bpm, 54, 28);
        }
        this.ctx.closePath();
        //on restore avant l'ombre
        this.ctx.restore();



    }
}


