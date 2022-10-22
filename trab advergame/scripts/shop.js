var coins = 500;

function load(params) {
    document.getElementById('amount').innerHTML = coins;
}

function checkValue(id) {
    var price = document.getElementById(id).innerText;
    if (price > coins) {
        document.getElementById("alert1").style.visibility = "visible";
    } else {
        document.getElementById("alert2").style.visibility = "visible";
        coins = coins - price;
        load();
    }
}

function alertUpdate(id) {
    document.getElementById(id).style.visibility = "hidden";
}