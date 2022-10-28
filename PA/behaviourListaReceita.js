// funcao que carrega a lista do localstorage se esta existe
function load() {
    var lista = document.getElementById("listaReceitas").getElementsByTagName("li");
    for(let li of lista) {
        li.addEventListener("click", function(){showRecipe(this)});
    }
    const keys = Object.keys(localStorage);
    for(let key of keys) {
        var receita = JSON.parse(localStorage.getItem(key)).nome;
        if (receita != null) {
            var node = document.createElement("li");
            node.appendChild(document.createTextNode(receita));
            document.getElementById("listaReceitas").appendChild(node);
            node.addEventListener("click", function(){showRecipe(this)});
        }
    }
}

function showRecipe(receita) {
    receita = receita.innerText;
    switch(receita){
        case "Fettuccine Alfredo":
            localStorage.setItem("#@wsd", "Fettuccine Alfredo");
            break;
        case "Pizza Pepperoni":
            localStorage.setItem("#@wsd", "Pizza Pepperoni");
            break;
        case "Salada Sortida":
            localStorage.setItem("#@wsd", "Salada Sortida");
            break;
        case "Sopa de vegetais e macarrão":
            localStorage.setItem("#@wsd", "Sopa de vegetais e macarrão");
            break;
        case "Bolo de Cereja":
            localStorage.setItem("#@wsd", "Bolo de Cereja");
            break;
        default:
            localStorage.setItem("#@wsd", localStorage.getItem(receita));
            break;
    }
    document.location = 'recipeTemplate.html';
}
