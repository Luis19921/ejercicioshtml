function imprimeMensaje(number)
{
    let message;
    if (number == 0) {
        message ='0';
    }
    else  if (number > 0) {
        message = 'Positivo';
    }else if (number < 0) {
        message = 'Negativo';
    }
    console.log ("El número", number, "es", message);
}

imprimeMensaje(0);
imprimeMensaje(33);
imprimeMensaje(-42);