var tempoInicial = $("#tempoFrase").text();
var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    numFrase = frase.split(" ").length;

    var tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numFrase);
}

function inicializaContadores() {
    //Função ON escuta o evento o tempo todo
    campo.on("input", function(){
        var conteudo = campo.val();
        var numPalavras = conteudo.split(/\S+/).length -1;
        var numCaracteres = conteudo.length;

        $("#contadorPalavras").text(numPalavras);
        $("#contadorCaracteres").text(numCaracteres);
    });
}

function inicializaCronometro(){
    var tempoRestante = $("#tempoFrase").text();
    //Função ONE escuta o evento uma vez
    campo.one("focus", function(){
        var tempoID = setInterval(function(){
            $("#tempoFrase").text(tempoRestante --);

            if(tempoRestante < 0){
                clearInterval(tempoID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.addClass("acabou");
    inserePlacar();
}

function inicializaBordas(){
    var frase = $(".frase").text();
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);

    if(digitado == comparavel){
        campo.removeClass("bordaVermelha");
        campo.addClass("bordaVerde");
    }else{
        campo.removeClass("bordaVerde");
        campo.addClass("bordaVermelha");
    }
}

campo.on("input", inicializaBordas);

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contadorPalavras").text(0);
    $("#contadorCaracteres").text(0);
    $("#tempoFrase").text(tempoInicial);
    campo.removeClass("acabou");
    campo.removeClass("bordaVerde");
    campo.removeClass("bordaVermelha");
    inicializaCronometro();
}