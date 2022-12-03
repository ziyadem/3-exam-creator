let shirink = document.querySelector(".nav"),
    navTogl = document.querySelector(".togl"),
    yoqbol = document.querySelector(".yoqbol"),
    mybutton = document.querySelector("#myBtn"),
    leftDes = document.querySelector(".left-des"),
    rightDes = document.querySelector(".right-des"),
    prjcard3 = document.querySelector(".prj-card3"),
    prjcard2 = document.querySelector(".prj-card2"),
    prjcard1 = document.querySelector(".prj-card1"),
    pastStrelka = document.querySelector(".past-strelka"),
    pastStrelka1 = document.querySelector(".past-strelka1"),
    pastStrelka2 = document.querySelector(".past-strelka2"),
    pastStrelka3 = document.querySelector(".past-strelka3"),
    pastStrelka4 = document.querySelector(".past-strelka4"),
    pastStrelka5 = document.querySelector(".past-strelka5"),
    pastStrelka6 = document.querySelector(".past-strelka6"),
    pastStrelka7 = document.querySelector(".past-strelka7"),
    btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    darkBtn = document.querySelector(".drk");
    console.log(btnLeft);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    shirink.style.height="80px";
    mybutton.style.display = "block";

  } else {
    shirink.style.height="100px";
    mybutton.style.display = "none";

  }
}

darkBtn.addEventListener("click" , function(){
  document.body.classList.toggle("dark")
})
navTogl.addEventListener("click" , function () {
  document.body.classList.toggle("togle");
})

yoqbol.addEventListener("click" , function () {
  document.body.classList.toggle("togle");
})
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}); 


pastStrelka.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish")
})
pastStrelka1.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish1")
})
pastStrelka2.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish2")
})
pastStrelka3.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish3")
})
pastStrelka4.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish4")
})
pastStrelka5.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish5")
})
pastStrelka6.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish6")
})
pastStrelka7.addEventListener("click" , function () {
  document.body.classList.toggle("pastStrelkaYoqBolish7")
})
btnLeft.addEventListener("click" , function(){
  document.body.classList.toggle("first-h4")
})
btnRight.addEventListener("click" , function(){
  document.body.classList.toggle("first-h4")
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
}
leftDes.addEventListener("click" , function(){
  document.body.classList.toggle("prj-card1-card2")
})
rightDes.addEventListener("click" , function(){
  document.body.classList.toggle("prj-card1-card2-card3")
})



// let Index = 1;
// lides(Index);

// function pluslides(n) {
//   lides(Index += n);
// }

// function currentlide(n) {
//   lides(Index = n);
// }

// function lides(n) {
//   let i;
//   let des = document.querySelector("#yous");
//   console.log(des);
//   if (n > des.length) {Index = 1}    
//   if (n < 1) {Index = des.length}
//   for (i = 0; i < des.length; i++) {
//     des[i].style.display = "none";  
//   }
//   des[Index-1].style.display = "block";  
// }
