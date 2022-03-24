

let dark = document.getElementsByClassName("darkk")[0];
let apk = document.getElementsByClassName("apk")[0];
let moon = document.getElementsByClassName("fa-moon")[0];
let body1 = document.getElementsByTagName("body");
let bio = document.querySelectorAll(".medicine");
let buynow = document.querySelectorAll(".aa img");

dark.addEventListener("click",() =>{
  document.body.classList.toggle("nightmode");
  dark.classList.toggle("fa-sun");
});

myFunction();
function myFunction() {
  myVar = setTimeout(showPage, 3000);
};

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("lee").style.display = "block";
};

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
  "home/photos/images (8).jpg",
  "home/photos/images (10).jpg",
  "home/photos/images (11).jpg",
  "home/photos/bb2.jpg",
];

photoarr = [
  "home/photos/bb1.jpg",
  "home/photos/images (15).jpg",
  "home/photos/images (12).jpg",
  "home/photos/images (16).jpg",
];

for(let i=0;i<photoarr.length;i++){
  bio[i].addEventListener("mouseover", () =>{
  bio[i].src = photoarr[i];
});
bio[i].addEventListener("mouseleave", () =>{
  bio[i].src = photoarr1[i];
});

}


  $('.slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  var myVar;



