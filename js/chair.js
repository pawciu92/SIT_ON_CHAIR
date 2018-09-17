 document.addEventListener('DOMContentLoaded', function () {
//
// var chairName = document.getElementsByClassName('chairName');
// var chairClair = chairName[0];
// var chairMargarita = chairName[1];
//
// chairClair.addEventListener('mouseover', function () {
//     this.style.display = 'none';
// });
//
// chairClair.addEventListener('mouseout', function () {
//     this.style.display = 'block';
// });
//
//
// chairMargarita.addEventListener('mouseover', function () {
//     this.style.display = 'none';
// });
//
// chairMargarita.addEventListener('mouseout', function () {
//     this.style.display = 'block';
//
// });
//
//

     var prev = document.getElementById("prev");
     var next = document.getElementById("next")

     var images = document.querySelectorAll(".chair");
     var currentImage = 0;

     images[0].classList.add("visible");

     prev.addEventListener("click",function(){
         images[currentImage].classList.remove("visible");
         currentImage--;
         if(currentImage < 0 ){
             currentImage = images.length -1;
         }
         images[currentImage].classList.add("visible");
     })
     next.addEventListener("click",function(){
         images[currentImage].classList.remove("visible");
         currentImage++;
         if(currentImage == images.length){
             currentImage = 0;
         }
         images[currentImage].classList.add("visible");
     })

 });



