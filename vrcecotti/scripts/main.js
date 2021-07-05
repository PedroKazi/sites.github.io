function nome() {
    var livro = document.getElementById('livro1')

    if (livro.style.maxHeight == '0px') {
        livro.style.maxHeight = '100%'
        livro.style.visibility = 'visible'
    } else {
        livro.style.maxHeight = '0px'
        livro.style.visibility = 'hidden'
    }
}
function nome2() {
    var livro = document.getElementById('livro2')

    if (livro.style.maxHeight == '0px') {
        livro.style.maxHeight = '100%'
        livro.style.visibility = 'visible'
    } else {
        livro.style.maxHeight = '0px'
        livro.style.visibility = 'hidden'
    }
}