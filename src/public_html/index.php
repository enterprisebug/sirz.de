<?php
include("includes/functions.php");
includeFileWithVariables("includes/header.php", array(
    'keywords' => "Keep calm and drink coffee",
    'title' => "Keep calm and drink coffee",
    'page' => "home"
)); ?>

<main id="maincontent" class="content-container center">

    <div class="keepCalm-container">
        <img src="img/KeepCalmAndDrinkCoffee.svg" alt="Keep Calm and Drink Coffee" />
    </div>

    <p><span class="emph">every morning</span> I bring my wife a cup of <span class="emph">coffee</span> to the bed.</p>

    <p><span class="emph">At work</span>, while coding I drink <span class="emph">coffee</span> with my colleagues.</p>

    <p>It is <span class="emph">always</span> a good idea to <span class="emph">drink a cup of coffee!</span></p>

    <p>I used to have a <a href="https://www.youtube.com/channel/UC1sK6id922wUGbeXIdMoRFg" target="_blank" rel="noopener">YouTube Channel</a> <span class="emph">dedicated to coffee</span>.</p>

</main>

<div class="credits-container">
    <div class="credits">
        Credits on this page:
        <ul>
            <li>The icon "<a href="https://fontawesome.com/icons/mug-hot?style=solid" target="_blank" rel="noopener">mug-hot</a>" by <a href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</a> is licensed under <a href="https://fontawesome.com/license" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International license</a></li>
        </ul>
    </div>
</div>

<?php
includeFileWithVariables("includes/footer.php", null);
?>