

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

function ddd() {
  myVar = setTimeout(showPage, 1000);
};

function showPage() {
  document.getElementsByClassName("plane-con")[0].style.display = "none";
  document.getElementById("lool").style.display = "block";
  document.getElementsByClassName("contact")[0].style.display = "block";
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
    dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  var myVar;


  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  
  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };
  
  searchBtn.addEventListener("click", expand);
