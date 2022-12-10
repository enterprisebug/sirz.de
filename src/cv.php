<?php
include("includes/functions.php");
includeFileWithVariables("includes/header.php", array(
    'keywords' => "Potato, Tomato, Toothpaste",
    'title' => "Curriculum Vitae",
    'page' => "cv"
)); ?>

<main id="maincontent" class="content-container">
    <h1>Curriculum Vitae</h1>
    <p>i am writing this CV with a retrospect on each career move with the knowledge from today.</p>
    <h2>Experience</h2>
    <ul>
        <!-- <li>Software Architect at <a href="https://caterpillar-energy-solutions.de/" target="_blank" rel="noopener">Caterpillar Energy Solutions</a>
            <p class="date"><span class="from">Nov 2016</span> - <span class="to">Present</span></p>
            <p class="desc">bla</p>
        </li> -->
        <li>Senior Consultant at <a href="http://cairo.ag/" target="_blank" rel="noopener">CAIRO AG</a>
            <p class="date"><span class="from">Nov 2014</span> - <span class="to">Oct 2016</span></p>
            <p class="desc">Oh boy! I experienced a lot of ups and downs. Let us focus on the ups!</p>
            <p class="desc">I met a lot of crazy people (positively) with a lot of know-how who now run their own company called <a href="https://softecture.net/" target="_blank" rel="noopener">softecture AG</a></p>
            <p class="desc">Mostly I did C# and SharePoint projects with small sizes but also a lot of presales project where I had to develop prototypes.</p>
            <p class="desc">I started gaining knowledge of Azure and did some of the prototypes on that upcoming platform. I quickly realized that this will be a game-changer, and I want to develop for that platform.</p>
            <p class="desc">Luckily I met Marc, he had the same passion as me for Azure. We did a lot of training and implemented some use cases on the platform. He also moved his online-shop to Azure as a proof of concept that the platform had all the capabilities he needed to run his business.</p>
            <p class="desc">We convinced our manager at work to move to the platform and a new journey began.</p>
        </li>
        <li>Senior Consultant at <a href="https://bridging-it.de/" target="_blank" rel="noopener">BridgingIT GmbH</a>
            <p class="date"><span class="from">Sep 2012</span> - <span class="to">Oct 2014</span></p>
            <p class="desc">I went to BridgingIT GmbH, a company with 180 consultants to the time I have started distributed to different locations across Germany.</p>
            <p class="desc">Great people, great community!</p>
            <p class="desc">In the beginning, I did lots of relatively small C# and SharePoint projects, mostly alone.</p>
            <p class="desc">Later I was part of a 5+ people development team where I did most of the architecture and developed a lot. Helped other colleagues to staff this project, did a lot of communication.</p>
        </li>
        <li>Senior Consultant at <a href="https://www.syscovery.com/" target="_blank" rel="noopener">syscovery solve & serve GmbH</a>
            <p class="date"><span class="from">Apr 2008</span> - <span class="to">Aug 2012</span></p>
            <p class="desc">Syscovery was the first software development company I used to work in. I needed to pass an assessment center on my employment as I did not have any knowledge in C# did not know how to debug or write professional code. I also didn't know anything about source control or continuous delivery.</p>
            <p class="desc">Spending more than 4 years in this company helped me to develop my skills. </p>
            <p class="desc">In the beginning, I was only developing software, taking care of our builds and learned a lot about unit testing. I evolved personally as a requirements engineer being in close contact with our customer(s).</p>
            <p class="desc">Somewhere in between the company thought it would be a good idea to do some SharePoint development so we as developers needed to evolve. Implementing SharePoint projects helped to grow personally. I had close contact with the customer, do effort estimations, plan the project, implement it and after all ship it.</p>
            <p class="desc">Unluckily the company got insolvency and we had to leave and search for new jobs.</p>
        </li>
        <li>Developer at <a href="https://www.intertrans.de/" target="_blank" rel="noopener">INTERTRANS GmbH - Europ&auml;ische Verkehrsdienste</a>
            <p class="date">Jun 2006<span class="from"></span> - <span class="to">Mar 2008</span></p>
            <p class="desc">I got this employment while still being a student at the <a href="http://www.uni-mannheim.de/" target="_blank" rel="noopener">University of Mannheim</a> and it was a great experience to do some practical stuff instead of learning all the theory at university. It all began with repairing printers and taking care of the network which started boring me relatively fast so I was searching for other interesting things that I was doing at university - Software development!</p>
            <p class="desc">At this point, we were introducing a tracking and tracing system. All the packages should have been scanned by the drivers. If there was no label on the package the driver had to stick a so-called "baby label" on it. People in the office had to create the consignment and print a new label that had to be stuck on the package. This was a time killer and not very efficient. So we came up with a great idea: What if the client could enter all his information online which is automatically transferred to the InHouse software and put a label on the package so the driver has just to scan the packets.</p>
            <p class="desc">Special thanks to <a href="https://www.intertrans.de/mitarbeiter.php" target="_blank" rel="noopener">Robert Brückel</a> for taking me to the clients and asking them what we have to develop that they will use our software to speed up our process. There were a lot of ideas from the clients and we implemented lots of them. We did not know anything about "Sprints" at this time, but we were pretty agile and implemented feature by feature. We called the client if he was willing to use our software now and so on.</p>
            <p class="desc">At the end of the day, it was a huge success and a very good feeling to see all the labels stuck on the packages! It showed success immediately and was a great benefit for the company. From today's point of view in a logistics company, there is so much optimization potential by IT.</p>
            <p class="desc">This solution was developed with PHP and MySQL hosted on a PC inside the company. Later we moved to a datacenter in Ludwigshafen.</p>
        </li>
    </ul>

    <h2>Education</h2>
    <ul>
        <li>Bachelor of Science at <a href="http://www.uni-mannheim.de/" target="_blank" rel="noopener">University of Mannheim</a>
            <p class="date"><span class="from">Oct 2001</span> - <span class="to">Sep 2007</span></p>
            <p class="desc">being at university was the same as being in school. I liked my colleagues and of course partying but i didn't like the stuff that was being taught. University had absolutely no practical parts. Just theory. This was kind of boring.</p>
            <p class="desc">This was the time where i founded a small company with just myself and did some homepages by myself or as a contractor for several design agencies.</p>
        </li>
        <li>Abitur at <a href="http://www.a-e-g-frankenthal.de/" target="_blank" rel="noopener">Albert-Einstein-Gymnasium Frakenthal</a>
            <p class="date"><span class="from">1993</span> - <span class="to">2001</span></p>
            <p class="desc">yes, i went to school! I didn't like school very much, i liked all my friends at school. Felt like you have 120 friends!</p>
            <p class="desc">I liked "Arts" at school and of course sports!</p>
        </li>
    </ul>
</main>

<?php
includeFileWithVariables("includes/footer.php", null);
?>