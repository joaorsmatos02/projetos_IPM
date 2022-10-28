var current = localStorage.getItem("#@wsd");
var test = false;

if(current == "Fettuccine Alfredo" || current == "Pizza Pepperoni" || current == "Salada Sortida" || current == "Sopa de vegetais e macarrão" || current == "Bolo de Cereja"){
    document.getElementById("removeRecipe").style.display = "none";
    switch(current) {
        case "Fettuccine Alfredo":
            test = true;
            document.getElementById("recipeTemplateImage").src = "pasta.png";
            document.getElementById("recipeTemplateImage").width = "220";
            document.getElementById("recipeTittle").innerHTML = "Fettuccine Alfredo";
            document.getElementById("preparationTime").innerHTML += "20";

            var node = document.createElement("li");
            var node1 = document.createElement("li");
            var node2 = document.createElement("li");
            node.appendChild(document.createTextNode("250 Fettuccine"));
            node.innerHTML+= " ";
            node1.appendChild(document.createTextNode("2 Leite Creme"));
            node1.innerHTML+= " ";
            node2.appendChild(document.createTextNode("750 Bacon"));
            node2.innerHTML+= " ";
            document.getElementById("listaIngredientes").appendChild(node);
            document.getElementById("listaIngredientes").appendChild(node1);
            document.getElementById("listaIngredientes").appendChild(node2);
            document.getElementById("preparação").innerHTML += "Coloque o macarrão para cozinhar em água<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Enquanto o macarrão cozinha frite o bacon <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Adicione o queijo ralado <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            break;
        case "Pizza Pepperoni":
            test = true;
            document.getElementById("recipeTemplateImage").src = "pizza.png";
            document.getElementById("recipeTemplateImage").width = "220";
            document.getElementById("recipeTittle").innerHTML = "Pizza Pepperoni";
            document.getElementById("preparationTime").innerHTML += "25";

            var node = document.createElement("li");
            var node1 = document.createElement("li");
            var node2 = document.createElement("li");
            node.appendChild(document.createTextNode("2 colheres de sopa azeite"));
            node.innerHTML+= " ";
            node1.appendChild(document.createTextNode("1 cebola"));
            node1.innerHTML+= " ";
            node2.appendChild(document.createTextNode("1 lata cogumelos laminados"));
            node2.innerHTML+= " ";
            document.getElementById("listaIngredientes").appendChild(node);
            document.getElementById("listaIngredientes").appendChild(node1);
            document.getElementById("listaIngredientes").appendChild(node2);
            document.getElementById("preparação").innerHTML += "Para preparar a massa misture a farinha.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Dilua o fermento de padeiro num pouco de água <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Amasse bem e junte água, aos poucos.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            break;
        case "Salada Sortida":
            test = true;
            document.getElementById("recipeTemplateImage").src = "salad.png";
            document.getElementById("recipeTemplateImage").width = "220";
            document.getElementById("recipeTittle").innerHTML = "Salada Sortida";
            document.getElementById("preparationTime").innerHTML += "10";

            var node = document.createElement("li");
            var node1 = document.createElement("li");
            var node2 = document.createElement("li");
            node.appendChild(document.createTextNode("10 alface"));
            node.innerHTML+= " ";
            node1.appendChild(document.createTextNode("6 tomate seco"));
            node1.innerHTML+= " ";
            node2.appendChild(document.createTextNode("6 azeitonas"));
            node2.innerHTML+= " ";
            document.getElementById("listaIngredientes").appendChild(node);
            document.getElementById("listaIngredientes").appendChild(node1);
            document.getElementById("listaIngredientes").appendChild(node2);
            document.getElementById("preparação").innerHTML += "Numa tigela adicionar todos os ingredientes.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Bater até a mistura ficar homogênea. <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Acrescentar o óleo de girassol aos poucos.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            break;
        case "Sopa de vegetais e macarrão":
            test = true;
            document.getElementById("recipeTemplateImage").src = "soup.png";
            document.getElementById("recipeTemplateImage").width = "220";
            document.getElementById("recipeTittle").innerHTML = "Sopa de vegetais e macarrão";
            document.getElementById("preparationTime").innerHTML += "30";

            var node = document.createElement("li");
            var node1 = document.createElement("li");
            var node2 = document.createElement("li");
            node.appendChild(document.createTextNode("1 cebola picada"));
            node.innerHTML+= " ";
            node1.appendChild(document.createTextNode("2 folhas louro"));
            node1.innerHTML+= " ";
            node2.appendChild(document.createTextNode("2 cenouras"));
            node2.innerHTML+= " ";
            document.getElementById("listaIngredientes").appendChild(node);
            document.getElementById("listaIngredientes").appendChild(node1);
            document.getElementById("listaIngredientes").appendChild(node2);
            document.getElementById("preparação").innerHTML += "Começar por refogar a cebola.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Juntar as folhas de louro e o alho francês. <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Cortar a cenoura em fatias finas.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            break;
        default:
            test = true;
            document.getElementById("recipeTemplateImage").src = "cake.png";
            document.getElementById("recipeTemplateImage").width = "220";
            document.getElementById("recipeTittle").innerHTML = "Bolo de Cereja";
            document.getElementById("preparationTime").innerHTML += "20";

            var node = document.createElement("li");
            var node1 = document.createElement("li");
            var node2 = document.createElement("li");
            node.appendChild(document.createTextNode("150 açúcar"));
            node.innerHTML+= " ";
            node1.appendChild(document.createTextNode("150 manteiga"));
            node1.innerHTML+= " ";
            node2.appendChild(document.createTextNode("6 cerejas"));
            node2.innerHTML+= " ";
            document.getElementById("listaIngredientes").appendChild(node);
            document.getElementById("listaIngredientes").appendChild(node1);
            document.getElementById("listaIngredientes").appendChild(node2);
            document.getElementById("preparação").innerHTML += "Bata muito bem, as gemas e o sumo de limão.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Bata as claras em castelo firme <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            document.getElementById("preparação").innerHTML += "Adicione uma pitada de sal ao preparado anterior.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
            break;
    }
}

if(!test) {
    current = JSON.parse(current);
    document.getElementById("recipeTittle").innerHTML = current.nome;
    document.getElementById("preparationTime").innerHTML += current.tempo;
    var listaIngredientes = current.ingredientes;
    for (var i = 0; i < listaIngredientes.length; i += 2) {
        var node = document.createElement("li");
        if(listaIngredientes[i+1] != null) {
            node.appendChild(document.createTextNode(listaIngredientes[i+1]));
            node.innerHTML+= " ";
        }
        node.innerHTML+= listaIngredientes[i];
        document.getElementById("listaIngredientes").appendChild(node); 
    }
        
    for(var i = 0; i < current.preparacao.length; i++) {
        document.getElementById("preparação").innerHTML += current.preparacao[i];
        if (i % 35 == 0 && i != 0) 
            document.getElementById("preparação").innerHTML += "<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;";
    }
        
    document.getElementById("recipeTemplateImage").src = "data:image/png;base64," + current.imagem;
}


function removeRecipe() {
    localStorage.removeItem(current.nome);
    goBack();
}

function goBack() {
    localStorage.removeItem("#@wsd");
    window.location.replace("listaReceitas.html");
}

