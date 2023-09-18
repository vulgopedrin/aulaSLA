console.log("o arquivo esta sendo lido")

const btn = document.getElementById("btn");
const saida = document.getElementById("saida");
const entrada = document.getElementById("entrada");

btn.addEventListener("click", topizera);

function topizera() {
    saida.innerHTML = "começou";
    setTimeout(function () { saida.innerHTML = "acabou o tempo" }, 5000);
}
