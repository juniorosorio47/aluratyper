function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#contadorPalavras").text();
    var usuario = "Junior";
    
    linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
}

//Cria um objeto tr com jquery
function novaLinha(usuario, palavras){
var linha = $("<tr>");
var colunaUsuario = $("<td>").text(usuario);
var colunaPalavras = $("<td>").text(palavras);
var colunaRemover = $("<td>");
var link = $("<a>").attr("href", "#").addClass("botao-remover");
var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

link.append(icone);
colunaRemover.append(link);
linha.append(colunaUsuario);
linha.append(colunaPalavras);
linha.append(colunaRemover);

$(".placar").slideDown(500);

scrollPlacar();

return linha;
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    
    $("HTML, BODY").animate(
    {
        scrollTop: posicaoPlacar+"px"    
    }, 1000);
}

function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);

    setTimeout(function(){
        linha.remove();
    }, 1000);
}

$("#mostrarPlacar").click(mostraPlacar);

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);
    scrollPlacar();
}

