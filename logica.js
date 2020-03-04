$(function () {
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();

    //add();
});

function addUsuarios(datos) {
    $.each()

}

function agregarUsuario() {
    $('form input[type=submit]').on('click', function (e) {
        e.preventDefault();
        var nombre = $("input[id=nombre]");
        var apellidos = $("#apellidos");
        var sexo = $("select[id=sexo]");
        $('#u-tabla').append("<tr>" + "<td>" +
            nombre.val() + "<td>" +
            apellidos.val() + "<td>" +
            sexo.val() + "<td>" +
            "<td><a href'#' name='edit' class)'editar button'>Editas</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a></td>" +
            "</tr>");

        nombre.val('');
        apellidos.val('');
        sexo.val('');

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
    $('#u-tabla').on('click', '.guardar', function(e){
        e.preventDefaul();
        var tr = $(this).closest('tr');
    });
}

function name(params) {
    
}