const carrossel = document.querySelector('.carrossel')
let pressionar = false
let startX = 0

carrossel.addEventListener('mousedown', function(e) {
    pressionar = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

carrossel.addEventListener('mouseleave', function(e) {
    pressionar = false
})

window.addEventListener('mouseup', function(e) {
    pressionar = false
    carrossel.style.cursor = 'grab'
})

carrossel.addEventListener('mousemove', function(e) {
    if(!pressionar) {
        return
    }

    this.scrollLeft += startX = e.clientX 
})