function messageData(){
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarDatos(respuesta.items, 'messagetext', 'message');
        },
        error:function(respuesta, xhr){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'algo salió mal',
              })
        }
    });
}

function saveMessage(){
    let datos = {
        'id': $("#id").val(),
        'messagetext': $("#messagetext").val(),
    };
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(datos),
        success: function(respuesta){
            Swal.fire("El mensaje ha sido agregado")
            messageData();
        },
        error:function(respuesta, xhr){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'algo salió mal',
              })
        }
    });
}
