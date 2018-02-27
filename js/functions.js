var scrolled;
var height = window.innerHeight;

$(window).resize( function() {
    height = window.innerHeight;
})


$(window).scroll( function() {
    scrolled = $(window).scrollTop();
    console.log("Scrolling");
    $('.accents img').each( function() {
        $(this).css('transform','translateY('+(scrolled*$(this).attr('strength'))+'px)').css('opacity',1-(scrolled/height));
    });
});