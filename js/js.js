let shirink = document.querySelector(".nav"),
    navTogl = document.querySelector(".togl"),
    yoqbol = document.querySelector(".yoqbol"),
    mybutton = document.querySelector("#myBtn"),
    leftDes = document.querySelector(".left-design"),
    rightDes = document.querySelector(".right-design"),
    prjcard3 = document.querySelector(".prj-card3"),
    prjcard2 = document.querySelector(".prj-card2"),
    prjcard1 = document.querySelector(".prj-card1");
    // console.log(leftDes);
    // console.log(rightDes);
    // console.log(prjcard3 );
    // console.log(prjcard2 );
    // console.log(prjcard1 );


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

// let arr=[prjcard1,prjcard2,prjcard3];

// rightDes.addEventListener("click" , function () {
//    body
// })