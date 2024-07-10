var userName;


window.addEventListener('load', function ()
{
    document.getElementById("ajaxButton").onclick = function () {
        userName = document.getElementById("ajaxTextbox").value;
        makeRequest('test.php', userName);
    };
});

// On ajoute un listener pour la detection des touches
window.addEventListener('keydown', function (e)
{
// on detecte si la touche w est pressee
    if (e.keyCode === 87)
    {
        //sayHelloWorld();
//        makeRequest('test.html');
        loadXMLDoc();
    }
});

//------------------------------
//------------------------------


function sayHelloWorld()
{
    var hello = "hello";
    var world = "world";
    window.location.href = "somepage.php?w1=" + hello + "&w2=" + world;
}

//------------------------------

function loadXMLDoc()
{
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
}

//-------------------------------


