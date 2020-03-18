var digitoa;
var digitob;
var operacion;





function init(){
var display = document.getElementById('display');
var on = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var dividido = document.getElementById('dividido');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var por = document.getElementById('por');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var menos = document.getElementById('menos');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cero = document.getElementById('0');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var suma = document.getElementById('mas');


uno.onClick=function(){
display.textContent=display.textContent+"1";
}

dos.onclick = function(e) {
  display.textContent=display.textContent +2;
}
tres.onclick = function(e) {
  display.textContent= display.textContent+3;
}
cuatro.onclick = function(e) {
  display.textContent= display.textContent+4;
}
cinco.onclick = function(e) {
  display.textContent= display.textContent+5;
}
seis.onclick = function(e) {
  display.textContent= display.textContent+6;
}
siete.onclick = function(e) {
  display.textContent=display.textContent +7;
}
ocho.onclick = function(e) {
  display.textContent= display.textContent+8;
}
nueve.onclick = function(e) {
  display.textContent= display.textContent+9;
}
cero.onclick = function(e) {
  display.textContent= display.textContent+0;
}





on.onclick = function(e) {
  display.textContent= '0';
}

mas.onclick = function(e) {
  digitoa= display.textContent;
  operacion='+';
  limpiar()

}
menos.onclick = function(e) {
  digitoa= display.textContent;
  operacion='-';
  limpiar()

}
dividido.onclick = function(e) {
  digitoa= display.textContent;
  operacion= '/';
  limpiar();
}
por.onclick = function(e) {
  digitoa= display.textContent;
  operacion= '*';
  limpiar();
}
igual.onclick = function(e) {
  digitob= display.textContent;
  resolver();
}




function limpiar(){
  display.textContent='';
}
function resetear(){
  display.textContent='';
  operandoa='0';
  operandob='0';
  operacion='';
}

uno.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='1';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'1';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'1';
}
}
dos.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='2';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'2';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'2';
}
}
tres.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='3';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'3';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'3';
}
}
cuatro.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='4';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'4';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'4';
}
}
cinco.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='5';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'5';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'5';
}
}
seis.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='6';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'6';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'6';
}
}
siete.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='7';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'7';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'7';
}
}
ocho.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='8';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'8';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'8';
}
}
nueve.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='9';
}else if(display.textContent.length<='8'){
  display.textContent=display.textContent+'9';
}
else if (display.textContent.length>='9') {
  display.textContent=display.textContent+"";
}
else{
    display.textContent=display.textContent+'9';
}
}




cero.onclick= function(){
   if(display.textContent=="0"){
    display.textContent='0';
 }else{
   display.textContent=display.textContent+'0';
 }
}

function resolver(){
  var result= 0;
  switch(operacion){
    case '+':
    result = parseFloat(digitoa) + parseFloat(digitob)
    break;
    case '-':
    result = parseFloat(digitoa) - parseFloat(digitob)
    break;
    case '/':
    result = parseFloat(digitoa) / parseFloat(digitob)
    break;
    case '*':
    result = parseFloat(digitoa) * parseFloat(digitob)
    break;
  }
  display.textContent= result;
  }

 uno.onmousedown=function(){
  document.getElementById('1').style='width:28%';
}
uno.onmouseup=function(){
document.getElementById('1').style='width:29%' ;
}
 dos.onmousedown=function(){
document.getElementById('2').style='width:28%';
}
dos.onmouseup=function(){
document.getElementById('2').style='width:29%';
}
 tres.onmousedown=function(){
document.getElementById('3').style='width:28%';
}
tres.onmouseup=function(){
document.getElementById('3').style='width:29%';
}
 cuatro.onmousedown=function(){
document.getElementById('4').style='width:21%';
}
cuatro.onmouseup=function(){
document.getElementById('4').style='width:22%';
}
cinco.onmousedown=function(){
document.getElementById('5').style='width:20%';
}
cinco.onmouseup=function(){
document.getElementById('5').style='width:21%';
}
 seis.onmousedown=function(){
document.getElementById('6').style='width:20%';
}
seis.onmouseup=function(){
document.getElementById('6').style='width:21%';
}
siete.onmousedown=function(){
document.getElementById('7').style='width:21%';
}
 siete.onmouseup=function(){
document.getElementById('7').style='width:22%';
}
 ocho.onmousedown=function(){
document.getElementById('8').style='width:20%';
}
ocho.onmouseup=function(){
document.getElementById('8').style='width:21%';
}
 nueve.onmousedown=function(){
document.getElementById('9').style='width:20%';
}
nueve.onmouseup=function(){
document.getElementById('9').style='width:21%';
}
 cero.onmousedown=function(){
document.getElementById('0').style='width:27%';
}
cero.onmouseup=function(){
document.getElementById('0').style='width:28%';
}








}




init();
