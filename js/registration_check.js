window.addEventListener('load', function () {
    let inscription_submit = document.getElementById('inscription_submit');
    if (inscription_submit)
    {
        inscription_submit.addEventListener("click", check_fx);
    }
    var inscription_inputs = document.getElementsByClassName("inscription_inputs");//toutes les inputs

    for (var i = 0; i < inscription_inputs.length; i++) {
        // Remet l'input à son état normal quand on clique dessus après une erreur de saisie.
        inscription_inputs[i].addEventListener("click", function () {
            if (this.className == "error_input") {
                this.className = "";
                if (this.id == "inscription_pseudo") {
                    this.placeholder = "pseudo";
                } else if (this.id == "inscription_password") {
                    this.placeholder = "mot de passe";
                } else if (this.id == "inscription_password_confirmation") {
                    this.placeholder = "confirmez le mot de passe";
                } else if (this.id == "inscription_email") {
                    this.placeholder = "email";
                } else if (this.id == "inscription_email_confirmation") {
                    this.placeholder = "confirmez l'email";
                }
            }
        });

        //Vérifie en ajax à chaque touche tapé si le pseudo et le mot de passe sont déja dans la base de donnée
        if (i == 0 || i == 3) {// Si input du pseudo(0) ou du mail(3)
            var post_data;
            inscription_inputs[i].addEventListener("keyup", function (touche) {
                if (this.id == 'inscription_pseudo') {
                    post_data = "action=pseudo&pseudo=" + this.value;
                } else if (this.id == 'inscription_email') {
                    post_data = "action=mail&mail=" + this.value;
                }
                ajax_request(post_data, 'check_dispo_compte.php');
            });
        }
    }
});

//requète ajax qui envoie les données d'inscription si tout est ok
function ajax_request(donnee_post, url_file) {
    $.ajax({
        url: url_file,
        type: 'POST',
        data: donnee_post,
        dataType: 'json',
        success: function (data) {
            if (data['reponse'] == 'match') {// C'est que le pseudo ou l'email est déjà pris.
                alert("pseudo ou mail déjà utilisé");
            } else if (data['reponse'] == 'ajout_ok') {// C'est que le compte a été crée en bdd.
//        alert("ajout_ok");
            } else if (data['doublon_pseudo'] == 'doublon_pseudo' || data['doublon_mail'] == 'doublon_mail') {// C'est que le php a trouvé un double en pseudo ou mail.
                if (data['doublon_mail'] == 'doublon_mail') {
                    addErrorInput(inscription_pseudo, "ce pseudo existe déjà");
                }
                if (data['doublon_pseudo'] == 'doublon_pseudo') {
                    if (!email) {
                        var email = document.getElementById('inscription_email');
                    }
                    addErrorInput(email, "cet email est déjà utilisé");
                }
            } else if (data['reponse'] == 'data_corrupt') {// C'est que les tests js ont été bypass mais les régex php ont détecté un mauvais format pour le pseudo, mail et/ou mdp.
                alert("data_corrupt");
            }
        },
        error: function () {
            alert("FAILURE! Erreur de connexion pour l'inscription");
        },
        complete: function () {

        }
    });
}

// Intègre la classe css d'erreur et change le placeholder de l'input
function addErrorInput(input, message) {
    input.className = "error_input";
    input.value = "";
    input.placeholder = message;
}

// Vérifie toutes les valeurs entrées dans le formulaire d'inscription avant création d'un nouveau compte avec ajax_request();
function check_fx() {
//  alert('modif ok');
    var inscription_pseudo = document.getElementById('inscription_pseudo');
    var inscription_password = document.getElementById('inscription_password');
    var password_confirmation = document.getElementById('inscription_password_confirmation');
    var email = document.getElementById('inscription_email');
    var email_confirmation = document.getElementById('inscription_email_confirmation');
    var botBoot = document.getElementById('BotBootInput');// Captcha
    // Remet l'input du captcha à son état normal quand on clique dessus après une erreur de saisie
    botBoot.addEventListener("click", function () {
        if (this.className == "error_input") {
            this.className = "";
            this.placeholder = "combien font " + a + " + " + b + "?";
        }
    });

    var form_ok = 0;//Valeur incrémenté à chaque input ok du formulaire.

    const REG_IDEN = /.{1,24}/;
    const REG_PASS = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    const REG_MAIL = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (inscription_pseudo && inscription_pseudo.value != "") {
        if (REG_IDEN.test(inscription_pseudo.value)) {
            form_ok++;
        } else {
            addErrorInput(inscription_pseudo, "pseudo au mauvais format (24 caractères max)");
        }
    } else {
        addErrorInput(inscription_pseudo, "renseignez un pseudo");

    }

    if (inscription_password && inscription_password.value != "") {
        if (REG_PASS.test(inscription_password.value)) {
            if (inscription_password.value == password_confirmation.value) {
                form_ok++;
            } else {
                addErrorInput(inscription_password, "les mots de passe ne correspondent pas");
                addErrorInput(password_confirmation, "les mots de passe ne correspondent pas");
            }
        } else {
            addErrorInput(inscription_password, "mauvais format: au moins 6 caractères dont une majuscule et un chiffre");
        }
    } else {
        addErrorInput(inscription_password, "renseignez un mot de passe");
    }

    if (email && email.value != "") {
        if (REG_MAIL.test(email.value)) {
            if (email.value == email_confirmation.value) {
                form_ok++;
            } else {
                addErrorInput(email, "les mails ne correspondent pas");
                addErrorInput(email_confirmation, "les mails ne correspondent pas");
            }
        } else {
            addErrorInput(email, "mauvais format (ex: mon_mail@example.com)");
        }
    } else {
        addErrorInput(email, "renseignez un email");
    }

    if (botBoot && botBoot.value != "") {
        if (botBoot.value == c) {
            form_ok++;
        } else {
            addErrorInput(botBoot, "mauvaise réponse");
        }
    } else {
        addErrorInput(botBoot, "le champ est vide");
    }

    // Si le pseudo, le mot de passe, le mail et le captcha sont ok on envoie la requète ajax.
    if (form_ok == 4) {
        var lesDatas = "pseudo=" + inscription_pseudo.value + "&pass=" + inscription_password.value + "&mail=" + email.value;
        ajax_request(lesDatas, 'treat_registration_ajax.php');
    }
}
