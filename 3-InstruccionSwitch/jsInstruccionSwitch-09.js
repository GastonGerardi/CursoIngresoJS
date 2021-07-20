function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)

{
// CASE PARA INVIERNO

	case "Invierno":
	if(destino == "Bariloche")
{
	alert(precio * 1.2)
}
else if (destino == "Cordoba" || destino == "Cataratas")
{
	alert(precio * 0.9)
}
else
{
	alert(precio * 0.8)
}
	break;

// CASE PARA VERANO

	case "Verano":
	if(destino == "Bariloche")
	{
		alert(precio * 0.8)
	}
	else if (destino == "Cordoba" || destino == "Cataratas")
	{
		alert(precio * 1.1)
	}
	else
	{
		alert(precio * 1.2)
	}
	break;

// CASE PARA OTOÑO / PRIMAVERA

	case "Otoño":
	case "Primavera":
	if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata")
{
	alert(precio * 1.1)
}
else
{
	alert(precio)
}
	break;
}

	

}//FIN DE LA FUNCIÓN