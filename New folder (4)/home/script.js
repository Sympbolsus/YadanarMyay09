

let dark = document.getElementsByClassName("darkk")[0];
let apk = document.getElementsByClassName("apk")[0];
let moon = document.getElementsByClassName("fa-moon")[0];
let body1 = document.getElementsByTagName("body");
let bio = document.querySelectorAll(".medicine");
console.log(bio)

dark.addEventListener("click",() =>{
  document.body.classList.toggle("nightmode");
  dark.classList.toggle("fa-sun");
});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

photoarr1 = [
  "photos/images (8).jpg",
  "photos/images (10).jpg",
  "photos/images (11).jpg",
  "photos/bb2.jpg",
];

photoarr = [
  "photos/bb1.jpg",
  "photos/images (15).jpg",
  "photos/images (12).jpg",
  "photos/images (16).jpg"
];

for(let i=0;i<photoarr.length;i++){
  bio[i].addEventListener("mouseover", () =>{
  bio[i].src = photoarr[i];
});
bio[i].addEventListener("mouseleave", () =>{
  bio[i].src = photoarr1[i];
});
}




$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });