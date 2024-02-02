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
const bannerImage = document.querySelector(".banner-img")
const bannerText = document.querySelector(".txt")
let index = 0

//EventListener des boutons fleches gauche et droite
let updateBannerImageAndText = () => {
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image
	bannerText.innerHTML = slides[index].tagLine
}

arrowLeft.addEventListener("click", function(){
	index--
	if (index === -1) { index = slides.length - 1 }
	updateBannerImageAndText()
	dynamicBulletsPoint(index)
  })

arrowRight.addEventListener("click", function(){
	index++
	if (index === slides.length) { index = 0 }
	updateBannerImageAndText()
	dynamicBulletsPoint(index)
  })

//Bullets point
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	if (i === 0) {dot.classList.add("dot_selected")}
	dotsContainer.appendChild(dot)
  }
const dots = dotsContainer.querySelectorAll(".dot")

let dynamicBulletsPoint = (count) => {
	dots.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }
