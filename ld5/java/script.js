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

function menuToggle() {
    var menu = document.getElementById("nav-ul")
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        document.getElementById('radio__dot').style.display = 'none';
    } else {
        document.getElementById('radio__dot').style.display = 'inline-flex';
    }

    var item1 = document.getElementById('nav-item1')
    var item2 = document.getElementById('nav-item2')
    var item3 = document.getElementById('nav-item3')

    item1.classList.toggle('animate')
    item2.classList.toggle('animate')
    item3.classList.toggle('animate')
}

function meusLivrosOpt() {
    var opt1 = document.getElementById('radio-meus-livros')
    var opt2 = document.getElementById('radio-processo')

    if (opt1.checked) {
        document.getElementById('content-meus-livros').classList.toggle('active')
        document.getElementById('content-processo').classList.remove('active')
    } else {
        document.getElementById('content-meus-livros').classList.remove('active')
        document.getElementById('content-processo').classList.toggle('active')
    }
}

function instrucoesChange(value) {
    var desc = document.getElementById("instrucoes-text")
    if (value == 0) {
        desc.innerHTML = ''
    } else if (value == 1) {
        desc.innerHTML = 'Texto em docx ou PDF <br> Imagens sem transparência em .jpg <br> Imagens com transparência em .png'
    } else if (value == 2) {
        desc.innerHTML = 'Imagem em jpg de cada página sem e com as falas <br> Falas em um documento separado, podendo ser docx ou pdf'
    } else if (value == 3) {
        desc.innerHTML = 'Texto em docx ou PDF <br> Imagens sem transparência em .jpg <br> Imagens com transparência em .png <br> Audio em .mp3'
    }
}

function setaVolta() {
    var login = document.getElementById("login-choice");
    var cadastro = document.getElementById("cadastro-choice");

    login.classList.remove('active')
    cadastro.classList.remove('active')
}

function reprovar() {
    
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