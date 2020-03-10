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
var i=0;
function agregarUsuario() {
    $('#boton').on('click', function (e) {
        e.preventDefault();
        i++;
        var nSocio = $("#nSocio")
        var nombre = $("input[id=nombre]"); 
        var estatura = $("#estatura")
        var edad = $("#edad");
        var localidad = $("#localidad");

        $('#u-tabla').append("<tr>" 
                                    + "<td>" + i + "</td>"
                                    + "<td>" + nombre.val() + "</td>"
                                    + "<td>" + estatura.val() + "</td>"
                                    + "<td>" + edad.val() + "</td>"
                                    + "<td>" + localidad.val() + "</td>"
            + "<td><button class='btn btn-primary editar'>Editar</button> &nbsp" + "<button class='btn btn-primary eliminar'>Eliminar</button></td>" +
            "</tr>");

       

    })
}


function editarUsuario() {
    $('#u-tabla').on('click', '.editar', function (e) {
        e.preventDefault();
        
        var tr = $(this).closest('tr');
        var tdNSocio = tr.children("td:nth-child(1)");
        var tdNombre = tr.children("td:nth-child(2)");
        var tdEstatura = tr.children("td:nth-child(3)");
        var tdEdad = tr.children("td:nth-child(4)");
        var tdLocalidad = tr.children("td:nth-child(5)");
        var tdOpciones = tr.children("td:nth-child(6)");

        var vNSocio = tdNSocio.html(); 
        tdNSocio.html("<input type='text' id='txtNSocio' value='" + vNSocio + "'/>");
        
        var vNombre = tdNombre.html();
        tdNombre.html("<input type='text' id='txtNombre' value='" + vNombre + "'/>");
        
        var vEstatura = tdEstatura.html();
        tdEstatura.html("<input type='text' id='txtEstatura' value='" + vEstatura + "'/>");
        
        var vEdad = tdEdad.html();
        tdEdad.html("<input type='text' id='txtEdad' value='"+ vEdad + "'/>");
        
        var vLocalidad = tdLocalidad.html();
        tdLocalidad.html("<input type='text' id='txtLocalidad' value='"+ vLocalidad + "'/>");

        tdOpciones.html("<button class='btn btn-primary guardar'>Guardar </button>" + "<button class='btn btn-primary eliminar'>Eliminar</button>");
    });
}



function guardarEdicionUsuario() {
    $('#u-tabla').on('click', '.guardar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');

        var tdsocio = tr.children("td:nth-child(1)");
        var tdnombre = tr.children("td:nth-child(2)");
        var tdestatura = tr.children("td:nth-child(3)");
        var tdedad = tr.children("td:nth-child(4)");
        var tdlocalidad = tr.children("td:nth-child(5)"); 
        var tdOpciones = tr.children("td:nth-child(6)");

        nuevosocio = tdsocio.children("input[type=text]").val();
        tdsocio.html(nuevosocio);

        nuevonombre = tdnombre.children("input[type=text]").val();
        tdnombre.html(nuevonombre);

        nuevaestatura = tdestatura.children("input[type=text]").val();
        tdestatura.html(nuevaestatura);

        nuevaestatura = tdestatura.children("input[type=text]").val();
        tdestatura.html(nuevaestatura);

        nuevoEdad = tdedad.children("input[type=text]").val();
        tdedad.html(nuevoEdad);

       nuevalocalidad = tdlocalidad.children("input[type=text]").val();
        tdlocalidad.html(nuevalocalidad);

        tdOpciones.html( "<button class='btn btn-primary editar'>Editar</button>" + 
                         "<button class='btn btn-primary eliminar'>Eliminar</button></td>");
    });
}






/*
function guardarEdicionUsuario() {
    $('#u-tabla').on('click','.guardar',function(e){
        e.preventDefault();
        alert("hola");
        var tr= $(this).closest('tr');
        var tdNSocio = tr.children("td:nth-child(1")
        var tdNombre = tr.children("td:nth-child(2)");
        var tdEstatura = tr.children("td:nth-child(3)");
        var tdEdad = tr.children("td:nth-child(4)");
        var tdLocalidad = tr.children("td:nth-child(5)")
        var tdOpciones = tr.children("td:nth-child(6)");

        var nuevoNSocio = tdNSocio.children("input[type=text]").val();
        tdNSocio.html(nuevoNSocio);

        var nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);

        var nuevaEstatura = tdEstatura.children("input[type=text]").val();
        tdEstatura.html(nuevaEstatura);

        var nuevaEdad = tdEdad.children("input[type=text]").val();
        tdEdad.html(nuevaEdad);

        var nuevaLocalidad = tdLocalidad.children("input[type=text]").val();
        tdLocalidad.html(nuevaLocalidad);

        tdOpciones.html( "<button class='btn btn-primary editar'>Editar</button>" + 
                         "<button class='btn btn-primary eliminar'>Eliminar</button></td>");
    });
    */
//}    

function eliminar(x) {
    $('#u-tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}