let companyBtn = document.getElementById('companyBtn');
let companyContent = document.getElementById('container_comp_cont');
let companyImg = document.getElementById('companyImg');

companyBtn.addEventListener('click' , companyClick)

function companyClick (){
    if ( companyContent.classList.contains('revealedContent') == false ){
        companyContent.style.display = 'block';
        companyContent.classList.add('revealedContent');
        companyImg.src = 'images/icon-arrow-down.svg'

    } else if (companyContent.classList.contains('revealedContent') == true)
    {
        companyContent.style.display = 'none';
        companyContent.classList.remove('revealedContent');
        companyImg.src = 'images/icon-arrow-up.svg'
    }
}

let featurebtn = document.getElementById('featurebtn')
let featureContent = document.getElementById('container_feat_cont');
let featureImg = document.getElementById('featureImg')

featurebtn.addEventListener('click', featureClick)

function featureClick(){
    if ( featureContent.classList.contains('revealedContent') == false ){
        featureContent.style.display = 'block';
        featureContent.classList.add('revealedContent');
        featureImg.src = 'images/icon-arrow-down.svg'
    }
     else if (featureContent.classList.contains('revealedContent') == true)
    {
        featureContent.style.display = 'none';
        featureContent.classList.remove('revealedContent');
        featureImg.src = 'images/icon-arrow-up.svg'
    }
}

let hambtn = document.getElementById('hamburger');
let menu = document.getElementById("cont-menu")
let menuClose = document.getElementById('closeMenu')

hambtn.addEventListener('click' , expandMenu)


function expandMenu(){
    if (menu.classList.contains('active') == false){
        menu.style.display = 'block';
        menu.classList.add('active');
        hambtn.style.display = 'none';
        menuClose.style.display = 'block';
    }
}


menuClose.addEventListener('click', closemenu)

function closemenu(){
    menuClose.style.display = 'none';
    hambtn.style.display = 'block';
    menu.classList.remove('active');
    menu.style.display = 'none';
}