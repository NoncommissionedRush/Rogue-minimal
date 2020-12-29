<?php require "images.php" ?>

<!DOCTYPE html>
<?php include "../inc/head.php" ?>

  <body>
    <!-- Page Content -->
    <div class="container">
      <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
        Pavol Dendis
      </h1>

      <a class="back-button" href="/">Späť</a>

      <hr class="mt-2 mb-5" />

      <div class="row text-center text-lg-left">
      <?php foreach ($images as $image) : ?>

        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              <?php echo 'src="../img/edit-1-dendis/'.$image.'"' ?>
              alt=""
            />
          </a>
        </div>

        <?php endforeach ?>

      </div>
    </div>

    <!-- javascript -->
    <script src="../js/index.js"></script>
  </body>
</html>
