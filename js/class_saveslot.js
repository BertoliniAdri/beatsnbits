//class_saveslot.js
//

//fonctionne avec:
//sauvegarde_sequence.js
//et
//sauvegarde_sequence.php


//a faire:
//recuperer nom de la nouvelle sequence
//recuperer id user dans session
//faire animation pour suppression de sauvegarde



class SaveSlot
{
    constructor(parent_id, sequence_id, sequence_name, sequence_duration, sequence_date, is_new_file = false)
    {
        this.parent = document.getElementById(parent_id);//parent du bouton dans le HTML

        this.sequence_id = sequence_id;//id de la sauvegarde
        //Nom de la sauvegarde
        sequence_name === '' ? this.sequence_name = 'ma sequence' : this.sequence_name = sequence_name;
        this.sequence_duration = sequence_duration;//durée de la séquence sauvegardée
        this.sequence_date = sequence_date;//date de la sauvegarde
        this.name_ok = true;//si le nom de la sequence est autorisé
//        this.seq_ok = true;//la séquence n'est pas vide
        this.save_ready = false;//true = on peut sauvegarder
        this.is_new_file = is_new_file;//saveslot vide pour créer une future sauvegarde (pas d'infos)

        this.is_active = false;//le SaveSlot n'est pas sélectionné


        this.buttons_div;
        this.save_button;
        this.load_button;
        this.delete_button;
        this.name_field;//champ de texte pour le nom de la sauvegarde
        this.bottom;//pour afficher des messages dans la création d'enregistrements
        this.top;
        this.rename_button;
        this.name_p;
        this.editing_name = false;

        //html
        this.out = document.createElement("div");//le div du bouton dans le HTML

        //on crée le saveslot dans le html
        this.parent.appendChild(this.out);
        this.out.className = "user_sequences";

        //si c'est le bouton pour ajouter une nouvelle sauvegarde
        if (this.is_new_file)
        {
            this.out.innerHTML = '+';
            this.out.className = 'add_sequences';
        } else
        {
//            this.out.innerHTML = '<div class="left"><div class="top">' + this.sequence_name + '</div><div class="bottom"><p>' + this.convert_time(this.sequence_duration) +
//                    '</p><p>' + this.sequence_date + '</p></div></div>';
            this.create_content();
        }
        //On place un écouteur pour les les clicks de souris
        this.out.addEventListener("mousedown", () =>
        {
            //On vérifie si l'élément n'est pas déjà sélectionné...
            if (!this.is_active && ((this.is_new_file && seq_not_empty) || !this.is_new_file))
            {
                this.is_active = true;
                this.activate();
            }
        });
    }
//fin du constructor

//lorsque cette entrée de sauvegarde est sélectionnée
    activate()
    {

        if (active_saveslot)
        {
            active_saveslot.deactivate();
        }
//        this.bouton_on = true;
        this.out.style.transition = "0.4s";
        this.out.style.backgroundColor = "#191567";
        this.out.style.border = "2px dashed #FF4F4F";
        active_saveslot = this;


//-------------------------------------
        //si c'est le bouton pour ajouter une nouvelle sauvegarde
        if (this.is_new_file)
        {
            this.create_content();
        }
//--------------------------------------------------

        this.create_buttons();
    }

//lorsque cette entrée de sauvegarde est désélectionnée
    deactivate()
    {
        if (this.is_new_file)
        {
            //on place le formulaire et les boutons
            this.out.innerHTML = '+';
            this.out.className = "add_sequences";
//            if(seq_not_empty)
//            {
            this.out.style.backgroundColor = "white";
//            }
//            else
//            {
//                this.out.style.backgroundColor = "grey";
//            }

        } else {
            this.out.style.transition = "0.4s";
            this.out.style.backgroundColor = "#16125a";
            this.destroy(this.out, this.buttons_div);
            this.destroy(this.top, this.rename_button);
        }
        this.out.style.border = "none";
        this.is_active = false;
    }

//pour détruire des éléments de la page (parent, enfant à détruire)
    destroy(parent, rip)
    {
        parent.removeChild(rip);
    }

    convert_time(duration)
    {
        let millisec = duration * 10;
        let milliseconds = parseInt((millisec % 1000) / 100)
                , seconds = parseInt((millisec / 1000) % 60)
                , minutes = parseInt((millisec / (1000 * 60)) % 60)
                , hours = parseInt((millisec / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

//        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        return minutes + ":" + seconds + "." + milliseconds;
    }

    disable_save()
    {
        this.save_button.style.opacity = '0';
        if (!seq_not_empty && this.is_new_file)
        {
            if (active_saveslot && active_saveslot === this)
            {
                this.deactivate();
            }
//            this.bottom.innerHTML = "<p>Votre séquence est vide</p>";
        }
    }

    ennable_save()
    {
        if (seq_not_empty && this.name_ok)
        {
            this.save_button.style.opacity = '100';
            if (this.is_new_file)
            {
                this.bottom.innerHTML = "";
            }
        } else
        {
            this.disable_save();
        }
    }

    create_content()
    {
        this.out.innerHTML = '';
        this.out.className = "user_sequences";

        let left = document.createElement("div");
        this.out.appendChild(left);
        left.className = "left";

        this.top = document.createElement("div");
        left.appendChild(this.top);
        this.top.className = "top";

        this.name_field = document.createElement("input");
        this.top.appendChild(this.name_field);
        this.name_field.type = 'text';
        this.name_field.className = "save_name_field";

        this.name_field.value = this.sequence_name;

        //si ça n'est pas le slot de nouvelle sauvegarde
        if (!this.is_new_file)
        {

            this.name_field.style.display = 'none';

            this.name_p = document.createElement("p");
            this.top.appendChild(this.name_p);
            this.name_p.innerHTML = this.sequence_name;
        }



        this.bottom = document.createElement("div");
        left.appendChild(this.bottom);
        this.bottom.className = "bottom";
        if (!this.is_new_file)
        {
            this.bottom.innerHTML = '<p>' + this.convert_time(this.sequence_duration) + '</p><p>' + this.sequence_date + '</p>';
        }

        this.timer = window.setTimeout(() => {
            if (this.is_new_file)
            {
                //on place le curseur dans le champ de texte
                this.name_field.focus();
            }
        }, 4);

//si le champ de texte est actif
        this.name_field.addEventListener("focus", () =>
        {
            disable_sound_keys = true;

//A chaque modification du champ de texte
            this.name_field.addEventListener("input", () =>
            {
                //on vérifie le texte
                var regex = new RegExp("^[a-zA-Z0-9 _.-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]*$");
                //si le texte est valide
                if (regex.test(this.name_field.value) && this.name_field.value != '')
                {
                    this.bottom.innerHTML = "";
                    if (!this.is_new_file)
                    {
                        this.bottom.innerHTML = '<p>' + this.convert_time(this.sequence_duration) + '</p><p>' + this.sequence_date + '</p>';
                    }
                    this.name_ok = true;
                    //si la séquence est vide
                    if (seq_not_empty)
                    {
                        this.ennable_save();
                    }

                }
                //si le texte n'est pas valide
                else
                {
                    if (this.name_ok)
                    {
                        this.name_ok = false;
                        this.disable_save();
                    }
                    if (!regex.test(this.name_field.value))
                    {
                        this.bottom.innerHTML = "<p>Uniquement des lettres et des chiffres</p>";
                    }
                    if (this.name_field.value === '')
                    {
                        this.bottom.innerHTML = "<p>Vous devez nommer votre séquence</p>";
                    }

                }
            });

            //lorsque l'on quitte le champ de texte
            this.name_field.addEventListener("blur", () =>
            {
                disable_sound_keys = false;
                this.name_field.value = this.sequence_name;
                this.name_field.removeEventListener("input", this);
//                console.log('byebye');
                this.name_field.removeEventListener("blur", this);
            });
        });
    }

//pour créer les boutons
    create_buttons()
    {
        //le conteneur des boutons
        this.buttons_div = document.createElement("div");
        this.out.appendChild(this.buttons_div);
        this.buttons_div.className = 'right';

//le bouton de sauvegarde
        this.save_button = document.createElement("div");//le div du bouton dans le HTML
        this.buttons_div.appendChild(this.save_button);
        var image = document.createElement("img");//le div du bouton dans le HTML
        this.save_button.appendChild(image);
        image.src = 'img/save.svg';
        this.save_button.className = 'btn';
        this.save_button.style.transition = "0";
        this.ennable_save();
        this.save_button.style.transition = "0.4s";
        //On place un évenement pour les clicks de souris
        this.save_button.addEventListener("mousedown", () =>
        {
            //si pret pour sauvegarde
            if (seq_not_empty && this.name_ok)
            {
                if (key_time.length !== 0)
                {
                    if (this.is_new_file)
                    {
                        if (this.name_field.value != '')
                        {
                            var regex = new RegExp("^[a-zA-Z0-9 _.-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]*$");
                            if (regex.test(this.name_field.value))
                            {
                                save_sequence(this.name_field.value);
                            }
                        }
                    } else
                    {
                        update_sequence(this.sequence_id);
                    }
                }
            }
        });

        //si ça n'est pas le bouton pour ajouter une nouvelle sauvegarde
        if (!this.is_new_file)
        {
//le bouton de chargement
            this.load_button = document.createElement("div");//le div du bouton dans le HTML
            this.buttons_div.appendChild(this.load_button);
            image = document.createElement("img");//le div du bouton dans le HTML
            this.load_button.appendChild(image);
            image.src = 'img/load.svg';
            this.load_button.className = 'btn';
            //On place un écouteur pour les les clicks de souris
            this.load_button.addEventListener("mousedown", () =>
            {
                load_sequence(this.sequence_id);
            });

//le bouton pour effacer une sauvegarde
            this.delete_button = document.createElement("div");//le div du bouton dans le HTML
            this.buttons_div.appendChild(this.delete_button);
            image = document.createElement("img");//le div du bouton dans le HTML
            this.delete_button.appendChild(image);
            image.src = 'img/delete.svg';
            this.delete_button.className = 'btn';
            //On place un écouteur pour les les clicks de souris
            this.delete_button.addEventListener("mousedown", () =>
            {
                console.log('saveslot del call');
                delete_sequence(this.sequence_id);
                console.log('saveslot del');

                this.destroy(this.parent, this.out);

                for (let i = 0; i < active_saveslot.length; i++)
                {
                    if (active_saveslot[i] === this)
                    {
                        console.log('saveslot found');
                        active_saveslot.splice(i, 1);
                    }
                }
            });

//le bouton pour editer le nom

            this.rename_button = document.createElement("div");
            this.top.appendChild(this.rename_button);
            this.rename_button.className = 'save_rename_button';
            this.rename_button.addEventListener("mousedown", () =>
            {

                this.editing_name = !this.editing_name;
                if (this.editing_name)
                {
                    this.name_p.style.display = 'none';
                    this.name_field.style.display = 'initial';
                } else
                {
                    this.sequence_name = this.name_field.value;
                    this.name_p.innerHTML = this.sequence_name;
                    this.name_p.style.display = 'initial';
                    this.name_field.style.display = 'none';
                }
            });
        }
    }

}