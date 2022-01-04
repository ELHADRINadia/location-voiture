function verfier() {
    var elts = document.querySelectorAll('input');
    var name = document.getElementById('C1').value;
    var Email = document.getElementById('C2').value;
    var Tel = document.getElementById('C3').value;
    var message = document.getElementById('C4').value;
    if (elts[0].value != "" && elts[1].value != "" && elts[2].value != "" && elts[3].value != "") {
        alert("Bonjour" + name + "/n" + Email + "/n" + Tel + "/n" + message);
    } else
        alert("remplir votre champs");
}