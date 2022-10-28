// funcao que adiciona nova receita ao localstorage
function addToStorage() {
    var selectedInput = document.querySelectorAll("select");
    var input = document.querySelectorAll("input");
    var name = input[0].value;
    var time = input[1].value;
    var ingredients = [];
    for(var i = 0; i < 5 && selectedInput[i].value != "default"; i++) {
        ingredients.push(selectedInput[i].value);
        ingredients.push(input[i+2].value);
    }
    var preparation = document.getElementById("textArea").value;
    var image = document.getElementById("output");
    image = toBase64(image);
    localStorage.setItem(name, JSON.stringify({nome: name, tempo: time, ingredientes: ingredients, preparacao: preparation, fav: false, imagem: image}));
}

function toBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function mozzarellaAlert(){
    document.getElementById("nomeReceita").required = true;
    var hasMozzarella = false;
    var allSelectedBoxes = document.querySelectorAll("select"); 
    var allInputText = document.querySelectorAll("input"); 
    var required = false;
    for(var i = 0; i < 5; i++) {
        if (allSelectedBoxes[i].value != "default" && allInputText[i+2].value == "") {
            allInputText[i+2].required = true;
            required = true;
        }
    }
    for (var i = 0; i < allSelectedBoxes.length && !required; i++) {
        if ((allSelectedBoxes[i].value == "Mozzarella") && document.getElementById("nomeReceita").value != "") {
            document.getElementById("grid-container-addRecepies").style.opacity = "0.4";
            document.getElementById("alert").style.display = "block";
            document.getElementById("grid-container-addRecepies").style.pointerEvents = "none";
            hasMozzarella = true;
        }
    }

    if(!hasMozzarella && document.getElementById("nomeReceita").value != "" && !required) {
        addToStorage();
        window.location.replace("listaReceitas.html");
    }
}

function hideFunction() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("grid-container-addRecepies").style.opacity = "1.0";
    document.getElementById("grid-container-addRecepies").style.pointerEvents = "auto";
}

function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
}