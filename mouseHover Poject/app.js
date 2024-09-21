document.addEventListener('mousemove', handleMove)

function handleMove(event) {
    var h1 = document.getElementsByTagName('h1')[0]
    var body = document.getElementsByTagName('body')[0]
    h1.style.fontSize = (event.clientX / 6) + 'px'
    body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientX / 2}, ${event.clientY})`
}