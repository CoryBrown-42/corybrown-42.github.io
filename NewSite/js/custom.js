

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });


  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();
  function load_home()
  {
       document.getElementById("footer").innerHTML='<div class="row"><div class="col-md-5 col-md-offset-1 col-sm-6"><h3>Cory Brown</h3><p>AFO Studios<br>Wicked Owl Games, LLC</p><div class="footer-copyright"><p>Copyright &copy; 2019 AFO Studios</p></div></div><div class="col-md-4 col-md-offset-1 col-sm-6"><h3>Talk to me</h3><p><i class="fa fa-globe"></i> Huntington, WV</p><p><i class="fa fa-phone"></i> Request</p><p><i class="fa fa-save"></i> afo.cory@gmail.com</p></div><div class="clearfix col-md-12 col-sm-12"><hr></div><div class="col-md-12 col-sm-12"><ul class="social-icon"><li><a href="https://www.facebook.com/AFO.cory" class="fa fa-facebook"></a></li><li><a href="https://twitter.com/CoryBR" class="fa fa-twitter"></a></li><li><a href="https://www.linkedin.com/in/cory-brown-94b231a5/" class="fa fa-linkedin"></a></li></ul></div></div>';
  }
  /* Back top
  -----------------------------------------------*/

  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
