

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000);
    //alert("here");
    $('#footer').html('<div class="row"><div class="col-md-5 col-md-offset-1 col-sm-6"><h3>Cory Brown</h3><p>AFO Studios<br>Wicked Owl Games, LLC</p><div class="footer-copyright"><p>Copyright &copy; 2019 AFO Studios</p></div></div><div class="col-md-4 col-md-offset-1 col-sm-6"><h3>Talk to me</h3><p><i class="fa fa-globe"></i> Huntington, WV</p><p><i class="fa fa-phone"></i> Request</p><p><i class="fa fa-save"></i> afo.cory@gmail.com</p></div><div class="clearfix col-md-12 col-sm-12"><hr></div><div class="col-md-12 col-sm-12"><ul class="social-icon"><li><a href="https://www.facebook.com/AFO.cory" class="fa fa-facebook"></a></li><li><a href="https://twitter.com/CoryBR" class="fa fa-twitter"></a></li><li><a href="https://www.linkedin.com/in/cory-brown-94b231a5/" class="fa fa-linkedin"></a></li></ul></div></div>');

    $('.navbar').html('<div class="container"><div class="navbar-header"><button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon icon-bar"></span><span class="icon icon-bar"></span><span class="icon icon-bar"></span></button><a href="index.html" class="navbar-brand">Cory</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="contact.html">Contact</a></li></ul></div>');

     // set duration in brackets
  });




  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();




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
