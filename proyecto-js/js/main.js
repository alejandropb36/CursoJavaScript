$(document).ready(function (){
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
        // Posts
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: moment('2019-07-24 09:16:00').format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            },
            {
                title: "Prueba de titulo 2",
                date: moment().format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            },
            {
                title: "Prueba de titulo 3",
                date: moment().format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            },
            {
                title: "Prueba de titulo 4",
                date: moment().format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            },
            {
                title: "Prueba de titulo 5",
                date: moment().format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            },
            {
                title: "Prueba de titulo 6",
                date: moment().format("DD/MM/YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu eros. Maecenas eget sem non ipsum auctor egestas. Nulla convallis ipsum vel neque consequat, eget aliquet felis congue. Integer sit amet augue vitae purus faucibus sodales at ut tortor. Etiam ut sapien mauris. Integer nibh nunc, accumsan nec malesuada a, viverra nec risus. Nullam a felis pellentesque, consectetur risus a, feugiat dolor." 
            }
        ];
    
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=7")
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((posts) => {
                console.log(posts);
                posts.forEach((item,index) => {
                    var post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${moment().format("DD/MM/YYYY")}</span>
                            <p>${item.body}</p>
                            <a href="#" class="button-more">Leer más</a>
                        </article>
                    `;
                    $("#posts").append(post);
                });
    
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    
    

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $("#login form").submit(() => {
        var name = $("#name").val();
        localStorage.setItem("name", name);
    });

    var name = localStorage.getItem("name");
    if(name != null && name != "undefined"){
        var aboutParrafo = $("#about p");
        aboutParrafo.html("<strong>Bienvenido, " + name + "</strong>");
        aboutParrafo.append("<a href='#' id='logout'>Cerrar sesión </a>");


        $("#login form").hide();

        $("#logout").click(() => {
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }
    
    // Validacion de Formulario
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $.validate({
            lang: "es",
            errorMessagePosition: "top",
            scrollToTopOnError: true
        });
    }
});