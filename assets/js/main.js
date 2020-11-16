$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

/* More button toggle */
    // function classToggle() {
    //     const navs = document.querySelectorAll('.navbar__items')
        
    //     navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
    //   }
    //   document.querySelector('.navbar__link-toggle')
    //     .addEventListener('click', classToggle);
/* Slick carousel banner */ 
$('.banner__slide').slick( {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3500,
    arrows: false,
    infinite: true,
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 6
    //         }
    //       }
    // ]
});
$('#pause').click(function() {
	$('.banner__slide').slick('slickPause');
});

/* Slick course event */ 
$('.course__event').slick( {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3500,
    arrows: false,
    infinite: true,
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 6
    //         }
    //       }
    // ]
});
$('#pause').click(function() {
	$('.course__event').slick('slickPause');
});

/* Book showcase */ 
$('.book-showcase').slick( {
    dots: true,
    slidesToShow: 4,
    centerPadding: 20,
    slidesToScroll: 4,
    autoplay: true,
    // pauseOnDotsHover:false,
    autoplaySpeed:3500,
    arrows: false,
});

/* Reader emotion */ 
$(document).ready(function(){
    $('.readers-img').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:3500,
        dots: true,
        arrows: false,
        // arrows: true,
        infinite: true
    });
});

//     // add btn pause play
//     var slickListt = document.getElementsByClassName('slick-dots');
//     var btnReadersPausePlay = document.createElement('button');
//     var iconPause = document.createElement('i');
//     iconPause.classList.add('fas');
//     iconPause.classList.add('fa-pause');
//     btnReadersPausePlay.classList.add("btn-pause-play");
//     btnReadersPausePlay.id = 'btn-pause-play';
//     btnReadersPausePlay.appendChild(iconPause);
//     slickListt[0].appendChild(btnReadersPausePlay);

//     // event click btn pause/play
//     btnReadersPausePlay.onclick  = ()=>{
//         var child = btnReadersPausePlay.childNodes;
//         var nameClassChild = child[0].classList[1];
//         if(nameClassChild==="fa-pause")
//         {
//             btnReadersPausePlay.innerHTML = '<i class="fas fa-play"></i>';
//             $('.readers-img').slick('slickPause');
//         }
//         else{
//             btnReadersPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
//             $('.readers-img').slick('slickPlay');
//         }
//     }
// });
