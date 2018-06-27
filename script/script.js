function changeTheme(){
	var color = document.getElementById("myColor").value;
	document.getElementById("backColor").style.backgroundColor = color;
	document.getElementById("myNavbar").style.backgroundColor = color;
	document.getElementById("myNavbar").style.color = "#fff";
	document.getElementById("myNavbar").style.opacity = "0.8";
	document.getElementById("title").style.opacity = "1";
}

var seg = 0;
var min = 0;
var hor = 0;
function cronometro() {
	var txtseg = (seg < 10)? "0" + seg : seg; 
	var txtmin = (min < 10)? "0" + min : min;
	
	if (seg == 60) {
		min++;
		seg = 0;
	}
	if (min == 60) {
		hor++;
		min = 0;
	}
	if (hor == 24) {
		hor = 0;
	}
	document.getElementById("cronometro").innerHTML =
	hor + ":" + txtmin + ":" + txtseg;
	seg++;
}

var id = null;

function inicia() {
	if (id == null) {
		id = setInterval(cronometro,1000);
	}
}

function pausa() {
	id = clearInterval(id);
}

function reset() {
	pausa();
	seg = 0;
	min = 0;
	hor = 0;
	cronometro();
}

$(window).scroll( /*Este código foi retirado de um website, mas com a pressa nem tirei o link e já não o encontro. Modifiquei e acrescentei conforme as minhas necessidades*/
{
	previousTop: 0,
}, 
function () {      
if ($(window).width() > 800){
	var currentTop = $(window).scrollTop();
	if (currentTop < this.previousTop) {
		$(".navbar").fadeIn();
	} else {
		$(".navbar").fadeOut();
	}
	this.previousTop = currentTop;
}
else if ($(window).width() < 800) { 
	$('.navbar').removeClass('fixed');
	var currentTop = $(window).scrollTop();
	if (currentTop < this.previousTop) {
		$(".upButton").fadeIn();
	} else {
		$(".upButton").fadeOut();
	}
	this.previousTop = currentTop;
}
});


$(document).ready(function () {
	$('.upButton').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

});


$(document).ready(function(){
	$('#myCarousel-2, #myCarousel').carousel({
	interval: false
	});
});

function calcularImc(){
	var peso = document.getElementById('weightInput').value;
	var altura = document.getElementById('heightInput').value;
	var alturaQuadrado = altura * altura;
	var imc = peso/alturaQuadrado;
	var subIMC = imc.toString().substring(0,5);
	var counter = 0;
	
	if(counter = 1){
		document.getElementById('pesoAbaixo').style.border="none";
		document.getElementById('pesoNormal').style.border="none";
		document.getElementById('preObesidade').style.border="none";
		document.getElementById('obesidade1').style.border="none";
		document.getElementById('obesidade2').style.border="none";
		document.getElementById('obesidade3').style.border="none";
	}
	switch(true){
		case (subIMC < 18.50):
		document.getElementById('pesoAbaixo').style.border="3px solid #0096ff";
		counter++;
		break;
		
		case (subIMC >= 18.50 && subIMC <= 24.99):
		document.getElementById('pesoNormal').style.border="3px solid #06ff00";
		counter++;
		break;
		
		case (subIMC >= 25 && subIMC <= 29.99):
		document.getElementById('preObesidade').style.border="3px solid #fff600";
		counter++;
		break;
		
		case (subIMC >= 30 && subIMC <= 34.99):
		document.getElementById('obesidade1').style.border="3px solid #ffd200";
		counter++;
		break;
		
		case (subIMC >= 35 && subIMC <= 39.99):
		document.getElementById('obesidade2').style.border="3px solid #ff7800";
		counter++;
		break;
		
		case (subIMC >= 40):
		document.getElementById('obesidade3').style.border="3px solid #ff0000";
		counter++;
		break;
	}
	if(isNaN(subIMC) == true){
		alert('Preencha os campos para calcular o IMC. Se pretende visualizar a tabela, clique o icon apresentado!');
	}
	else {
	openIMC();
	document.getElementById('imcShower').innerHTML= "O teu IMC é de: " + subIMC;
	}
}

function openIMC(){
	document.getElementById('imcTable').style.display='block';
}

$(document).ready(function(){
    $(".openImc").click(function(){
        $("#imcTable").fadeIn();
    });
});

$(document).ready(function(){
    $(".closeImc").click(function(){
        $("#imcTable").fadeOut();
    });
});



function emailValidation() {
	var email = document.forms["contactform"]["emailInput"].value;
	var sub = email.substring(email.indexOf("@"),email.length-1);
	var atFinder = email.indexOf("@");
	var message = document.forms["contactform"]["message"].value;
	var name = document.forms["contactform"]["nameInput"].value;
	
	if (email.length < 10 || sub.length < 5 || atFinder == -1) {
        alert("Email not valid");
		return false;
    }
	else if(message.length < 25){
		alert("Mensagem inválida. Minimo 25 caracteres");
		return false;
	}
	else if(name.length < 3){
		alert("Nome inválido");
		return false;
	}

	else {
        $("#relative").fadeOut();
		alert("Comentário enviado com sucesso! Obrigado pela prefência!");
		return false;
	}
}


$(document).ready(function(){
    $(".close").click(function(){
        $("#relative").fadeOut()
    });
});


$(document).ready(function(){
    $(".contactUs").click(function(){
        $("#relative").fadeIn();
    });
});


/*Algumas funcionalidades que implementei tirei ideia daqui: https://www.webhostingsecretrevealed.net/blog/featured-articles/15-cool-javascript-sample-snippets/ */

$(document).ready(function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    document.getElementById('date').innerHTML = (curr_date + "-" + curr_month + "-" + curr_year);
});

function relogio() {
	var d = new Date();
	
	var h = d.getHours();
	var m = d.getMinutes();
	m = (m < 10)? "0" + m : m;
	
	var s = d.getSeconds();
	s = (s < 10)? "0" + s : s;
	
	document.getElementById("time").innerHTML =
	h + ":" + m + ":" + s;
	
}
setInterval(relogio,1000);


function myMap() { /*w3Schools */
var mapProp= {
    center:new google.maps.LatLng(38.020449, -7.875310),
    zoom:15,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

list.onclick = function(e) {   /*https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript */
  e.preventDefault();

  var elm = e.target;
  var audio = document.getElementById('audio');
  var img = document.getElementById('cover');
  var value = elm.getAttribute('data-value');
  var index = value.indexOf('.');
  var getCover = value.substring(0,index+1); 
  var imgSrc = getCover + "jpg";;
  img.src=imgSrc;
  document.getElementById('currentSong').innerHTML = "";
  
  if(value=="audio/adventures.mp3"){
	document.getElementById('currentSong').innerHTML = "Aventures by A Himitsu";
  } 
  
  else if(value=="audio/coolnights.mp3"){
	document.getElementById('currentSong').innerHTML = "Cool Nights by Dixxy";
  }
  
  else if(value=="audio/weAreOne.mp3"){
	document.getElementById('currentSong').innerHTML = "We Are One by Vexento";
  }

  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');
  audio.load();
  audio.play();
};
