$(document).ready(function () {

    // Mover un elemento por la pagina
    $(".elemento").draggable();

    // Redimencionar los elementos
    $(".elemento").resizable();

    // Seleccionar elementos
    //$(".lista-seleccionable").selectable();

    // Ordenar los elementos
    $(".lista-seleccionable").sortable({
        update: function (event, ui) {
            console.log("Ha cambiado la lista !!!");
        }
    });
});