
//Fonctionnalité 1
var footer = document.getElementsByTagName('footer')[0]
console.log(footer)
footer.addEventListener('click', say);
var countClick = 0;
function say(){
    console.log('clique ' + countClick)
    countClick += 1;
}

//Fonctionnalité 2
var toggler = document.getElementsByClassName('navbar-toggler')[0];
console.log(toggler)
toggler.addEventListener('click', deployer);
function deployer(e){
    let classChanger = document.getElementById('navbarHeader')
    classChanger.classList.toggle("collapse"); //toggle le burger
}

//Fonctionnalité 3
var card = document.getElementsByClassName('card mb-4 box-shadow')[0];
console.log(card)
var editBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]
editBtn.addEventListener('click', changeColor);
function changeColor(e){card.style.color ="red"}

//Fonctionnalité 4
var card2 = document.getElementsByClassName('card mb-4 box-shadow')[1];
console.log(card2)
var editBtn2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1]
editBtn2.addEventListener('click', changeColor2);
var defaultColor = card2.style.color;
function changeColor2(e){
    if(defaultColor == card2.style.color){
        card2.style.color = "green";
    }else{
        card2.style.color = defaultColor;
    }
}

//fonctionnalité 5
var bootStrap = document.getElementsByTagName('link')[0];
var savedCdn = bootStrap.href
console.log(savedCdn)
var header = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
header.addEventListener('dblclick', boom);
function boom(e){
    console.log("in double click function")
    if(bootStrap.href != savedCdn){
        console.log(bootStrap.href)
        bootStrap.href = savedCdn;
    }else if(bootStrap.href == savedCdn){
        console.log(bootStrap.href)
        bootStrap.href = "";
    }
}