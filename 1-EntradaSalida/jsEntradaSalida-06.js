/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let numero1;
	let numero2;
	let suma;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	/* tambien se puede usar parseInt en la suma siendo asi =
	 suma = parseInt(numero1) + parseInt(numero2);*/
	suma = numero1 + numero2;

	alert("La suma es " + suma);
}


