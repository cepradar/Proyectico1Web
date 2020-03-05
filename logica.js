$(function () {
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();

    //add();
});

/*
function addNUsuarios(datos) {
    $.each(datos, function(i, e) {
        $('#u-tabla').append("<tr>" + 
        "<td>" + e.name + "</td>" +
        "<td>" + e.apellido + "</td>" +
        "<td>" + e.sexo + "</td>" +
        "<td> <a href='#' class='editar button'>Editar</a>" +
        "<a href='#' class='eliminar button'>Eliminar</a></td>" +
        "</tr>")
    });
} 
*/

function agregarUsuario() {
    $('#boton').on('click', function (e) {
        e.preventDefault();
        
        var nSocio = $("#nSocio")
        var nombre = $("input[id=nombre]");
        var estatura = $("#estatura")
        var edad = $("#edad");
        var localidad = $("#localidad");

        $('#u-tabla').append("<tr>" 
                                    + "<td>" + nSocio.val() + "</td>"
                                    + "<td>" + nombre.val() + "</td>"
                                    + "<td>" + estatura.val() + "</td>"
                                    + "<td>" + edad.val() + "</td>"
                                    + "<td>" + localidad.val() + "</td>"
            + "<td><a href'#' name='edit' class='editar button'>Editar</a>" + "<a href='#' class='eliminar button'>Eliminar</a></td>" +
            "</tr>");

        nSocio.val('');
        nombre.val('');
        estatura.val('');
        edad.val('');
        localidad.val('');

    })
}

function editarUsuario() {
    $('#u-tabla').on('click', '.editar', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdNombre = tr.children("td:nth-child(1)");
        var tdApellido = tr.children("td:nth-child(2)");
        var tdSexo = tr.children("td:nth-child(3)");
        var tdOpciones = tr.children("td:nth-child(4)");
        var vnombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' value=''" + vnombre + "'/>");
        var vapellidos = tdApellidos.html();
        tdApellido.html("<input type='text' id='txtApellido' value=''" + vapellidos + "'/>");
        tdOpciones.html("<a href='#' class='guardar button'>Guardar</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a>")

    });
}

function guardarEdicionUsuario() {
    $('#u-tabla').on('click','.guardar',function(e){
        e.preventDefault();

        var tr= $(this).closest('tr');
        var tdNombre = tr.children("td:nth-child(1)");
        var tdApellidos = tr.children("td:nth-child(2)");
        var tdSexo =tr.children("td:nth-child(3)");
        var tdOpciones = tr.children("td:nth-child(4)");

        nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        nuevoApellidos = tdApellidos.children("input[type=text]").val();
        tdApellidos.html(nueApellidos);

        tdOpciones.html( "<a  href='#' class='editar button'> Editar</a>"+  
                         "<a href='#' class='Eliminar button'> Eliminar</a>");
    });
    
}    

function eliminar(x) {
    $('#u-tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}