let navLiText = document.querySelectorAll('.navigation-ul__li>a'),
    div = document.querySelectorAll('.navigation-ul__li>div'),
    check = document.querySelectorAll('.check'),
    projectsCheck = document.querySelector('.projects-check'),
    about_us_check = document.querySelector('.about_us-check'),
    brandsUl__li = document.querySelectorAll('.brands-ul__li>.brands-b'),
    logoSvg = document.querySelector('.logo-svg'),
    newsCheck = document.querySelector('.news-check'),
    contactCheck = document.querySelector('.contact-check');

function whiteThem(classStyle){
    logoSvg.style.stroke ='white';
    div.forEach(div =>{
        div.style.background = 'transparent'
    });
    brandsUl__li.forEach(item =>{
        item.style.color = '#ffffff';
        item.style.border= '1px solid #ffffff';
    });
    navLiText.forEach(item =>{
        item.style.color = 'white'
    });
    check.forEach(item =>{
        item.style.border = 'solid 1px white';
        item.classList.remove('active-check');
        item.style.backgroundColor = 'none'
    });
    classStyle.style.backgroundColor = 'white'
}

function blackThem(classStyle){
    logoSvg.style.stroke ='black';
    div.forEach(div =>{
        div.style.background = 'transparent'
    });
    brandsUl__li.forEach(item =>{
        item.style.color = 'black';
        item.style.border= '1px solid black';
    });
    navLiText.forEach(item =>{
        item.style.color = 'black'
    });
    check.forEach(item =>{
        item.style.border = 'solid 1px black';
        item.classList.remove('active-check');
        item.style.backgroundColor = 'none'
    });
    classStyle.style.backgroundColor = 'black';
}
let createHTML={
    createteSection2:function () {
        $.ajax({
    url: "./html-section/project_2.html",
    cache: false
        }).done(function( html ) {
        $( "#project" ).append( html );
    });
        createHTML.createteSection2 = null;
        return 1
    },
    createteNews:function () {
        $.ajax({
            url: "./html-section/news.html",
            cache: false
        }).done(function(html) {
                $( "#project" ).after(html);
                $('.js-slide-news').slick({
                    dots: true,
                    dotsClass:'slick-dots2',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding:'30px',
                    variableWidth: true
                });
            });
        createHTML.createteNews = null;
        return 1
    },
    createteGallery:function () {
        $.ajax({
            url: "./html-section/gallery.html",
            cache: false
        }).done(function(html) {
                $( "#news" ).after(html);
                });
        createHTML.createteGallery = null;
        return 1
    },
    createMap_Form:function () {
        $.ajax({
            url: "./html-section/map_form.html",
            cache: false
        }).done(function(html) {
            $( "#gallery" ).after(html);
        });
        createHTML.createMap_Form = null;
        return 1
    },
};

window.onscroll = function() {
    let scrolled = parseInt(document.documentElement.scrollTop);
    // console.log(scrolled);
    if (scrolled >= 0 && scrolled < 740){
        whiteThem(about_us_check);
        if (typeof createHTML.createteSection2 === 'function') {
            createHTML.createteSection2()
        }
    }
    else if (scrolled > 642 && scrolled < 2544){
        blackThem(projectsCheck);
        if (typeof createHTML.createteNews === 'function') {
            createHTML.createteNews()
        }
    }
    else if (scrolled > 2650 && scrolled< 3707 ){
        whiteThem(newsCheck);
        if (typeof createHTML.createteGallery === 'function') {
            createHTML.createteGallery()
        }
    }
    else if (scrolled > 3710 && scrolled< 5200){
        blackThem(contactCheck);
        if (typeof createHTML.createMap_Form === 'function') {
            createHTML.createMap_Form()
        }
    }

};
//get top after reload document
if (location.reload){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}