<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Pixeltwist - 404 Page not found</title>
<link rel="shortcut icon" href="/pixeltwist/favicon.ico">
<link href="css/reset.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
<!-- RWD scl -->
    <!-- Disable Iphone initial Scale -->
    <meta name="viewport" content="width=device-width" initial-scale="1.0" />
    
    <!--html5.js for IE less than 9 -->
    <!--[if lt IE 9]>
    	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<!--[endif]-->
    
    <!-- css3-mediaqueries.js for IE less than 9 -->
    <!--[if lt IE 9]>
    	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
 <!-- end of RWD scl -->
</head>

<body>
	<div id="wrapper">
    	<section id="navigation">
			<a href="#"><img src="images/logo.png" alt="Pixeltwist"></a>
			<a href="#about">About</a>
			<a href="#work">Our Work</a>
			<a href="#team">The Team</a>
			<a href="#blog">Blog</a>
			<a href="#contact">Contact Us</a>
		</section>
        <div id="content">
            <div class="four">
            </div>
            <div id="logo">
            </div>
            <div class="four">
            </div>
            <div id="bubbleTail">
            </div>
            <div id="bubble">
            	<p>Oops! Our pixels stopped twisting, we could not find
                <?php
            		$path_parts = pathinfo($_SERVER["REQUEST_URI"]);
            
            		echo  $path_parts ["filename"];
     
       			?>
                for you.</p>
            </div>
        </div>
    </div>
</body>
</html>
