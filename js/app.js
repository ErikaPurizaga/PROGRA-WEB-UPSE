//AGREGAR OVERLAY LIGHTBOX
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 UN texto
$overlay.append($caption);

//agrgar el averlauy al body
$("body").append($overlay);



//Usuario sa click a un link que rodea la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//Mostrar el Lightbox con la imagen a la que se dio click
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();
console.log(href);
});


//3. CUANDO SE DA CLICK EN EL OVERLAY
//3.1 ESCONDER EL OVERLAY

$overlay.click(function(){
	$overlay.hide();
});


/*****************MENU PARA MOVILES*******************/
//CREEMOS EL MENU LATERAL 
var $select = $("<select></select>");
$("#menu").append($select);

//RECORRER MENÚ
$("#menu a").each(function(){
var $anchor =$(this);
//crear una opcion para el select por cada elemnto del
var $option = $("<option></option>");
//obtener  cada valor de la opciin del atributo href
$option.val ($anchor.attr("href"));
//OBTENER EL VAL DE CADA OPCION
$option.text ($anchor.text());
//agregar la opcion al select
$select.append($option);


//OBTNER SI EL LINK ES LA PAGINA ACTUAL
if($(this).hasClass("selected")){
	$option.prop("selected",true);
}


}); 
$select.change(function()
{
	window.location= $select.val();

});

/*var $button = $("<button>Go</button>");
$("#menu").append($button(){
	window.location = $select.val();

});

$button.click (function(){
	//Toma el valor de la opccion seleccionada
	window.location= $select.val();
});*/

/*usario y  paswword */

//esconder ayudas
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();
function esPasswordValido()
{
	return ($password.val().length > 8);
}



function coincidenPasswords()
{
	return ($password.val() === $confirmPassword.val());
}



function eventoPassword(){
	//Validar si la clave es valida
if(esPasswordValido()){
	//esxconder ayuda si es clave valida
	$password.next().hide();
}else{
	//Caso contrario mostrar ayuda
     $password.next().show();
}
}
/*if($password.val().length > 8){
		//Econder ayuda si la clñave es v{alida
			$password.next().hide();
		}else{
			//CVaso Contrario mostrar ayuda
			$password.next().show();
		}
	}*/


function confirmarPassword(){
	if($password.val() === $confirmPassword.val()){
		$confirmPassword.next().hide();	
		}else{

			$confirmPassword.next().show();	
	}
}


function usuarioIngresado(){
	return ($("#username").val().length > 0);
}


function validacionCompleta()
{
	return esPasswordValido() && coincidenPasswords() && usuarioIngresado();
}



function puedeEnviar()
{
	$("#submit").prop("disabled",!validacionCompleta());
}
	//cuando el usuario ingresa clave (evento input)
	//recordemis que podemos llamar multiples metodos en cadena
    //podemos incluso concatenar varias veces el mismo evento
    $password.focus(eventoPassword).keyup(eventoPassword).focus();
    $confirmPassword.focus(confirmarPassword).keyup(confirmarPassword).focus();
     puedeEnviar();