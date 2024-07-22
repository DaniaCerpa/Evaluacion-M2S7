var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

opcion = parseInt(opcion)


function opcion1() {
    boleta = parseInt(prompt("Seleccione una opción\n1.-Ver boleta\n2.-Pagar cuenta"))

}

function opcion2() {
    señal = parseInt(prompt("Seleccione una opcion \n1.-Problemas con la señal\n2.-Problemas con las llamadas"))

}
function opcion3() {
    oferta = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer mas información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamara. De lo contrario ingrese 'NO'")
}

function opcion4() {
    prompt("A continuación escriba su consulta")
    alert("Estimado usuario, su consulta: 'Quisiera saber porqué no ha llegado mi producto código 1234' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos. ")
}

function opcion5() {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")

}

function opcionA() {
    if (boleta == 1) {
        alert("Haga click aquí para descargar su boleta.");
    } else if (boleta == 2) {
        alert("Usted está siendo transferido. Espere porfavor...");

    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function opcionB() {
    if (señal == 1 || señal == 2) {
        prompt("A continuación escriba su solicitud");
        alert("Estimado usuario, su solicitud: 'Tengo problemas con la señal en avenida siempre viva' Ha sido ingresada con éxito. Pronto será conectado por uno de nuestros ejecutivos.");
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }
}

function opcionC() {
    if (oferta == "SI") {
        alert("Un ejecutivo contactará con usted")
    }
    else if (oferta == "NO") {
        alert("Gracias por preferirnos")
    }
    else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
    }


}

//Codigo a ejecutar

switch (opcion) {
    case 1:
        opcion1();
        opcionA();
        break;
    case 2:
        opcion2();
        opcionB();
        break;
    case 3:
        opcion3();
        opcionC();
        break;
    case 4:
        opcion4()
        break;
    default:
        opcion5()
        break;
}