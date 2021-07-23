function loginFormShow() {
    var select = document.getElementById("login-choice");
    select.classList.toggle('active');
}

function cadFormShow() {
    var select = document.getElementById("cadastro-choice");
    select.classList.toggle('active')
}

function typeSelectLogin(value) {
    var cpf = document.getElementById("login-cpf-form")
    var cnpj = document.getElementById("login-cnpj-form")

    if (value == 0) {
        cpf.classList.remove('active')
        cnpj.classList.remove('active')
    } else if (value == 1) {
        cpf.classList.add('active')
        cnpj.classList.remove('active')
    } else {
        cpf.classList.remove('active')
        cnpj.classList.add('active')
    }
}
function typeSelectCad(value) {
    var cpf = document.getElementById("cadastro-cpf-form")
    var cnpj = document.getElementById("cadastro-cnpj-form")

    if (value == 0) {
        cpf.classList.remove('active')
        cnpj.classList.remove('active')
    } else if (value == 1) {
        cpf.classList.add('active')
        cnpj.classList.remove('active')
    } else {
        cpf.classList.remove('active')
        cnpj.classList.add('active')
    }
}

function setaVolta() {
    var login = document.getElementById("login-choice");
    var cadastro = document.getElementById("cadastro-choice");

    login.classList.remove('active')
    cadastro.classList.remove('active')
}

const section = document.querySelectorAll("section");

const options = {
    rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        if (entry.target.id == "example") {
        }
        observer.unobserve(entry.target)
    })
}, options);

section.forEach(section => {
    observer.observe(section)
})