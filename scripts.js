// ------------> Funciones Arrow

var saludo = document.getElementById('saludo')
var saludar = nombre => 'Hola ' + nombre;
saludo.innerHTML = saludar('Carlos')

var suma = document.getElementById('suma')
var sumar = (a,b) => a+b
suma.innerHTML += sumar(5,7)

var resta = document.getElementById('resta')
var restar = (a,b) => a-b
resta.innerHTML += restar(10,6)

var multiplicacion = document.getElementById('multiplicacion')
function multiplicar (a,b) {
    return a*b
}
multiplicacion.innerHTML += multiplicar(3,3)


// ------------> Objetos
var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: true,
    capitulos: {
        nombre: 'introduccion',
        videos: 10
    }
}
console.log(objeto.capitulos.videos);

// ------------> Array de Objetos
var arrayObjetos = [
    {
    nombre: 'HTML',
    duracion: 15,
    estado: true
    },
    {
    nombre: 'CSS',
    duracion: 8,
    estado: true
    },
    {
    nombre: 'JavaScript',
    duracion: 1,
    estado: false
    },
]

console.log(arrayObjetos[0].nombre);
console.log(arrayObjetos[1].nombre);
console.log(arrayObjetos[2].nombre);

for (var indice of arrayObjetos){
    console.log(indice.nombre);
}

// ------------> Fetch API
