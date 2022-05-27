

let features = document.getElementById('Features')
let company = document.getElementById('Company')
let companyImg = document.getElementById('arrowDown_company')
let featuresImg = document.getElementById('arrowDown_features')
console.log(featuresImg)

features.addEventListener("click", featureClick);
company.addEventListener("click", companyClick);

function featureClick() {
     featuresImg.classList.add('downarrow')

}


function companyClick() {
     
     companyImg.src = 'images/icon-arrow-up.svg'

}
   