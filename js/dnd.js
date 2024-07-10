//dnd.js

//système de drag & drop pour le séquenceur



  var id_;//id du parent


  var buts_ = [];//liste des doutons dragables


    var dragSrcEl_ = null;

    var d_id_ = 'launchpad';
    //on récupère tous les boutons draggable dans le parent
    var d_buts_;

    var drag_key;


//init
window.addEventListener('load', function () {
    //on récupère les boutons affichés dans la page
    refresh_dnd_listOfButtons();
});


    Element.prototype.hasClassName = function (name) {
        return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
    };

    Element.prototype.addClassName = function (name) {
        if (!this.hasClassName(name)) {
            this.className = this.className ? [this.className, name].join(' ') : name;
        }
    };

    Element.prototype.removeClassName = function (name) {
        if (this.hasClassName(name)) {
            var c = this.className;
            this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
        }
    };


    this.handleDragStart = function (e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);

        dragSrcEl_ = this;
        drag_key = this.textContent;

        // this/e.target est le source node.
        this.addClassName('moving');
    };

    this.handleDragOver = function (e) {
        if (e.preventDefault) {
            e.preventDefault(); // Nous autorise à drop.
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    };

    this.handleDragEnter = function (e) {
        this.addClassName('over');
//        console.log('enter');
    };

    this.handleDragLeave = function (e) {
        // this/e.target est l'élément ciblé précédement.
        this.removeClassName('over');
//        console.log('leave');
    };

//dropped !
    this.handleDrop = function (e) {
        // this/e.target est l'élément ciblé actuellement.
        this.removeClassName('over');

        if (e.stopPropagation) {
            e.stopPropagation(); // empêche le navigateur de nous rediriger.
        }

//        console.log("dropped ! " + drag_key + ' -> ' + this.textContent);
        //console.log(get_button_from_letter(this.textContent, boutons_creation).sound_file +' => '+ get_button_from_letter(drag_key, soundFiles_buttons).sound_file);
//            get_button_from_letter(this.textContent, boutons_creation).sound_file = get_button_from_letter(drag_key, soundFiles_buttons).sound_file;
        key_sounds[this.textContent] = get_button_from_letter(drag_key, soundFiles_buttons).sound_file;

        return false;
    };

    this.handleDragEnd = function (e) {
        // this/e.target est le source node.
        [].forEach.call(buts_, function (col) {
            col.removeClassName('over');
            col.removeClassName('moving');
        });
    };

function refresh_dnd_listOfButtons() {
    id_ = 'librarySamples_1';//id du parent
    //
    //on récupère tous les boutons draggable dans le parent
    buts_ = document.querySelectorAll('#' + id_ + ' .draggable');
    dragSrcEl_ = null;

    d_id_ = 'launchpad';
    //on récupère tous les boutons draggable dans le parent
    d_buts_ = document.querySelectorAll('#' + d_id_ + ' .dropper');

    drag_key;
    
    [].forEach.call(buts_, function (col) {
        col.setAttribute('draggable', 'true');  // Autorise les boutons à être draggable.
        col.addEventListener('dragstart', this.handleDragStart, false);
        col.addEventListener('dragend', this.handleDragEnd, false);
    });


    [].forEach.call(d_buts_, function (col) {
        col.addEventListener('dragenter', this.handleDragEnter, false);
        col.addEventListener('dragover', this.handleDragOver, false);
        col.addEventListener('dragleave', this.handleDragLeave, false);
        col.addEventListener('drop', this.handleDrop, false);
    });
}