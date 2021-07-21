const section = document.querySelectorAll("section");

const options = {
    rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        if (entry.target.id == "desc") {
            document.getElementById("capa").classList.toggle("animate")
            document.getElementById("desc-text").classList.toggle("animate")
        }
        if (entry.target.id == "autor") {
            document.getElementById("perfil").classList.toggle("animate")
            document.getElementById("autor-text").classList.toggle("animate")
        }
        if (entry.target.id == "links") {
            document.getElementById("kobo").classList.toggle("animate")
            document.getElementById("lc").classList.toggle("animate")
            document.getElementById("sara").classList.toggle("animate")
            document.getElementById("amazon").classList.toggle("animate")
        }
        observer.unobserve(entry.target)
    })
}, options);

section.forEach(section => {
    observer.observe(section)
})