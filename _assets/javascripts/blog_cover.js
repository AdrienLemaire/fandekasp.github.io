jQuery(document).ready(function($){
    var img = Gallery[Math.floor(Math.random()*Gallery.length)];
    $(".blog-cover").css('background-image',
                         'url(/images/personal/' + img + ')');
})
