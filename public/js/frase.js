$("#trocarFrase").click(fraseAleatoria);

function fraseAleatoria(){
    
    $.get("http://localhost:3000/frases", trocaFrase);
}

function trocaFrase(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random()*data.length);
    frase.text(data[numeroAleatorio].texto);
}