jQuery(document).ready(function() {
  

   $('#carouselHacked').carousel();
  
  new WOW().init();

	//this code is for the gmap
	 var map = new GMaps({
        el: '#map',
        lat: -29.55496,
        lng: 30.2853913
      });


      //this code is for smooth scroll and nav selector
            $(document).ready(function () {
              $(document).on("scroll", onScroll);
              
              //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");
                  
                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');
                
                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;
                      $(document).on("scroll", onScroll);
                  });
              });
          });

          function onScroll(event){
              var scrollPos = $(document).scrollTop();
              $('.navbar-default .navbar-nav>li>a').each(function () {
                  var currLink = $(this);
                  var refElement = $(currLink.attr("href"));
                  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                      $('.navbar-default .navbar-nav>li>a').removeClass("active");
                      currLink.addClass("active");
                  }
                  else{
                      currLink.removeClass("active");
                  }
              });
          }


          // Contact form
  var form = $('#form');
  form.submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
        }

    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: "./mail/contact_me.php",
                type: "POST",
                data: {
                  name: name,
                    phone: phone,
                    email: email,
                    message: message
                },

      beforeSend: function(){
        form.prepend( form_status.html('<p class="text-center" style="color:#fff;"><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      }
    }).done(function(data){
      $("input#name").val("");
      $("input#email").val("");
      $("input#phone").val("");
      $("textarea#message").text("");
      form_status.html('<p class="text-center" style="color:#fff;">' + data + '</p>').delay(3000).fadeOut();
    });
  });






     
     
     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 150) {
          jQuery(".header").css({"background": "#B193DD",});
          jQuery(".top-header img.logo").css({"margin-top": "-40px", "margin-bottom": "0"});
          jQuery(".navbar-default").css({"margin-top": "-15px",});
        }
        else{
          jQuery(".header").css({"background": "transparent",});
           jQuery(".top-header img.logo").css({"margin-top": "-12px", "margin-bottom": "25px"});
           jQuery(".navbar-default").css({"margin-top": "12px", "margin-bottom": "0"});
          
        }
     });

      
     

});