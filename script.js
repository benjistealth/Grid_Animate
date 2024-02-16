// on scroll up, drop the header down - StackOverflow FTW !
// var position = $(window).scrollTop();

// // should start at 0

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     if ((scroll >= 5)&&(scroll > position)) {
//         
//             console.log('scrolling up');
//             // $('div').text('Scrolling Down Scripts');
//             $("#slide-header").slideUp("slow");
//          else {
//             if (scroll < position + 5) {
//                 console.log('scrolling down');
//                 //  $('div').text('Scrolling Up Scripts');
//                 // $("#slide-header").slideDown("slow");
//                 $("#slide-header").delay("slow").fadeIn();    
//                 //  $("#slide-header").css("position", "relative");
//             }
//         }
//     }

//     position = scroll;

// });

// let rootEvent = document.getElementById("rootElement");

// let burgerNav = document.getElementById(".hamburger-menu");

// burgerNav.addEventListener("click", function(e) {
//     document.querySelector('.menu').classList.add('active');
//     burgerNav.style.visibility ='hidden';
//     e.preventDefault();
//     e.stopPropagation();


// });

// closeNav = function(){
//     if (burgerNav.style.visibility === "hidden"){
//        document.querySelector('.menu').classList.remove('open');
//        burgerNav.style.visibility ='visible';
//     }
// };

// rootEvent.addEventListener("click", closeNav);
// rootEvent.addEventListener("touchend", closeNav);

function toggleMenu() {
    var menu = document.querySelector('.menu');
    
    menu.classList.toggle('active');
}
