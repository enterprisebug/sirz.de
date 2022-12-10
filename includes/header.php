<!DOCTYPE html>
<html lang="en">

<head>
    <title>sirz.de - <?php echo $title; ?></title>
    <meta charset="UTF-8">
    <meta name="description" content="Daniel Sirz - proud to be in the cloud">
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta name="author" content="Daniel Sirz">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="d4-tzDNK20VXx8IHlCjLAK_HMrM3ZuxWPr0N31yw5Ag" />

    <!-- also a favicon.ico in the root folder for those browsers who don't care about the next line -->
    <link rel="shortcut icon" href="/img/favicon/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/img/favicon/site.webmanifest">
    <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5">

    <link rel="stylesheet" type="text/css" href="/styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">

    <!-- 
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMWd. .oWMMNc  .kMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMO'  .xWMWx.  ,0WMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMWk.  .cKWNo.  .o0XMMMMMMMMMMMMMMMMMMM
        MMMMMMMMW0:   'OWWk,   .:KMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMNd.  ,KMMXc    cNMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMNo..;0MMMXc...cXMMMMMMMMMMMMMMMMM
        MMMMWWWWWWWWNK0XWWWWWNKKKXWWWWWWWWWWMMMMMMMM
        MMMo;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;:lxKWMMM
        MMM                                    .:OWM
        MMM                            .,'.    .oMMM
        MMM                            lNNKo.   .MMM
        MMM                            lWMMNc    MMM
        MMM         KEEP CALM          lWMNk'    MMM
        MMM            and             'cc,.    cMMM
        MMM        DRINK COFFEE                'dNMM
        MMM                            ...,cxXWMMMMM
        MMM                            lKXXWMMMMMMMM
        MMM,                            ;KMMMMMMMMMM
        MMMKl.                        .lKMMMMMMMMMMM
        MMMMWOc.                    .cOWMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 -->
</head>

<body>
    <script src="scripts.js"></script>
    <a class="skip-link" href="#maincontent">Skip to main</a>
    <nav>
        <?php
                                    includeFileWithVariables("includes/menu.php", array(
                                        'title' => $title,
                                        'page' => $page
                                    )); ?>
    </nav>