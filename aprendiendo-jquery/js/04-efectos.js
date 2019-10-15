$(document).ready(function () {
    var caja = $("#caja");
    $("#mostrar").hide();
    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('slow', 0.8);
    });
    
    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo('fasslowt', 0.2);
    });

    // slideToggle, fadeToggle y toggle
    $("#todoenuno").click(function () {
        $("#caja").fadeToggle('normal');
    });
});