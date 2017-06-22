
$( document ).ready(function() {
    console.log( "Jquery ready!" );

    $('body').on('click', '.hamburger', function(){
      $(this).toggleClass('is-active');
    });

});
