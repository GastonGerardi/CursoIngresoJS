/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ 
  let lamparas;
  let empresas;
  let descuento;
  let IIBB;
  let preciofinal;
  let precio = 35;

  lamparas = parseInt(document.getElementById("txtIdCantidad").value);
  empresas = document.getElementById("Marca").value;
  
  
switch (lamparas)
{
    case 1:
    case 2:
    precio * lamparas;
    break;

    case 3:
    if(empresas == "ArgentinaLuz")
    {
    descuento = 0.85;
    }
    else if (empresas == "FelipeLamparas")
    {
    descuento = 0.90;
    }
    else
    {
    descuento = 0.9;
    }
    break;

    case 4:
    if(empresas == "ArgentinaLuz" || empresas == "FelipeLamparas")
    {
    descuento = 0.75;
    }
    else
    {
    descuento = 0.8;
    }
    break;

    case 5:
    if(empresas == "ArgentinaLuz")
    {
    descuento = 0.6;
    }
    else
    {
    descuento = 0.7;
    }
    break;

    default:
    descuento = 0.5;
}

preciofinal = precio * lamparas * descuento;

document.getElementById("txtIdprecioDescuento").value = preciofinal;

IIBB = preciofinal * 0.1;

if (preciofinal > 120)
{
    preciofinal += IIBB;
    alert("USTED PAGO " + IIBB);
}

}