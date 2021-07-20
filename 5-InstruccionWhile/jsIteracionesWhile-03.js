/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let dato;

	clave = prompt("Ingrese la clave");

	while (clave != "utn750")
	{
		clave = prompt("Clave Invalida. Reingrese clave");
	}
	
	alert("Clave correcta")
}//FIN DE LA FUNCIÓN
