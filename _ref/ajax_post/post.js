//envoyer des données au php pour sauvegarder la séquence...
//


//liste des catégories de sons
var sound_categories = [
    "Clap",
    "Kick"];
//référence des fichiers son et la référence à leur catégorie
var soundFiles = [
    [new Audio("../../library/sounds/sound1.mp3"), sound_categories[0]],
    [new Audio("../../library/sounds/sound2.mp3"), sound_categories[1]],
    [new Audio("../../library/sounds/sound3.mp3"), sound_categories[0]],
    [new Audio("../../library/sounds/sound4.mp3"), sound_categories[1]],
    [new Audio("../../library/sounds/sound5.mp3"), sound_categories[0]]];// Liste des objets audios (référence des fichiers son)


//associassion Touche/Son
// Object tab indéxée Touche/Son
//Pour avoir taille: Object.keys(key_sounds).length
var key_sounds = {
    "W": soundFiles[0][0],
    "X": soundFiles[1][0],
    "C": soundFiles[2][0],
    "V": soundFiles[3][0],
    "B": soundFiles[4][0]};
var key_time = [];

//----
var hr = false;
var button;
var seq_duration = 200;

window.addEventListener('load', function ()
{
    for (let i = 0; i < 12; i++)
    {
        key_time.push([(i * 10), 'W']);
        //console.log(key_time[i][0] + '-' + key_time[i][1]);
    }

//    console.log(key_time.length);

    button = document.getElementById('button');
    button.addEventListener('click', post_save);

    //------------- TEST
//    console.log(seq_timeref);
//    let explode = seq_timeref.split(';');
//    console.log('explode: ' + explode.length);
//    console.log(explode[1]);
    //-------------
});


function post_save()
{
// On crée notre Objet XMLHttpRequest
    hr = new XMLHttpRequest();//ok

//    var url = "bob.php";
    var url = "post.php";
    var time = '';
    var seq_timeref='';

    //on concatène les timestamps
//on trie l'array par lettres
    var j = 0;
    var k = 1;
    var n = 0;
    

    for (var h = 0; h < Object.keys(key_sounds).length; h++) {
        for (var i = 0; i < key_time.length; i++)
        {
            if (key_time[i][1] == Object.keys(key_sounds)[h] && j != 0)
            {
                seq_timeref += ',' + key_time[i][0];
                n++;
            } else if (key_time[i][1] == Object.keys(key_sounds)[h] && j === 0)
            {
                console.log('kt: ' + key_time[i][0]);
                seq_timeref += key_time[i][0];
                j++;
                n++;
            }
        }
        if (k < Object.keys(key_sounds).length)
        {
            seq_timeref += ';';
        }
        j = 0;
        k++;
    }
    console.log(seq_timeref);


    var vars = "seq_timeref=" + seq_timeref + " & seq_duration=" + seq_duration;
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function () {
        if (hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            document.getElementById("status").innerHTML = return_data;
        }
    }

// Envoie les données à PHP... et attend une réponse pour mettre à jours le status div
    hr.send(vars); // Execute la requette
    document.getElementById("status").innerHTML = "en cours...";
    
    //appelle la fonction pour afficher les sequences
    get_saved_sequences();
}

function get_saved_sequences()
{
    var hr = new XMLHttpRequest();

// Lorsqu'un réponse est émise par le serveur
    hr.onreadystatechange = function () {
        if (hr.status == 200 && hr.readyState == 4) {
            document.getElementById('status').innerHTML = hr.responseText;

            // hr.responseText contient exactement ce que la page PHP renvoi
        }
    };

    hr.open('GET', 'get2.php?id=1');
    hr.send('');
}

function edit_saved_sequence()
{
    var hr = new XMLHttpRequest();

    hr.open('GET', 'edit.php?seq_name=sequence2&seq_duration=200');
    hr.send('');
}
