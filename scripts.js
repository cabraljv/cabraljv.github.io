

if(isMobile){
    $( "#navbar" ).append('<div id="burgerMenu"><input id="burger" type="checkbox" /><label for="burger"><span></span><span></span><span></span></label><nav>    <ul><li><a href="#about">About</a></li><li><a href="#projects">Projects</a></li><li><a href="#abilities">Abilities</a></li><li><a href="#contact" id="contactBtn">Contact</a></li></ul>  </nav></div>');
}else{
    $( "#navbar" ).append("<ul><li><a href='#about'>About</a></li><li><a href='#projects'>Projects</a></li><li><a href='#abilities'>Abilities</a></li><li><a id='contactBtn' href='#contact'>Contact</a></li></ul>");
}


$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;
    $( "#burger").prop('checked', false);
	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
