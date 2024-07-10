//class_AudioCategory_menu.js

//intitulés du menu de catégories de sons



class AudioCategory
{
    constructor(parent, category)
    {
        this.parent = parent;//parent du bouton dans le HTML
        this.category = category;//Label du bouton
        this.is_active = false;


        this.out = document.createElement("il");//le div du bouton dans le HTML


        this.parent.appendChild(this.out);

        this.out.className = 'categorie';
        this.out.innerHTML = this.category;

        //On place un écouteur pour les les clicks de souris
        this.out.addEventListener("mousedown", () =>
        {
            this.activate();
        });


    }
//fin du constructor

    activate()
    {
        if (!this.is_active)
        {
            this.out.className = 'categorie categorie_actif';

            //on affiche les boutons
            create_audioCategories_buttons(this.category);//dans sequenceur
            if(active_AudioCategory !== this)
            {
                active_AudioCategory.desactivate();
            }
            active_AudioCategory = this;
            this.is_active = true;
        }
    }

    desactivate()
    {
        this.out.className = 'categorie';
        this.is_active = false;
    }

}