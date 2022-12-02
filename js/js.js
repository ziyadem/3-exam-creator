let shirink = document.querySelector(".nav"),
    navTogl = document.querySelector(".togl"),
    yoqbol = document.querySelector(".yoqbol"),
    mybutton = document.querySelector("#myBtn");


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
navTogl.addEventListener("click" , function () {
  document.body.classList.toggle("togle");
})

// yoqbol.addEventListener("click" , function () {
//   document.body.classList.toggle("togl-yoqbolish");
// })
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}); 