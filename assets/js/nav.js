
$( document ).ready(function() {
    console.log( "Jquery ready!" );

    $('body').on('click', '.hamburger', function(){
        $(this).toggleClass('is-active');
        $('.nav, .nav-home').toggleClass('slideInRight hide');
        // $('.hamburger-inner').toggleClass('active');

    });
    $(document).on('scroll', function(){
        var stickyHeader = $('html, body').scrollTop();
        if (stickyHeader >= 100) {
            console.log('reached 100px ');
            $('.hamburger-container').addClass('sticky');
        } else { $('.hamburger-container').removeClass('sticky'); }
    });

});
