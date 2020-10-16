// First a function to take in and read their URL and display it
var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

function readURL() {

	var youareL = document.getElementById("URL").value;
	alert(youareL);
	var valid = false;
	var a = youareL.toString();
	var b = a.toUpperCase();
	alert(b);
	var mimes = ["JPG", "HEIC", "HEIF", "WEBP", "PNG", "JPEG", "SVG", "PDF", "GIF"];
	var counter = 0;

	// check if URL contains HEIC/HEIF, WEBP, PNG, JPEG, SVG, PDF & GIF

	for (i = 0; i < mimes.length; i++) {
  	if (b.includes(mimes[i]) == true){
			counter++;
		}
	}

	// alert(counter);

	if (counter > 0){
		valid = true;
	}

	if (valid == true){
		alert("This URL is valid.")
	}

	else{
		alert("This URL is invalid.")
	}

}


// Next I want to create a TinyURL that redirects user back to image

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

		document.getElementById("TinyURL").innerHTML = "https://drbob.io/" + text;
    return text;
}

// I want the TinyURL to function correctly and take them to a website of their image
