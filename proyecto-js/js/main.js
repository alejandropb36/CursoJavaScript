$(document).ready(function (){
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
            date: moment().format("DD/MM/YYYY"),
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

    posts.forEach((item,index) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;
        $("#posts").append(post);
    });

    
});