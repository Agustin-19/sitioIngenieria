// alert("sitio web cargando");

$(document).ready(
	function ()
	{
        $("#contenedorPagina").fadeIn(6000);
        $("#menuStaFe").bind("click",mostrarStaFe);
        $("#menuCordoba").bind("click",mostrarCordoba);
        $("#menuEntreRio").bind("click",mostrarEntreRio);
        $("#menuInicio").bind("click",mostrarContPagina);
        $("#tblOscura").bind("click",mostrarTabalOscura);
	}
);
function mostrarStaFe(){
    $("#contenedorPagina").hide(1500);
    $("#divEntreRio").hide(1500);
    $("#divCordoba").hide(1500);
    $("#divSantaFe").show(3000);
}
function mostrarCordoba(){
    $("#contenedorPagina").hide(1500);
    $("#divEntreRio").hide(1500);
    $("#divSantaFe").hide(1500);
    $("#divCordoba").show(3000);
}
function mostrarEntreRio(){
    $("#contenedorPagina").hide(1500);
    $("#divSantaFe").hide(1500);
    $("#divCordoba").hide(1500);
    $("#divEntreRio").show(3000);
}
function mostrarContPagina(){
    $("#divSantaFe").hide(1500);
    $("#divEntreRio").hide(1500);
    $("#divCordoba").hide(1500);
    $("#contenedorPagina").show(3000);
}
function mostrarContPagina(){
    $("#divSantaFe").hide(1500);
    $("#divEntreRio").hide(1500);
    $("#divCordoba").hide(1500);
    $("#tablaOscura").show(3000);
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