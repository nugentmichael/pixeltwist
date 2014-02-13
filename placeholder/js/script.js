window.onload = init;

//global variables
var theForm;

function init(){
	theForm = document.querySelector("#notify");
	//validates all required form elements upon clicking the submit button
	document.querySelector("#btnSubmit").onclick = validateForm;
	document.querySelector(".forminput").onfocus = hideError;
	document.querySelector("#errorbox").onclick = hideError;
}

function trim( theString ){
	while( theString.length> 0 && (theString.substr(0, 1) == " " || theString.substr(0,1) == "\t" || theString.substr(0,1) == "\r" || theString.substr(0,1) == "\n") ){
		theString = theString.substr(1);
	}
	
	
	while( theString.length> 0 && (theString.substr(theString.length-1, 1) == " " || theString.substr(theString.length-1,1) == "\t" || theString.substr(theString.length-1,1) == "\r" || theString.substr(theString.length-1,1) == "\n") ){
		theString = theString.substr(0, theString.length-1);
	}
	
	return theString;
}

function validateForm(){
	//error variable
	var error = false;
	
	//call function to validate the email field
	var email = checkEmail();
	if(email == true){
		error = true;
	}
	
	//prevents the form from submitting if there was an error
	if(error == true){
		return false;
	}
}

function checkEmail(){
	//get the email field using theform global variable
	var eMail = theForm.emailaddress;
	
	var error = "";
	
	var emailVal = trim(eMail.value);
	
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(emailVal)){
		error = "Please provide a valid email address";
		eMail.focus;
 	}
	
	if(error!=""){
		document.getElementById('errorbox').style.visibility = "visible";
		document.getElementById('errorbox').style.color = "#E37471";
		document.getElementById('errorbox').innerHTML = '<h3>' + error + '</h3>';
		return true;
	}else{
		document.getElementById('errorbox').style.visibility = "visible";
		document.getElementById('errorbox').style.color = "#a2c98d";
		document.getElementById('errorbox').innerHTML = '<h3>' + 'Thank you! You will be notified when our site launches!' + '</h3>';
		return true;
	}
}

function hideError(){
	document.getElementById('errorbox').style.visibility = "hidden";
}