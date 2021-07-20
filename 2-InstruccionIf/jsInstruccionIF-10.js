function mostrar()
{
	let numero,
	max,
	min;

	max = 10
	min = 1

	numero = Math.floor(Math.random()*(max-min+1)+min);

	if(numero >= 9)
	{
		alert(numero + " EXCELENTE");
	}

	else 
	{
	if (numero > 4)
	{
		alert(numero + " APROBO");
	}

	else
	{
	alert(numero + " Vamos, la proxima se puede");
    }
}



}//FIN DE LA FUNCIÓN