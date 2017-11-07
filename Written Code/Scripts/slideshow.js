var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function reset(){
	slideInterval = setInterval(nextSlide,5000);
}

function prevSlide(){
	slides[currentSlide].className = 'slide';
	if(currentSlide <= 0){
		currentSlide = slides.length;
	}
	currentSlide = (currentSlide-1)%slides.length;
	slides[currentSlide].className = 'slide showing';
	clearInterval(slideInterval);
	reset();
}

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
	clearInterval(slideInterval);
	reset();
}
