
function mueveReloj(){
    // Enlazamos la var momentoActual con la hora actual
    momentoActual = new Date()
    // Creamos todas las var que haran de horas, minutos y segundos. Y les enlazamos sus respectivos elementos de Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    // Creamos una var donde se le dará el formato de impresion en el documento html
    horaImprimible = hora + " : " + minuto + " : " + segundo
    // Enlazamos el var anterior con el form que es donde se imprimira dicha hora
    document.form_reloj.reloj.value = horaImprimible
    // Decimos que la función se recargue cada 1000ms
    setTimeout("mueveReloj()",1000)
}
