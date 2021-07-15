function toggle() {
    var type = document.getElementById('pessoa')
    var form1 = document.getElementById('escritor')
    var form2 = document.getElementById('editora')

    if (type.value == 0) {
        form2.style.maxHeight = "0px"
        form1.style.maxHeight = "0px"
    } else if (type.value == 1) {
        form2.style.maxHeight = "0px"
        form1.style.maxHeight = "100%"
    } else {
        form1.style.maxHeight = "0px"
        form2.style.maxHeight = "100%"
    }
}

function navToggle() {
    var nav = document.getElementById('menu')
    var arrowBook = document.getElementsByClassName('hide')

    nav.classList.toggle("active")

    for (let i = 0; i < arrowBook.length; i++) {
        if (arrowBook[i].style.display == "none") {
            arrowBook[i].style.display = "inline-block"
        } else {
            arrowBook[i].style.display = "none"
        }
    }
}

function subToggle() {
    var nav = document.getElementById('subnav')
    var arrow = document.getElementById('mais')
    var novo = document.getElementById('novo')
    var arrowBook = document.getElementsByClassName('hide')

    if (window.screen.width > 600) {
        nav.classList.toggle('active')
        arrow.classList.toggle('up')
        arrow.classList.toggle('down')

    } else {
        nav.classList.toggle('active')
        arrow.classList.toggle('up')
        arrow.classList.toggle('down')
        novo.classList.toggle('padbot')
    }
    for (let i = 0; i < arrowBook.length; i++) {
        if (arrowBook[i].style.display != "none") {
            arrowBook[i].style.display = "none"
        }
    }
}

function bookToggle(book, arrow) {
    var livro = document.getElementById(book)
    var arrow = document.getElementById(arrow)

    livro.classList.toggle('active')
    arrow.classList.toggle('up')
    arrow.classList.toggle('down')
    
}

function toggleTipos() {
    var tipo = document.getElementById('tipos').value
    var texto = document.getElementById('arquivos')
    var button = document.getElementById('enviar')

    if (tipo == 0) {
        texto.innerHTML = "Selecione o tipo de livro que quer produzir"
    } else if (tipo == 1){
        texto.innerHTML = "Texto em .docx ou em .pdf <br> imagens com transparência em .png <br> imagens sem transparência em .jpg"
    } else if (tipo == 2) {
        texto.innerHTML = "Texto em .docx ou em .pdf <br> imagens com transparência em .png <br> imagens sem transparência em .jpg <br> audio em .mp3"
    } else if (tipo == 3) {
        texto.innerHTML = "imagens de cada página sem falas em .jpg (apenas balões de fala) <br> falas separadas em um .docx ou em um .pdf"
    }
}