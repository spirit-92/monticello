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

window.onscroll = function() {
    let scrolled = parseInt(document.documentElement.scrollTop);
    console.log(scrolled);
    if (scrolled > 0 && scrolled < 840){
        whiteThem(about_us_check)
    }
    else if (scrolled > 860 && scrolled < 2544){
        blackThem(projectsCheck);
    }
    else if (scrolled > 2650 && scrolled< 3707 ){
        whiteThem(newsCheck)
    }
    else if (scrolled > 3710 && scrolled< 5200){
        blackThem(contactCheck);
    }
};