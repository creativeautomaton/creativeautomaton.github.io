
$( document ).ready(function() {
    console.log( "Jquery ready!" );

     $.ajax({
         url: "/assets/creativeautomaton.json",
         dataType: "json",
         success: function (data){
              siteData(data);
         },
         error: function (error){
               console.log('failed...');
               console.log(error);
               var data = null;
          }
     });
    function siteData(data){
         setTimeout(function () {
             console.log(data);
         }, 200);
    }
    function heroAnimation(){
          $('.call-to-action').hide().removeClass('hide');

          setTimeout(function(){
             $('.logo').removeClass('hide').addClass('three-sec slideInDown animated');
             $(".title").each(function (index) {
                 var characters = $(this).text().split("");
                 $this = $(this);
                 $this.empty();
                 $.each(characters, function (i, el) {
                    $this.append("<p class='slideInLeft animated'>" + el + "</p>");
                 });
                  console.log(characters);
             });
             $('.title p').each(function() {
                $(this).hide();
                var letterVal = $(this).text();
                if(letterVal == " "){
                    $(this).css({'margin-left': '2rem'});
                }
             });
          }, 1000);

          $('.title').removeClass('hide');
          $('#hero .container').addClass('done');
          $('.title p').each(function() {
                 var time = 4;
                 $(this).delay(500 * time).show(1000);
          });
         setTimeout(function(){
              $('.call-to-action').delay(1500).show(500);
              $('.hire-us').delay(500).show(1000);
              $('.join-us').delay(500).show(1000);
         }, 10000);
    }
    function heroStatic(){
         $('.call-to-action').hide().removeClass('hide');
         $('.logo').removeClass('hide');
         $('.title').removeClass('hide');
         $('#hero .container').addClass('done');
         $('.title p').each(function() {
                var time = 4;
                $(this).delay(500 * time).show(1000);
         });
         $('.call-to-action').delay(1500).show(500);
         $('.hire-us').delay(500).show(1000);
         $('.join-us').delay(500).show(1000);

    }

    var heroVal = localStorage.getItem("heroanimation");
    if (heroVal == null || heroVal === false){
        localStorage.setItem("heroanimation", "false");
        heroAnimation();
        console.log('called  heroAnimation');
    }
    if(heroVal !== "false") {
        localStorage.setItem("heroanimation", "true");
        heroStatic();
        console.log('called  heroStatic');
    }



     $('body').on('click', '.testHero', function(){
         heroAnimation();
     });

    $('body').on('click', '.hamburger-container', function(){
        $('.hamburger').toggleClass('is-active hide');
        $('.nav-link').toggleClass('hide'); 
        $('.nav, .nav-home').toggleClass('slideInRight hide');
        // $('.hamburger-inner').toggleClass('active');
    });

    $(document).on('scroll', function(){
        var stickyHeader = $('html, body').scrollTop();
        if (stickyHeader >= 100) {
            console.log('reached 100px ');
            $('.hamburger-container').addClass('sticky');
        } else { $('.hamburger-container').removeClass('sticky'); }

        var services = $('.service-panels').offset().top;
        console.log(services);
        if (stickyHeader = services) {
           console.log('reached service-panels');
           $('.service-panels .animated').removeClass('hide');
        }

         var portfolio = $('.portfolio').offset().top;
         console.log(portfolio);
         if (stickyHeader = portfolio) {
            console.log('reached portfolio');
            $('.portfolio .animated').removeClass('hide');
         }
    });

});