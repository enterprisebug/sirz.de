
<?php
function includeFileWithVariables($fileName, $variables)
{
    extract($variables);
    include($fileName);
}
?>