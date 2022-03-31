

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
ddd();
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


 
  


 let menuu = document.getElementsByClassName("menu")[0];

 menuu.addEventListener("click", () => {

  document.getElementsByClassName("header")[0].classList.toggle("off");
 })


 $(".casd").click(function () {
   $(".p-9").slideToggle(1000);
 })

 window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
$(".counter-up").counterUp({
  delay: 10,
  time:1000
});

function go(url) {
  location.href = `${url}`;
}

let dataArr = ['apr 12','apr 14','apr 18','api 21','api 28','api 4','api 2','api 25','api 26','api 9','api 29'];
let orderCountArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewrArr = [13,12,15,14,20,25,19,22,39,27,10];

let ctx = document.getElementById('oo').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataArr,
        datasets: [{
            
            label: 'Order Count',
            data: orderCountArr,
            backgroundColor: [
                'rgba(0, 153, 255, 0.2)',
           
            ],
            borderColor: [
                '#17a2b8',
               
            ],
            borderWidth: 1,
            tension:0
        },
        {
            
          label: 'Viewer Count',
          data: viewrArr,
          backgroundColor: [
              'rgba(255, 102, 0, 0.15) ',
         
          ],
          borderColor: [
              'rgb(255, 102, 0) ',
             
          ],
          borderWidth: 1,
          tension:0
      }]
    },
    options: {
        scales: {
            y: {
                display:false,
                beginAtZero: true
            }
        },
        legend:{

          display: true,
          position: 'top',
          labels:{
            fontColor: '#333',
          }

        }
    }
});

let Places = ['Kayah','Loikaw','Mandalay','Yangon','Shan'];
let orderPlaces =[5,15,4,9,7];

let ctx2 = document.getElementById('ollo').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: Places,
        datasets: [{
            
            label: 'Order Count',
            data: orderPlaces,
            backgroundColor: [
              
           
            ],
            borderColor: [
                '#17a2b8',
                'rgba(54, 162, 235, 1)',
                '#0dcaf0',
                'rgba(75, 192, 192, 1)',
                '#dc3545)',
                '#198754'
               
            ],
            borderWidth: 1,
            tension:0
        },
        {
            
          label: 'Viewer Count',
          data: orderPlaces,
          backgroundColor: [
              'rgba(255, 102, 0, 0.15) ',
         
          ],
          borderColor: [
              'rgb(255, 102, 0) ',
             
          ],
          borderWidth: 1,
          tension:0
      }]
    },
    options: {
        scales: {
            y: {
                display:false,
                beginAtZero: true
            }
        },
        legend:{

          display: true,
          position: 'top',
          labels:{
            fontColor: '#333',
            
          }

        }
    }
});

$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();




