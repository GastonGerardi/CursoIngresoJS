/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;

    farhenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    centigrados = (farhenheit / 32) - 1

	alert(farhenheit + " Farhenheit son " + centigrados + " Centigrados" );
}

function CentigradosFahrenheit () 
{
	let fahrenheit;
    let centigrados;

    centigrados =  parseInt(document.getElementById("txtIdTemperatura").value);
    farhenheit = (centigrados + 32)

	alert( centigrados + " Centigrados son " + farhenheit + " Farhenheit" );
}