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
        caja.fadeToggle('slow', function () {
            console.log("FadeToggle finished!!");
        });
    });

    $("#animar").click(function () {

        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow');
    });
});