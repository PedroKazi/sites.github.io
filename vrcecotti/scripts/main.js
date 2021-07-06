function nome() {
    var livro = document.getElementById('livro1')

    if (livro.style.maxHeight == '0px') {
        livro.style.maxHeight = '100%'
        livro.style.visibility = 'visible'
        livro.style.margin = '1% auto'
    } else {
        livro.style.maxHeight = '0px'
        livro.style.visibility = 'hidden'
        livro.style.margin = '0% auto'
    }
}
function nome2() {
    var livro = document.getElementById('livro2')

    if (livro.style.maxHeight == '0px') {
        livro.style.maxHeight = '100%'
        livro.style.visibility = 'visible'
        livro.style.margin = '1% auto'
    } else {
        livro.style.maxHeight = '0px'
        livro.style.visibility = 'hidden'
        livro.style.margin = '0% auto'
    }
}