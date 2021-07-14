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

    nav.classList.toggle("active")
}

function subToggle() {
    var nav = document.getElementById('subnav')
    var arrow = document.getElementById('mais')
    var novo = document.getElementById('novo')

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
}

function bookToggle(book) {
    var livro = document.getElementById(book)

    livro.classList.toggle('active')
}