$('.slider').slick({
	dots: true
});

// castom dropdown
$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});

// accordion


var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		var panel = this.nextElementSibling;
		if(panel.style.display == "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// Page product.html
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" act", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " act";
}

// Input phone mask
