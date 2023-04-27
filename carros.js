function carData(){
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarDatos(respuesta.items, 'brand', "car");
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

function saveCar(){
    let datos = {
        'id': $("#id").val(),
        'brand': $("#brand").val(),
        'model':$("#model").val(),
        'category_id':$("#category_id").val(),
    };
    $.ajax({
        url: "https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(datos),
        success: function(respuesta){
            Swal.fire("El carro "+datos.brand+" ha sido agregado")
            carData();
        },
        error:function(respuesta, xhr){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'algo salió mal',
              })
        }
        
    });
    formulario.reset();
}


