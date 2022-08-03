// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
// ARRAY IN CUI PUSHO I LI CHE IL CICLO GENERA
const slideElements = []
// COSTANTE PER MODIFICARE LO STATO SUCCESSIVAMENTE
let currentIndex = 0
// RECUPERO LO SLIDESWRAPPERELEMENT

const slidesWrapperEl = document.querySelector('.slides-wrapper')
// LO SVUOTO
slidesWrapperEl.innerHTML = ""
// GENERARE IL CONTENUTO DELLO SLIDER
for (i = 0; i < slides.length; i++){
	const src = slides[i];
	// CREO L' LI
	const li = document.createElement('li')
	// AGGIUNGO LA CLASSE SLIDE ALL' LI
	li.classList = 'slide'
	// IMMAGINE DI PARTENZA
	if (i === currentIndex) {
		li.classList.add('active')
	}
	// CREO IMG
	const img = document.createElement ('img')
	// ASSEGNO ALLA PROPRIETà SRC DI IMG IL VALORE SRC DELL'ARRAY
	img.src = src
	// INSERISCO IMG DENTRO LI 
	li.append(img)
	console.log(li)
	// AGGIUNGO LI ALLO SLIDESWRAPPER
	slidesWrapperEl.append(li)
	// PUSHO GLI LI CREATI NELL'ARRAY DA ME CREATO
	slideElements.push(li)

}

// // PESCO LA FRECCIA AVANTI DALL'HTML
const nextElement = document.querySelector('.arrow-next');
// AGGIUNGO L'EVENT LISTENER
// let slideAttiva = slideElements[currentIndex];
nextElement.addEventListener('click', function () {
	clearInterval(autoslide)
	autoslide = setInterval(autoNext, 3000);
    // TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');

    // AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE SEGUENTE
    // BONUS 1 LOOP
    if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})


// PESCO LA FRECCIA INDIETRO DALL'HTML
const prevArrowElement = document.querySelector('.arrow-prev')
// AGGIUNGO L'EVENT LISTENER
prevArrowElement.addEventListener('click', function () {
	clearInterval(autoslide)
	autoslide = setInterval(autoNext, 3000);
// 	// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
	slideElements[currentIndex].classList.remove('active');
	// LOOP
	if (currentIndex === 0) {
        currentIndex = slideElements.length - 1;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex--
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})

let autoslide = setInterval(autoNext, 3000);

// ###### FUNZIONE AUTOSLIDER
function autoNext() {
	slideElements[currentIndex].classList.remove('active');
	if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }

}