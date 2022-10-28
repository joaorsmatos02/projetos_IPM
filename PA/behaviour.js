function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Random Recipe
var nomeReceitas = ["Fettuccine<br>&ensp; Alfredo", "Pizza<br>&ensp; Pepperoni", "Salada<br>&ensp; Sortida", "Sopa<br>&ensp; de vegetais <br>&ensp;e macarrão", "Bolo<br>&ensp; de Cereja"];

var randomNum1 = randomIntFromInterval(0, 4);
var randomNum2;
do {
    randomNum2 = randomIntFromInterval(0, 4);
} while (randomNum2 == randomNum1);


// Carregar receitas
switch (randomNum1) {   
    case 0:
        document.getElementById('recipeName1').innerHTML = nomeReceitas[0];
        document.getElementById('recipe1').src = "pasta.png";
        document.getElementById('prepTime1').innerHTML = " 20 minutos";
        break;
    case 1:
        document.getElementById('recipeName1').innerHTML = nomeReceitas[1];
        document.getElementById('recipe1').src = "pizza.png";
        document.getElementById('prepTime1').innerHTML = " 25 minutos";
        break;
    case 2:
        document.getElementById('recipeName1').innerHTML = nomeReceitas[2];
        document.getElementById('recipe1').src = "salad.png";
        document.getElementById('prepTime1').innerHTML = " 10 minutos";
        break;
    case 3:
        document.getElementById('recipeName1').innerHTML = nomeReceitas[3];
        document.getElementById('recipe1').src = "soup.png";
        document.getElementById('prepTime1').innerHTML = " 30 minutos";
        break;
    default:
        document.getElementById('recipeName1').innerHTML = nomeReceitas[4];
        document.getElementById('recipe1').src = "cake.png";
        document.getElementById('prepTime1').innerHTML = " 20 minutos";
        break;
}

switch (randomNum2) {   
    case 0:
        document.getElementById('recipeName2').innerHTML = nomeReceitas[0];
        document.getElementById('recipe2').src = "pasta.png";
        document.getElementById('prepTime2').innerHTML = "20 minutos";
        break;
    case 1:
        document.getElementById('recipeName2').innerHTML = nomeReceitas[1];
        document.getElementById('recipe2').src = "pizza.png";
        document.getElementById('prepTime2').innerHTML = "25 minutos";
        break;
    case 2:
        document.getElementById('recipeName2').innerHTML = nomeReceitas[2];
        document.getElementById('recipe2').src = "salad.png";
        document.getElementById('prepTime2').innerHTML = "10 minutos";
        break;
    case 3:
        document.getElementById('recipeName2').innerHTML = nomeReceitas[3];
        document.getElementById('recipe2').src = "soup.png";
        document.getElementById('prepTime2').innerHTML = "30 minutos";
        break;
    default:
        document.getElementById('recipeName2').innerHTML = nomeReceitas[4];
        document.getElementById('recipe2').src = "cake.png";
        document.getElementById('prepTime2').innerHTML = "20 minutos";
        break;
}


// Random Products
var nomeProdutos = ["Bife da Vazia", "Queijo Parmesão", "Pimento", "Robalo", "Alface", "Cenoura", "Manteiga"];
var randomNumProd1 = randomIntFromInterval(0, 6);
var randomNumProd2;
var randomNumProd3;
do {
    randomNumProd2 = randomIntFromInterval(0, 6);
    randomNumProd3 = randomIntFromInterval(0, 6);
} while (randomNumProd1 == randomNumProd2 || randomNumProd2 == randomNumProd3 || randomNumProd1 == randomNumProd3);

switch (randomNumProd1) {   
    case 0:
        document.getElementById('prod1Img').src = "beef.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[0];
        document.getElementById('qtdProd1').innerHTML = "2kg";
        break;

    case 1:
        document.getElementById('prod1Img').src = "cheese.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[1];
        document.getElementById('qtdProd1').innerHTML = "300g";
        break;
    
    case 2:
        document.getElementById('prod1Img').src = "pimento.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[2];
        document.getElementById('qtdProd1').innerHTML = "150g";
        break;

    case 3:
        document.getElementById('prod1Img').src = "robalo.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[3];
        document.getElementById('qtdProd1').innerHTML = "1kg";
        break;

    case 4:
        document.getElementById('prod1Img').src = "alface.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[4];
        document.getElementById('qtdProd1').innerHTML = "200g";
        break;

    case 5:
        document.getElementById('prod1Img').src = "cenoura.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[5];
        document.getElementById('qtdProd1').innerHTML = "300g";
        break;
    
    default:
        document.getElementById('prod1Img').src = "manteiga.png";
        document.getElementById('prod1').innerHTML = nomeProdutos[6];
        document.getElementById('qtdProd1').innerHTML = "1kg";
        break;
}

switch (randomNumProd2) {   
    case 0:
        document.getElementById('prod2Img').src = "beef.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[0];
        document.getElementById('qtdProd2').innerHTML = "2kg";
        break;

    case 1:
        document.getElementById('prod2Img').src = "cheese.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[1];
        document.getElementById('qtdProd2').innerHTML = "300g";
        break;
    
    case 2:
        document.getElementById('prod2Img').src = "pimento.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[2];
        document.getElementById('qtdProd2').innerHTML = "150g";
        break;

    case 3:
        document.getElementById('prod2Img').src = "robalo.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[3];
        document.getElementById('qtdProd2').innerHTML = "1kg";
        break;

    case 4:
        document.getElementById('prod2Img').src = "alface.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[4];
        document.getElementById('qtdProd2').innerHTML = "200g";
        break;

    case 5:
        document.getElementById('prod2Img').src = "cenoura.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[5];
        document.getElementById('qtdProd2').innerHTML = "300g";
        break;
    
    default:
        document.getElementById('prod2Img').src = "manteiga.png";
        document.getElementById('prod2').innerHTML = nomeProdutos[6];
        document.getElementById('qtdProd2').innerHTML = "1kg";
        break;
}

switch (randomNumProd3) {   
    case 0:
        document.getElementById('prod3Img').src = "beef.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[0];
        document.getElementById('qtdProd3').innerHTML = "2kg";
        break;

    case 1:
        document.getElementById('prod3Img').src = "cheese.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[1];
        document.getElementById('qtdProd3').innerHTML = "300g";
        break;
    
    case 2:
        document.getElementById('prod3Img').src = "pimento.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[2];
        document.getElementById('qtdProd3').innerHTML = "150g";
        break;

    case 3:
        document.getElementById('prod3Img').src = "robalo.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[3];
        document.getElementById('qtdProd3').innerHTML = "1kg";
        break;

    case 4:
        document.getElementById('prod3Img').src = "alface.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[4];
        document.getElementById('qtdProd3').innerHTML = "200g";
        break;

    case 5:
        document.getElementById('prod3Img').src = "cenoura.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[5];
        document.getElementById('qtdProd3').innerHTML = "300g";
        break;
    
    default:
        document.getElementById('prod3Img').src = "manteiga.png";
        document.getElementById('prod3').innerHTML = nomeProdutos[6];
        document.getElementById('qtdProd3').innerHTML = "1kg";
        break;
}

var nome = document.getElementById("editNameLabel");
if(localStorage.getItem("name") != null){
    nome.innerHTML = localStorage.getItem("name");
}



function liveCamShowUp() {
    document.getElementById("grid-container").style.opacity = "0.3";
    document.getElementById("liveCam").style.display = "block";
    document.getElementById("grid-container").style.pointerEvents = "none";
}

function closeLiveCam() {
    document.getElementById("liveCam").style.display = "none";
    document.getElementById("grid-container").style.pointerEvents = "auto";
    document.getElementById("grid-container").style.opacity = "1.0";
}

function editNameMenu() {
    document.getElementById("editNameLabel").style.opacity = "0.0";
    document.getElementById("editName").style.display = "block";
    document.getElementById("grid-container").style.pointerEvents = "none";

}

function editName() {
    var x = document.getElementById("editNameLabel");
    x.innerHTML = document.getElementById("userName").value;
    localStorage.setItem("name", x.innerHTML);
    document.getElementById("editNameLabel").style.opacity = "1.0";
    document.getElementById("editName").style.display = "none";
    document.getElementById("grid-container").style.pointerEvents = "auto";
}

function cancelEditName() {
    document.getElementById("editName").style.display = "none";
    document.getElementById("grid-container").style.pointerEvents = "auto";
    document.getElementById("editNameLabel").style.opacity = "1.0";
}



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

// dar load da ultima temperatura
var lastTemp = localStorage.getItem("temp");
if (lastTemp != null) { // verificar se existe alguma guardada anteriormente
    document.getElementById('temperatureNumber').value = lastTemp;
}

function increment() {
    document.getElementById('temperatureNumber').stepUp();
    saveTemperature(document.getElementById('temperatureNumber').value);
 }
 function decrement() {
    document.getElementById('temperatureNumber').stepDown();
    saveTemperature(document.getElementById('temperatureNumber').value);
 }

// funcao que guarda a temperatura atual no localstorage
function saveTemperature(temp) {
    localStorage.setItem("temp", temp);
}

//------------------------

function mozzarellaAlert(){
    document.getElementById("nomeReceita").required = true;
    var hasMozzarella = false;
    var allInputText = document.querySelectorAll("input");
    for (var i = 1; i < allInputText.length; i++) {
        if ((allInputText[i].value == "mozzarella" || allInputText[i].value == "Mozzarella") && document.getElementById("nomeReceita").value != "") {
            document.getElementById("grid-container-addRecepies").style.opacity = "0.4";
            document.getElementById("alert").style.display = "block";
            document.getElementById("grid-container-addRecepies").style.pointerEvents = "none";
            hasMozzarella = true;
        }
    }
    if(!hasMozzarella && document.getElementById("nomeReceita").value != "") {
        document.location = "index.html";
    }
}

function hideFunction() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("grid-container-addRecepies").style.opacity = "1.0";
    document.getElementById("grid-container-addRecepies").style.pointerEvents = "auto";
}

function changeHeartColor(){
    document.getElementById('heartIcon').onclick = changeColor;   

    function changeColor() {
        document.body.style.color = "red";
        return false;
    }   
}

function changeHeartColor() {
   var heartId = document.getElementById('heartIcon');
   if (heartId.style.color == '') { // '' -> é cor: white
    heartId.style.color = 'red';
   } else {
    heartId.style.color = '';
   }
}

function changeHeartColor2() {
    var heartId = document.getElementById('heartIcon2');
    if (heartId.style.color == '') { // '' -> é cor: white
     heartId.style.color = 'red';
    } else {
     heartId.style.color = '';
    }
 }

function loadFile(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
}