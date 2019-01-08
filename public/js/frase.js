$("#trocarFrase").click(fraseAleatoria);
$("#escolherFrase").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").show();
    var frase = $(".frase");
    frase.addClass("invisivel");

    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
        $("#erro").toggle(100);
        setTimeout(function(){
            $("#erro").toggle(200);
        }, 3000); 
    }).always(function(){
        $("#spinner").toggle();
    })
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random()*data.length);
    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
    frase.removeClass("invisivel");
}

function buscaFrase(){
    var frase = $(".frase");
    frase.addClass("invisivel");
    $("#spinner").toggle();
    var fraseId = $("#idFrase").val();
    var dados = {id: fraseId};
    console.log(fraseId);

    $.get("http://localhost:3000/frases", dados, trocaFrase).fail(function(){
        $("#erro").toggle(100);
        setTimeout(function(){
            $("#erro").toggle(200);
        }, 3000); 
    }).always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);

    frase.removeClass("invisivel");
}