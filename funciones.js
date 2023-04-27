function mostrarDatos(datos, columnaM, tipoTabla){
    let htmlInsertar='';
    htmlInsertar += "<thead><tr><th><h2>"+tipoTabla+"</h2></th></tr></thead>";

    htmlInsertar+= "<tbody>";

    for (let i=0; i<datos.length; i++){
        htmlInsertar+= "<tr>";
        htmlInsertar+="<td> <a href='#' onclick='redireccionD("+datos[i].id+",\""+tipoTabla+"\")'>"+datos[i][columnaM]+"</a></td>";
        htmlInsertar+= "</tr>";
    }
    htmlInsertar+= "</tbody>";

    $("#tabla").empty();
    $("#tabla").append(htmlInsertar)
}

function redireccionD(id, tipoTabla){
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("tipoTabla", tipoTabla);
    location.href='detalle.html';
}