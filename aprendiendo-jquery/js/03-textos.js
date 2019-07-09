'use strict'



$(document).ready(function() {
    reloadLinks();
    $("#add_button").removeAttr('disabled');
    $('#add_button').click(function() {
        
        var new_link = $('#add_link').val();
        console.log(new_link);
        $('#menu').append('<li><a href="' + new_link + '"></a></li>');
        $('#add_link').val('');
        reloadLinks();
    });
});

function reloadLinks(){
    $('a').each(function(index) {
        var that = $(this);
        var enlace = that.attr("href");

        that.attr('target', '_blank');

        that.text(enlace);


    });
}