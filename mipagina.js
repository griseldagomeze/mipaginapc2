function ver(n) {
         document.getElementById("subseccion"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById("subseccion"+n).style.display="none"
         }


//Mi calculadora
function sumar(){
   var a=Number(document.getElementById("entrada1").value);
   var b=Number(document.getElementById("entrada2").value);
   alert(a+b);
}

function restar(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a-b);
}

function multiplicar(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a*b);
}
function dividir(){
   var a=document.getElementById("entrada1").value;
   var b=document.getElementById("entrada2").value;
   alert(a/b);
}


function actual() {
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         mireloj = hora+" : "+minuto+" : "+segundo;	
         return mireloj; 
         }
function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
	 }
setInterval(actualizar,1000); //iniciar temporizador


function myFunction1(){

document.getElementById("parrafo1").innerHTML ="La presente Ley tiene por objeto normar la creación, funcionamiento, supervisión y cierre
de las universidades. Promueve el mejoramiento continuo de la calidad educativa de las instituciones universitarias como entes fundamentales del desarrollo nacional, de la investigación y de la cultura.
Asimismo, establece los principios, fines y funciones que rigen el modelo institucional de la universidad.";}

function myFunction2(){

document.getElementById("parrafo2").innerHTML = "Las universidades públicas y privadas pueden integrarse en redes interregionales, con criterios de calidad, pertinencia y responsabilidad social, a fin de brindar una formación de calidad, centrada en la investigación y la formación de profesionales en el nivel de
pregrado y posgrado.";
}

function myFunction3(){
document.getElementById("parrafo3").style.fontSize = "45px";
}
function myFunction4(){
document.getElementById("parrafo4").style.display = "none";
}


function myFunction5(){
document.getElementById("parrafo5").style.color = "green";
}



