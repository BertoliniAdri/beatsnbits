var login_inputs;
var login_pseudo;
var login_password;

window.addEventListener("load", function () {
    login_inputs = document.getElementsByClassName("login_inputs");
    login_pseudo = login_inputs[0];
    login_password = login_inputs[1];

    // Remet l'input à son état normal quand on clique dessus après une erreur de saisie.
    for (var i = 0; i < login_inputs.length; i++) {
        login_inputs[i].addEventListener("click", function () {
            if (this.className == "error_input") {
                this.className = "";
                if (this.id == "login_pseudo") {
                    this.placeholder = "pseudo";
                } else if (this.id == "login_password") {
                    this.placeholder = "mot de passe";
                }
            }
        });
    }
});

function login_inputs_check() {
    if (!login_pseudo || login_pseudo.value == "") {
        addErrorInput(login_pseudo, "renseignez un pseudo");
    }

    if (!login_password || login_password.value == "") {
        addErrorInput(login_password, "renseignez un mot de passe");
    }
}

function login() {
    console.log('test: 1');
    login_inputs_check();
    console.log('test: 2');
    var lesDatas = "action='login'&user=" + login_pseudo.value + "&pass=" + login_password.value;
    console.log('test: 3');
    $.ajax({
        url: 'treat_login_ajax.php',
        type: 'POST',
        data: lesDatas,
        dataType: 'json',
        success: function (data) {
            console.log('test: 4');
            if (data['connexion'] == "ok") {
                console.log('test: 5');
                $("header").load('inc/header.php');
                message_display('green', 'connexion réussie');
//         $("#mysequences").load('index.php#mysequences');
                console.log('test: 6');
            }
        },
        error: function () {
            console.log('test: 7');
            message_display('red', 'une erreur est survenue');
        },
        complete: function () {
            console.log('test: 8');

        }
    });
    console.log('test: 9');
    alert('weird');
}

function logout() {
    console.log('logout:' + b_login);
    $.ajax({
        url: "logout.php",
        success: function (data) {
            $("header").load('inc/header.php');
            message_display('green', 'deconnexion réussie');
        }
    });
}
