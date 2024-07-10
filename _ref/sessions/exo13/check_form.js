

var send_button;
var send_ok = false;

window.addEventListener('load', function () {
    send_button = document.getElementById('send_button');
    send_button.addEventListener("click", check_data);
});

function check_data()
{

    let identifiant = document.forms['identification'].identifiant.value;
    const REGTXT = /^.{2,24}$/;
    if (identifiant && REGTXT.test(identifiant))
    {
        document.forms['identification'].elements[0].classList.remove("red");

        let mdp = document.forms['identification'].mdp.value;
        const REGTXT = /^.{2,12}$/;
        if (mdp && REGTXT.test(mdp))
        {
        document.forms['identification'].elements[0].classList.remove("red");
//            alert('go !');
//          On envoie
            document.forms['identification'].submit();
        } else
        {
        document.forms['identification'].elements[1].classList.add("red");
            alert('Mot de passe incorrect !');
        }
    } else
    {
        document.forms['identification'].elements[0].classList.add("red");
        alert('Identifiant Incorrect !');
    }


}