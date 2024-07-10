//class_curseurHT.js

//exemple:
//----------
window.addEventListener('load', function () {
    mycursor1 = new CurseurHT('madiv', 0.2, 'bpm', 0, 100, 40);
});
//----------

//Définition de la Class Curseur
class CurseurHT
{
    constructor(parent_id, sensibility = 0.5, label = '', minVal = 0, maxVal = 100, startVal = 0)
    {
        this.mov;
        this.up;
        this.x_start = 0;
        this.diff_pos_x = 0;
        this.minVal = minVal;
        this.maxVal = maxVal;
        this.clickValue;
        startVal < minVal ? this.value = minVal : this.value = startVal;
        this.sensibility = sensibility;
//    this.out;
//    this.label;
        this.parent = document.getElementById(parent_id);
        this.parent.className = "box";

        this.label = document.createElement("label");
        this.parent.appendChild(this.label);
        if (label != '')
        {
            this.label.innerHTML = label + ": ";
        }
        this.label.className = "cursor_clickArea";

        this.out = document.createElement("span");
        this.parent.appendChild(this.out);
//    this.out.innerHTML = "0";
        this.out.className = "cursor_value";

        this.out.innerHTML = "" + this.value;
        
        //canvas
        
        this.parent.innerHTML += "<canvas class='myCanvas hidden' width='140' height='140'></canvas>";
//        this.canvas_circle = document.getElementById('myCanvas');
        let c = document.getElementsByClassName('hidden');
        this.canvas_circle = c[c.length - 1];
        this.ctx=this.canvas_circle.getContext("2d");

//        console.log(this.canvas_circle.width);

        this.listen();
    }

    listen()
    {
        this.label.addEventListener("mousedown", (e) => {
            this.change_value(e);
        });
        this.label.addEventListener("dblclick", (e) => {
            this.reset_value(e);
        });
        console.log('actif');
    }

    change_value(e)
    {
        console.log('click');
        this.clickValue = this.value;
        this.canvas_circle.className = "";
//        this.parent.innerHTML += "<canvas id='myCanvas' width='140' height='140'></canvas>";
//        this.canvas_circle = document.createElement('canvas');
//        this.parent.appendChild(this.canvas_circle);
//        this.canvas_circle.style.position = 'absolute';
//        this.canvas_circle.style.height = 140+'px';
//        this.canvas_circle.style.width = 140+'px';
//        this.canvas_circle.className = "myCanvas";
//        this.canvas_circle.style.left = (e.clientX-100)+'px';
//        this.canvas_circle.style.top = (e.clientY-100)+'px';
//    this.out.innerHTML = "0";

//on dessine
        this.draw_canvas_circles(e);

//        console.log('change_value actif');
        //on ajoute la class "unselect" dans le <body> de la page html
//        document.body.className = "unselect";
        //on prend la position x de la souris
        this.x_start = e.clientX;
        //on crée un listener pour savoir si la souris bouge
        window.addEventListener("mousemove", this.mov = (e) => {
            this.move(e);
        });

        //on crée un listener pour détecter mouse up
        window.addEventListener("mouseup", this.up = () => {
            this.mouseup();
        });
//        console.log("click:" + e.clientX);
    }

    move(e)
    {
//        console.log('move: '+e.clientX);
        this.diff_pos_x = Math.floor((e.clientX - this.x_start) * this.sensibility);
//        this.value = Math.floor((this.value + e.clientX) * this.sensibility);
//        console.log(ici.diff_pos_x);

        if ((this.clickValue + this.diff_pos_x) > this.maxVal)
        {
            this.value = this.maxVal;
            this.x_start = e.clientX;
            this.clickValue = this.maxVal;
//            this.out.innerHTML = this.value;
        } else if ((this.clickValue + this.diff_pos_x) < this.minVal)
        {
            this.value = this.minVal;
            this.x_start = e.clientX;
            this.clickValue = this.minVal;
//            this.out.innerHTML = this.value;
        }
        else
        {
            this.value = this.clickValue + this.diff_pos_x;
//            this.out.innerHTML = '' + (this.value);
        }
            this.out.innerHTML = '' + (this.value);
//        console.log('diff_pos_x: '+this.diff_pos_x+' value: '+this.value);
//        console.log('this.x_start: '+this.x_start+' e.clientX: '+e.clientX);
//        console.log('value: '+this.value);
        
        this.draw_canvas_circles(e);
        
    }

    mouseup()
    {
//        this.parent.removeChild(this.canvas_circle);
        
        this.canvas_circle.className = "hidden";
//        this.value += this.diff_pos_x;

        //on supprime la class "unselect" dans le body de la page HTML
//        document.body.className = '';

        //on supprime les listeners dont on a plus besoin...
        window.removeEventListener("mousemove", this.mov);
        window.removeEventListener("mouseup", this.up);
//        console.log('up');
    }

    reset_value()
    {
        console.log(this.value);
//        console.log("doubleClick");
        this.value = this.minVal;
        //on affiche...
        this.out.innerHTML = "" + (this.value);
//        console.log('reset value: '+this.value);
    }
    
    draw_canvas_circles(e)
    {
        
        this.canvas_circle.style.left = e.clientX-70+'px';
        this.canvas_circle.style.top = e.clientY-70+'px';

        
    this.ctx.clearRect(0, 0, this.canvas_circle.width, this.canvas_circle.height);
//this.ctx=this.canvas_circle.getContext("2d");
        
//this.ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
this.ctx.beginPath();
this.ctx.arc(70,70,40,0,2*Math.PI);
this.ctx.lineWidth = 20;
this.ctx.strokeStyle = '#444';
this.ctx.stroke();


        //camembert
//this.ctx.fillStyle="red";
//this.ctx.beginPath();
//this.ctx.arc(100,100,40,0,(Math.PI*2/100*(this.value)));
//this.ctx.lineTo(100,100);
//this.ctx.fill();

this.ctx.shadowColor = '#0f0';
this.ctx.shadowOffsetX = 0;
this.ctx.shadowOffsetY = 0;
this.ctx.shadowBlur = 6;
this.ctx.beginPath();
this.ctx.arc(70,70,40,0,(Math.PI*2/100*(this.value)));
this.ctx.lineWidth = 10;
this.ctx.strokeStyle = '#0f0';
this.ctx.stroke();
    }
}


