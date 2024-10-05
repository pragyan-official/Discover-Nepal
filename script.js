const button1 =  document.querySelector('#btn1')
const map = document.querySelector('#map')
const button2 = document.querySelector('#btn2')
const heading = document.getElementById('heading')

button1.addEventListener('click', () => {
    map.style.opacity = 1;
})

button2.addEventListener('click', () => {
    map.style.opacity = 0;
    

})

