function getDetail(){
    let id = sessionStorage.getItem("id");
    let tipoTabla = sessionStorage.getItem("tipoTabla");

    $.ajax({
        url: 'https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/'+tipoTabla+'/'+tipoTabla+'/'+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            showDetail(respuesta.items);
        },
        error:function(respuesta, xhr){
            alert("Ups, hay un error")
        }
    });
}

function showDetail(datos){
    let htmlInsertar ='';

    htmlInsertar+= "<thead><tr>";
    Object.keys(datos[0]).forEach(elemento => htmlInsertar+="<th>" +elemento+ "</th>");
    htmlInsertar+="</tr></thead>"

    htmlInsertar += "<tbody>";
    htmlInsertar+="<tr>";
    Object.values(datos[0]).forEach((elemento, indice) => {
        if(indice<1){
            htmlInsertar+="<td>" +elemento+ "</td>"
        }else{
            htmlInsertar+="<td><input value="+elemento+"></td>"
        }
    });

    htmlInsertar+="</tr>"
    htmlInsertar+="</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlInsertar);
        
}

function deleteData(){
    let id = sessionStorage.getItem("id");
    let tipoTabla = sessionStorage.getItem("tipoTabla");

    let datos = {
        "id" : id
    };
    $.ajax({
        url: 'https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/'+tipoTabla+'/'+tipoTabla,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("Los datos se han eliminado");
            location.href='indice.html'
        },
        error:function(respuesta, xhr){
            alert("Ups, hay un error")
        }
    });

}

function actData(){
    let tipoTabla = sessionStorage.getItem('tipoTabla');
    let datos = '';
    if (tipoTabla=='car'){
        datos=carDato();
    }else if (tipoTabla=='client'){
        datos=clientDato();
    }else if (tipoTabla=='message'){
        datos=messageDato();
    }

    $.ajax({
        url: 'https://g03bc490f7cb010-oh6wkdy0bydgoekk.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/'+tipoTabla+'/'+tipoTabla,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(datos),
        success: function(respuesta){
            alert("Los datos se han actualizado");
            location.href='indice.html';
        },
        error:function(respuesta, xhr){
            alert("Ups, hay un error")
        }
    });
}

function carDato(){
    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos = {
        'id': fila.item(0).innerText,
        'brand': fila.item(1).children[0].value,
        'model' : fila.item(2).children[0].value,
        'category_id' : fila.item(3).children[0].value
    }
    return datos;
}

function clientDato(){
    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos = {
        'id': fila.item(0).innerText,
        'name': fila.item(1).children[0].value,
        'email' : fila.item(2).children[0].value,
        'age' : fila.item(3).children[0].value
    }
    return datos;
}

function messageDato(){
    let fila = document.getElementById('tabla').rows.item(1).cells;

    let datos = {
        'id': fila.item(0).innerText,
        'messagetext': fila.item(1).children[0].value
        
    }
    return datos;
}