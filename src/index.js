import './less/index.less'

// Your code goes here!
// Load
window.onload = function (event) {
    console.log(`Event ${event.type} has fired!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Go For Launch Boyos!'
// Copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })
// Click
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror')
    })
// Double Click
    document.body.addEventListener('dblclick', event => {
        event.target.innerHTML = ''
    })
// Key Down 
    window.addEventListener('keydown', event => {
        if (event.key == 9) {
            document.body.innerHTML = `<h1>Still Goofy Tho</h1>`
        }
    })
//Mouse Movement 
    document.body.addEventListener('mousemove', event => {
        const {clientX, clientY} = event
        console.log(`The Cool Kids Coordinates are ${clientX}, ${clientY}, its you btw. You're Cool! `) 

    })
// 2 for 1 special, Mouse Enter and Mouse Leave!!!!!
    const destinations = document.querySelectorAll('.destination')
    console.log(destinations)
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout( () => 
            { destination.style.fontWeight = 'initial'}, 200)
        })
    }
// CUT, Action, MovieDirectorLingo
    document.addEventListener('cut', () => {
        console.log('that Cut me deeper then a Stanley Kubrick Stare')
    })
// ToothPASTE
    document.addEventListener('paste', () => {
        console.log('Flouride or not, ToothPASTE es muy importante ')
    })
}