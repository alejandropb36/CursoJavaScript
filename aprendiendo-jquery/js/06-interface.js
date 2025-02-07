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

    //  Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function () {
            console.log("Haz soltado algo dentro del area");
        }
    });

    // Efectos
    $("#mostrar").click(function () {
        $(".caja-efectos").effect("explode");
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function () {
        $("#popup").dialog();
    });

    // Datapicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});