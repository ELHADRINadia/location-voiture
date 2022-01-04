var type, basePrice, fuel, tranPrice = 0,
    total;


function choix(e) {
    type = e;
    var a = document.getElementsByName('radio');
    for (var i = 0; i < a.length; i++) {
        a[i].disabled = true;
    }


    var b = document.getElementsByName('gear');
    for (var i = 0; i < b.length; i++) {
        b[i].disabled = true;
    }


    switch (type) {
        case "moto":
            document.querySelector("#essence").disabled = false;
            document.querySelector("#electrique").disabled = false;
            basePrice = 10;
            break;


        case "compact":
            document.querySelector("#manual").disabled = false;
            document.querySelector("#manual").checked = true;
            document.querySelector("#hybride").disabled = false;
            document.querySelector("#essence").disabled = false;
            document.querySelector("#diesel").disabled = false;
            basePrice = 14;
            break;


        case "citadine":
            document.querySelector("#manual").disabled = false;
            document.querySelector("#manual").checked = true;
            document.querySelector("#electrique").disabled = false;
            document.querySelector("#hybride").disabled = false;
            document.querySelector("#essence").disabled = false;
            document.querySelector("#diesel").disabled = false;
            basePrice = 12;
            break;


        case "utilitaire":
            document.querySelector("#manual").disabled = false;
            document.querySelector("#manual").checked = true;
            document.querySelector("#diesel").disabled = false;
            document.querySelector("#diesel").checked = true;
            basePrice = 16;
            break;

        case "berlin":
            document.querySelector("#automatic").disabled = false;
            document.querySelector("#automatic").checked = true;
            document.querySelector("#hybride").disabled = false;
            document.querySelector("#essence").disabled = false;
            document.querySelector("#diesel").disabled = false;
            basePrice = 20;
            tranPrice = 0.19;
            break;

        case "truck":
            document.querySelector("#automatic").disabled = false;
            document.querySelector("#automatic").checked = true;
            document.querySelector("#diesel").disabled = false;
            document.querySelector("#diesel").checked = true;
            basePrice = 250;
            tranPrice = 0.19;
            break;

        case "cm":
            document.querySelector("#manual").disabled = false;
            document.querySelector("#manual").checked = true;
            document.querySelector("#diesel").disabled = false;
            document.querySelector("#essence").disabled = false;
            basePrice = 900;
            break;

    }


}

/* fuel */
function fuelP(e) {
    fuel = e;
}

/* calcul */
function calc() {
    var days = document.querySelector("#days").value;

    total = (basePrice + (basePrice * fuel) + (basePrice * tranPrice)) * days;

    alert(total);
}