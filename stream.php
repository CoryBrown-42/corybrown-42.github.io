<?

require_once("header.php");

?>
  <!-- banner text -->
  <div class="container">
    <div class="col-md-10 col-md-offset-1">
      <div class="innerbanner-text text-center">
        <p>Stream</p>
        <!-- banner text -->
      </div>
    </div>
  </div>
</section>
<!-- header section -->
<!-- description text section -->
<section id="inner-description" class="section inner-description">
  <div class="container">
    <div id="twitch-embed"></div>

        <!-- Load the Twitch embed script -->
        <script src="https://embed.twitch.tv/embed/v1.js"></script>

        <!--
          Create a Twitch.Embed object that will render
          within the "twitch-embed" root element.
        -->
        <script type="text/javascript">
          var embed = new Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: "corymakes",
            layout: "video",
            autoplay: false
          });

          embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
            var player = embed.getPlayer();
            player.play();
          });
        </script>

        <iframe frameborder="0"
                scrolling="no"
                id="chat_embed"
                src="http://www.twitch.tv/embed/hebo/chat"
                height="500"
                width="350">
        </iframe>

  </div>
</section>
<!-- description text section -->

<!-- hire me section -->
<section id="hireme" class="section hireme">
  <div class="container">
    <div class="col-md-8 col-md-offset-2 text-center">
      <h3>Looking for something special?</h3>
      <p></p>
      <a href="mailto:afo.cory@gmail.com?Subject=Hello" class="btn btn-large">Hire me</a> </div>
  </div>
</section>
<!-- hire me section -->
<?
require_once("footer.php");
?>
