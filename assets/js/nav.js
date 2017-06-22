
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

    $('body').on('click', '.test-data', function(){
        console.log('clicked testing...');
        $.ajax({
            url: "https://creativeautomaton.github.io/data.json",
            dataType: "jsonp",
            success: function (returndata){
                console.log(returndata);
            },
            error: function (error){
                  console.log('failed...');
                 console.log(error);
             }
        });

    });



});
