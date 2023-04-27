function personData(){
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarDatos(respuesta.items, 'name', 'client');
        },
        error:function(respuesta, xhr){
            alert("Ups, hay un error")
        }
    });
}

function savePerson(){
    let datos = {
        'id': $("#id").val(),
        'name': $("#name").val(),
        'email':$("#email").val(),
        'age':$("#age").val(),
    };
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("El cliente " +datos.name+" ha sido registrado")
            personData();
        },
        error:function(respuesta, xhr){
            alert("Ups, hay un error")
        }
    });
}

