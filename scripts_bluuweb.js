// ------------> Funciones Arrow

var saludo = document.getElementById('saludo')
var saludar = nombre => 'Hola ' + nombre;
saludo.innerHTML = saludar('Carlos')

var suma = document.getElementById('suma')
var sumar = (a,b) => a+b
suma.innerHTML += sumar(5,7)

var resta = document.getElementById('resta')
var restar = (a,b) => {
  var c = 1;
  return a-b-c
}
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

// ------------> Fetch API (archivo externo texto.txt)
// var boton = document.querySelector('#boton') //funciona sin coger la variable
// var contenido = document.querySelector('#contenido')
function traer() {
  // contenido.innerHTML = `perro maldito`
  fetch('texto.txt')
    .then (data => data.text())
    .then (data => {
            contenido_1.innerHTML += data
            contenido_2.innerHTML += `${data}`
    })
}
boton.addEventListener("click", traer)

// ------------> Fetch con API Publica
function traer() {
  fetch('https://randomuser.me/api')
    .then (pepe => pepe.json())
    .then (data => {
      console.log(data.results[0]);
      contenido.innerHTML = `
      <img src="${data.results[0].picture.medium}" style="border-radius:50%"/>
      <h6>Nombre: ${data.results[0].name.first}</h6>
      `
    })
}
boton.addEventListener("click", traer)

// ------------> Fetch con API Publica - Tabla
<div>
  <table class="u-full-width" >
    <thead >
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Email</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>

    <tbody id="contenido">

    </tbody>
  </table>
</div>


<script>
  function pinchame() {
    fetch('tabla.json')
      .then ( res => res.json() )
      .then ( datos => {
        // console.log(datos);
        tabla(datos)
      } )
    }

  function tabla (datos){
    // console.log(datos);
    contenido.innerHTML = ''
    for(let valor of datos){
      // console.log(valor.nombre);
      contenido.innerHTML += `
      <tr>
        <td scope="row">${valor.id}</td>
        <td>${valor.nombre}</td>
        <td>${valor.email}</td>
        <td>${valor.estado ? "Activo" : "Eliminado"}</td>
      </tr>
    `
    }
  }
  boton.addEventListener('click',pinchame)
</script>
