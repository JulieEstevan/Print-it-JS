//Tableau diapo
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Variables
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dotsContainer = document.querySelector(".dots")
const img = document.querySelector(".banner-img")
const texte = document.querySelector(".txt")
let i = 0

//EventListener des boutons fleches gauche et droite
arrowLeft.addEventListener("click", function(){
	i--
	img.src = "./assets/images/slideshow/" + slides[i].image
	texte.innerHTML = slides[i].tagLine
  })

arrowRight.addEventListener("click", function(){
	i++
	img.src = "./assets/images/slideshow/" + slides[i].image
	texte.innerHTML = slides[i].tagLine
  })

//Bullets point
for (let j = 0; j < slides.length; j++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dotsContainer.appendChild(dot)
  }
const dots = dotsContainer.querySelectorAll(".dot")
dots[0].classList.add("dot_selected")
