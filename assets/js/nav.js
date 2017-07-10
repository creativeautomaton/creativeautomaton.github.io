
$( document ).ready(function() {
    console.log( "Jquery ready!" );

     $.ajax({
         url: "/data.json",
         dataType: "json",
         success: function (data){
              siteData(data);
              // localstorage.setitem(data);
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

     var heroSeen = localStorage.getItem("heroanimation");
     console.log(heroSeen);
    if (heroSeen == null) {
      console.log(heroSeen);
      localStorage.setItem("heroanimation", "false");
    }
    if (heroSeen = false ) {
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

          setTimeout(function(){
             heroAnimation();
              localStorage.setItem("heroanimation", "true");
          }, 6000);

          function heroAnimation(){
             $('.title').removeClass('hide');
             $('#hero .container').addClass('done');

            $('.title p').each(function() {
                   var time = 4;
                   $(this).delay(500 * time).show(1000);
            });
          }
           setTimeout(function(){
                $('.call-to-action').delay(1500).show(500);
                $('.hire-us').delay(500).show(1000);
                $('.join-us').delay(500).show(1000);
           }, 10000);
    }

     $('body').on('click', '.testHero', function(){
         heroAnimation();
     });

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
            url: "/data.json",
            dataType: "json",
            success: function (data){
                var data = data;
            },
            error: function (error){
                  console.log('failed...');
                 console.log(error);
                  var data = null;
             }
        });
    });


});
