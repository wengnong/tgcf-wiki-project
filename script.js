let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('a[href="#goto-char"]').addEventListener("click", function(event){
        event.preventDefault()
        var target = document.getElementById("goto-char")
        var paddingTop = -65;
        var offsetTop = target.offsetTop;
        var scrollPosition = offsetTop - paddingTop;
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const dot = document.getElementById('dot');
    const moreCharacters = document.getElementById('more-characters');

    dot.addEventListener('click', function(){
        if(moreCharacters.style.maxHeight){
            moreCharacters.style.maxHeight = null;
        }
        else{
            moreCharacters.style.maxHeight = moreCharacters.scrollHeight + "px";
        }
    });
});