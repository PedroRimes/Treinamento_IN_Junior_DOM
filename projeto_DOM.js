// Envia mensagem
let click = document.getElementById("Enviar");
click.addEventListener( "click" , function (){
    let msg = document.querySelector("#AreaDeTexto");
    let msg2 = msg.value;
    let nespaco = document.createElement("div");
    let container = document.getElementById("histórico");
    nespaco.innerText = msg2;
    container.appendChild(nespaco);
    nespaco.classList.add("spawnbox");
})