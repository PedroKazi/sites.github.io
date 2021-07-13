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