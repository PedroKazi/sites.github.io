const checkout = document.getElementById("checkoutscreen");

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

        switch (id) {
            case 'p1':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem"><img class="imghover" src="../img/items/img5.jpg" alt="item"><img src="../img/items/img6.jpg" alt="item"></div>`;
                break;
    
            case 'p2':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem" ><img class="imghover" src="../img/items/img1.jpg" alt="item"><img src="../img/items/img2.jpg" alt="item"></div>`;
                break;
    
            case 'p3':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem">
                <img class="imghover" src="../img/items/img7.jpg" alt="item">
                <img src="../img/items/img8.jpg" alt="item">
            </div>`;
                break;
    
            case 'p4':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem">
                <img class="imghover" src="../img/items/img11.jpg" alt="item">
                <img src="../img/items/img12.jpg" alt="item">
            </div>`;
                break;
    
            case 'p5':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem">
                <img class="imghover" src="../img/items/img3.jpg" alt="item">
                <img src="../img/items/img4.jpg" alt="item">
            </div>`;
                break;
    
            case 'p6':
                document.getElementById("checkoutscreen").innerHTML = document.getElementById("checkoutscreen").innerHTML += `<div class="wrapper COitem">
                <img class="imghover" src="../img/items/img9.jpg" alt="item">
                <img src="../img/items/img10.jpg" alt="item">
            </div>`;
                break;
        
            default:
                break;
        }
    }
}

function cart() {
    document.getElementById("alert3").style.visibility = "visible"
}

function alertUpdate(id) {
    document.getElementById(id).style.visibility = "hidden";
}