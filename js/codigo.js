// alert("sitio web cargando");

$(document).ready(
	function ()
	{
        $("#contenedorPagina").fadeIn(600);
        $("#menuStaFe").bind("click",mostrarStaFe);
        $("#menuCordoba").bind("click",mostrarCordoba);
        $("#menuEntreRio").bind("click",mostrarEntreRio);
        $("#menuInicio").bind("click",mostrarContPagina);
        $("#tblOscura").bind("click",mostrarTabalOscura);
	}
);
function mostrarStaFe(){
    $("#contenedorPagina").hide(150);
    $("#divEntreRio").hide(150);
    $("#divCordoba").hide(150);
    $("#divSantaFe").show(300);
}
function mostrarCordoba(){
    $("#contenedorPagina").hide(150);
    $("#divEntreRio").hide(150);
    $("#divSantaFe").hide(150);
    $("#divCordoba").show(300);
}
function mostrarEntreRio(){
    $("#contenedorPagina").hide(150);
    $("#divSantaFe").hide(150);
    $("#divCordoba").hide(150);
    $("#divEntreRio").show(300);
}
function mostrarContPagina(){
    $("#divSantaFe").hide(150);
    $("#divEntreRio").hide(150);
    $("#divCordoba").hide(150);
    $("#contenedorPagina").show(300);
}

function MostrarCartelito(){
    alert("Has hecho clic en el titulo");
}

function AgregarSelector(){
    var selector=prompt("Ingrese el selector que quiere agregar");
    // if(selector=null)
         $("#listaSelectores").append("<li>"+selector+"</li>")
}

function agregarTabla(){
    var tabla=$("#tablaOscura").html();
    $("#contenedorPagina").append("<table class='table table-striped'>"+tabla+"</table>");
}