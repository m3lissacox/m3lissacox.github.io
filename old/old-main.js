//old-main.js
$(document).ready(function(){
	$("#checkboxes_dark").hide();

	//light / dark background
    $('#a').click(function(){
    	if($('#a').html() == "dark"){
    		$("#checkboxes_light").hide();
    		$("#checkboxes_dark").show();
    		$('a').css('color', 'white');
	        $('#all').css('color', 'white');
	        $('#a').html("light");
	        $(".photos").css("border-bottom-color", "white");
			document.body.style.backgroundColor = "black";
    	} else {
    		$("#checkboxes_dark").hide();
    		$("#checkboxes_light").show();
    		$('a').css('color', 'black');
	        $('#all').css('color', 'black');
	        $('#a').html("dark");	        
	        $(".photos").css("border-bottom-color", "black");
			document.body.style.backgroundColor = "white";
    	}
    });

    //checkboxes
    $('#check1').change(function () {
        if (!this.checked) {
        	$(".pub").hide();
        } else {
        	$(".pub").show();
        }
    });
    $('#check2').change(function () {
        if (!this.checked) {
        	$(".mock").hide();
        } else {
        	$(".mock").show();
        }
    });
    $('#check3').change(function () {
        if (!this.checked) {
        	$(".games").hide();
        } else {
        	$(".games").show();
        }
    });
     $('#check4').change(function () {
        if (!this.checked) {
        	$(".art").hide();
        } else {
        	$(".art").show();
        }
    });
});