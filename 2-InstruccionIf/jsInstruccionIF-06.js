function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 17)
	{
     alert("Es adolescente");
	}

	else 
	{
		if (edad < 13)
	{
		alert("Es un niño");
	}

	    else
	{
		alert("Es mayor de edad");
	}
    }


}//FIN DE LA FUNCIÓN