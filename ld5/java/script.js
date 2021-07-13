function login() {
    var item = document.getElementById('login');
    var logo = document.getElementById('main-container')

    document.getElementById('cadastro').style.maxHeight = "0px"

    if (item.style.maxHeight == "0px") {
        item.style.maxHeight = "100%"
    } else {
        item.style.maxHeight = "0px"
    }
}

function cadastro() {
    var item = document.getElementById('cadastro');

    document.getElementById('login').style.maxHeight = "0px"
    
    if (item.style.maxHeight == "0px") {
        item.style.maxHeight = "100%"
    } else {
        item.style.maxHeight = "0px"
    }
}