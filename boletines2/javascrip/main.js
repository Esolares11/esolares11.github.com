//DOM
// queryselector selecciona solo un documento
// querySelectorAll busca todo

/* codigo para los links
let links = document.querySelectorAll("a");

links.forEach(function(links) {
  console.log(links);
});

*/

/* para que aparezca cuantas veces da uno click en el area
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {

  td.addEventListener('click',function(){
    console.log(this);
  })

});
*/

/* para bloquear las funciones de un boton
let links = document.querySelectorAll(".close");

links.forEach(function(link)  {
  link.addEventListener("click",function(ev){
  ev.preventDefault();
  return false;
  });
});
*/
/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono)  {
  icono.classList.remove("fa-star");
  icono.classList.add("far-star");
});
*/
// obtener elementos de la clase,close
let links = document.querySelectorAll(".close");
// recorrerlos
links.forEach(function(link){
//agregar un evento
link.addEventListener("click",function(ev){
  ev.preventDefault();
  let content = document.querySelector(".content");
 // para borrar las clases
  content.classList.remove("bounceInLeft");
  content.classList.remove("animated");
// para agregar las clases
content.classList.add("fadeOutUp");
content.classList.add("animated");
// para que salga un poco más despacio y permita ver la animación
setTimeout(function(){
  location.href = "../index.html";
},600);

});

});
