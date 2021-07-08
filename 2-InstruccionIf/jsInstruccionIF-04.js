function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 13 && edad <= 17)
	{
     alert("Es adolescente");
	}
	

	/* Tambien se puede resolver asi
	1
	if ( edad >= 13 )
	{
	if ( edad  <= 17 )
	{
     alert("Es adolescente");
	}
	}

	2

	if(!( edad >= 13 || edad  <= 17 ))
	{
     alert("Es adolescente");
	}
	*/

	
}//FIN DE LA FUNCIÓN