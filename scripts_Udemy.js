// -------------------------FUNCIONES

// Funciones Declaration
saludar('Juan')
function saludar(nombre){
  console.log('Hola ' + nombre);
}

// Funciones expression
var sumar = function(a,b) {
  console.log(a+b);
}
sumar (3,10);

// IIFE
(function (c,d){
  console.log(c*d);
})(5,5)

// -------------------------METODOS
const musica = {
  reproducir: function(cancion){
    console.log('Reproduciendo la canción '+ cancion);
  },
  pausar: function(){
    console.log('Paused...');
  }
}
musica.reproducir('Volvere');
musica.pausar();

// metodos por fuera
musica.borrar = function(id){
  console.log('Borrando la cancion con ID: ' + id);
}
musica.borrar(124)


const css = {}
css.color = function(h, color){
  document.querySelector(h).style.color = color
}
css.color('h1','gray')
css.color('h2','silver')
css.color('h3','salmon')
css.color('h4','peru')

css.size = function(h, size){
  document.querySelector(h).style.fontSize = size
}

css.size('h4',"4rem")
