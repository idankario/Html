//BETTER ON FULL SCREEN 

// MAIN ELEMENT
const containerElements = [...document.querySelectorAll('.container *')]
const ringMain = containerElements.find(item =>item.classList.contains('ringMain'))
const rectangleAll = containerElements.find(item =>item.classList.contains('rectangle'))
const skewAll = containerElements.find(item =>item.classList.contains('rotate-skew'))
const symbolAll = containerElements.find(item =>item.classList.contains('symbol'))
const cpuNumber = containerElements.find(item =>item.classList.contains('cpu'))

// CICLES
const cElements = [...document.querySelectorAll('.ringMain *')]
const c1 = cElements.find(item =>item.classList.contains('c1'))
const c2 = cElements.find(item =>item.classList.contains('c2'))
const c3 = cElements.find(item =>item.classList.contains('c3'))
const c4 = cElements.find(item =>item.classList.contains('c4'))
const c5 = cElements.find(item =>item.classList.contains('c5'))
const c6 = cElements.find(item =>item.classList.contains('c6'))
const c7 = cElements.find(item =>item.classList.contains('c7'))
const c8 = cElements.find(item =>item.classList.contains('c8'))
const c9 = cElements.find(item =>item.classList.contains('c9'))
const c10 = cElements.find(item =>item.classList.contains('c10'))
const c11 = cElements.find(item =>item.classList.contains('c11'))

// BUTTONS
const button3D = document.querySelector('.interface-1')
const buttonBoost = document.querySelector('.interface-2')
const buttonInspect = document.querySelector('.interface-3')

// OTHERS
const skewElements = [...document.querySelectorAll('.skew-square *')]
const symbolElements = [...document.querySelectorAll('.symbol *')]
const cpuElement = document.querySelector('.cpu :nth-child(2)')
const containerRing = document.querySelector('.container-ring')

// REMOVE BEGIN SCALE
setTimeout(() => {
    containerRing.classList.remove('beginAnim')
}, 800);

// CHANGE NUMBER AND CPU
let numberPercent = 0
const changeSymbolCPU = () =>
{
    const symboleArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
    const randomUn = Math.floor(Math.random()*(2));

    symbolElements.forEach((element) => 
    {
        // element.innerHTML = symboleArray[randomNumber]
        element.innerHTML = randomUn

    })
    numberPercent++
    if (numberPercent>=100) {cpuElement.innerHTML = '100'} 
    else {cpuElement.innerHTML = numberPercent}
}
window.setInterval(changeSymbolCPU, 100)
changeSymbolCPU()


// BUTTONS

///BUTTONS 3D*
/*button3D.addEventListener('click', () => {
    containerRing.classList.toggle('rotate-container-ring')
    skewAll.classList.toggle('skew-square-3d')
    rectangleAll.classList.toggle('rectangle-3d')
    symbolAll.classList.toggle('symbol-3d')
    cpuNumber.classList.toggle('cpu-3d')
})*/

//BUTTONS BOOST
/*buttonBoost.addEventListener('click', () => {
    skewElements.forEach((element) => 
    {
        element.classList.toggle('skew-square-boost')
    })
    skewAll.classList.toggle('skew-square-scale')
})

//BUTTONS INSPECT
buttonInspect.addEventListener('click', () => {
    containerRing.classList.toggle('animation-container-ring')

})*/