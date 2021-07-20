function mostrar()
{
	let suma;
	let promedio;
	let numero;
	let contador = 0;
	let acumulador = 0;

	suma = document.getElementById("txtIdSuma").value;
	promedio = document.getElementById("txtIdPromedio").value;
    
	while (contador < 5)
{
    numero = parseInt(prompt("Ingrese un numero"));

	acumulador = acumulador + numero;

	contador = contador + 1;
}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	


}//FIN DE LA FUNCIÓN