
//creating container class for body with div and id
let container = document.createElement('div')
container.setAttribute('class','cont')
container.classList.add('container')
document.body.appendChild(container)

//heading Random Fox Images as header text
let h1 = document.createElement('h1')
h1.innerHTML = '<b>Fox Images</b>'
h1.classList.add('text-center')
document.querySelector('.cont').appendChild(h1)

let h3 = document.createElement('h4')
h3.innerHTML = 'Please Click "Get Picture" button to view Random Fox picture'
h3.classList.add('text-center')
document.querySelector('.cont').appendChild(h3)

//creating div for displaying the images within a flexbox
let div = document.createElement('div')
div.setAttribute('class','div')
div.classList.add('results')
document.querySelector('.cont').appendChild(div)

//placeholder for displaying the fetched image
let div1 = document.createElement('div')
div1.setAttribute('class','div1')
div1.classList.add('result')
let p = document.createElement('p')
p.setAttribute('class','p1')
p.innerHTML = 'Random Image Placeholder'
document.querySelector('.div').appendChild(div1)
document.querySelector('.div1').appendChild(p)

//for button to click for random images
let div3 = document.createElement('div')
div3.setAttribute('class','div3')
div3.classList.add('buttons')
document.body.appendChild(div3)


let foxBut = document.createElement('button')
foxBut.setAttribute('class','fox_button')
foxBut.innerHTML = "Get Picture"
foxBut.addEventListener('click',getRandomFox)
document.querySelector('.div3').appendChild(foxBut)


function getRandomFox(){
fetch(`https://randomfox.ca/floof/`)
.then((x)=>x.json())
.then((res)=>{
	div1.innerHTML = `<img class="img1" src="${res.image}"/>`
}).catch((error)=>{
	console.log(error);
})
}