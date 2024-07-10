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
    login_inputs_check();
    var lesDatas = "action='login'&user=" + login_pseudo.value + "&pass=" + login_password.value;
    $.ajax({
        url: 'treat_login_ajax.php',
        type: 'POST',
        data: lesDatas,
        dataType: 'json',
        success: function (data) {
            if (data['connexion'] == "ok") {
                $("header").load('inc/header.php');
                $('#mysequences').load('index.php' + ' #mysequences', function () {
                    display_sequence();

                    v_mysequences_open = document.getElementById('mysequencesOpen_id');
                    v_mysequences_close = document.getElementById('mysequencesClose_id');

                    if (v_mysequences_open) {
                        v_mysequences_open.addEventListener("click", mysequencesOpen_fx);
                    }

                    if (v_mysequences_close) {
                        v_mysequences_close.addEventListener("click", mysequencesClose_fx);
                    }

                    b_login = false;

                });

                message_display('green', 'Hello');
            }
        },
        error: function () {
            message_display('red', 'une erreur est survenue');
        },
        complete: function () {

        }
    });
}

function logout() {
    console.log('logout:' + b_login);
    $.ajax({
        url: "logout.php",
        success: function (data) {
            $("header").load('inc/header.php', function () {
            });


            message_display('green', 'À bientôt');
        }
    });
}
