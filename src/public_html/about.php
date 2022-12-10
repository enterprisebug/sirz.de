<?php
include("includes/functions.php");
includeFileWithVariables("includes/header.php", array(
    'keywords' => "Potato, Tomato, Toothpaste",
    'title' => "proud to be in the cloud!",
    'page' => "about"
)); ?>

<main id="maincontent" class="content-container">
    <h1>Proud to be in the cloud!</h1>
    <p>this is what it is all about - being proud to be in the cloud!</p>
    <p>Since day one when i used my computer for something meaningful it was dedicated to the web!</p>
    <img src="img/Profile_Wakeboard.png" alt="Daniel Sirz Wakeboarding" />
    <img src="img/Profile_Engine.png" alt="Daniel Sirz in front of engine CG132B" />
</main>

<?php
includeFileWithVariables("includes/footer.php", null);
?>