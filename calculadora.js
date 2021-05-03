var x;
var y;


function Suma(){
  var firstElement = document.getElementById("first");
  var secondElement = document.getElementById("second");
  x = parseInt(firstElement.value);
  y = parseInt(secondElement.value);
  console.log(x);
  console.log(y);
  let suma = (x + y);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + suma;


}

function SumaApi() {
 var first = $('#first').val();
 var second = $('#second').val();
 var url ="http://localhost:8085/Suma/?x=" + first  + "&y=" + second;
 console.log('url');
 console.log(url);
 $.getJSON(url,
  function(json) {
    console.log(json);
	$('#resultado').html('<h1>' +json.suma + '</h1>');
	}
  );
}

function Resta(){
  var firstElement = document.getElementById("first");
  var secondElement = document.getElementById("second");
  x = parseInt(firstElement.value);
  y = parseInt(secondElement.value);
  console.log(x);
  console.log(y);
  let resta = (x - y);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + resta;


}

function RestaApi() {
  var first = $('#first').val();
  var second = $('#second').val();
  var url ="http://localhost:8085/Resta/?x=" + first  + "&y=" + second;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }



function Multiplicacion(){
  var firstElement = document.getElementById("first");
  var secondElement = document.getElementById("second");
  x = parseInt(firstElement.value);
  y = parseInt(secondElement.value);
  console.log(x);
  console.log(y);
  let multi = (x * y);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + multi;

}

function MultiApi() {
  var first = $('#first').val();
  var second = $('#second').val();
  var url ="http://localhost:8085/Multi/?x=" + first  + "&y=" + second;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }



function Division(){
  var firstElement = document.getElementById("first");
  var secondElement = document.getElementById("second");
  x = parseInt(firstElement.value);
  y = parseInt(secondElement.value);
  console.log(x);
  let division = (x / y);
  console.log(y);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + division;

}

function DivisionApi() {
  var first = $('#first').val();
  var second = $('#second').val();
  var url ="http://localhost:8085/Division/?x=" + first  + "&y=" + second;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function Pow(){
  var firstElement = document.getElementById("first");
  var secondElement = document.getElementById("second");
  x = parseInt(firstElement.value);
  y = parseInt(secondElement.value);
  console.log(x);
  let result = Math.pow(x,y);
  console.log(y);
  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + result;

}

function PowApi() {
  var first = $('#first').val();
  var second = $('#second').val();
  var url ="http://localhost:8085/Pow/?x=" + first  + "&y=" + second;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }


function Root(){
  var firstElement = document.getElementById("first2");
  x = parseInt(firstElement.value);
  console.log(x);
  let root = Math.sqrt(x);
  var resultElement = document.getElementById("resultado2");
  resultElement.innerHTML = 'Resultado = ' + root;

}

function RootApi() {
  var first = $('#first').val();
  var url ="http://localhost:8085/Root/?x=" + first;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }



function Squared(){
  var firstElement = document.getElementById("first2");
  x = parseInt(firstElement.value);
  console.log(x);
  let squared = Math.pow(x,2);
  var resultElement = document.getElementById("resultado2");
  resultElement.innerHTML = 'Resultado = ' + squared;

}


function SquaredApi() {
  var first = $('#first').val();
  var url ="http://localhost:8085/Squared/?x=" + first;
  console.log('url');
  console.log(url);
  $.getJSON(url,
   function(json) {
     console.log(json);
   $('#resultado').html('<h1>' +json.suma + '</h1>');
   }
   );
 }

