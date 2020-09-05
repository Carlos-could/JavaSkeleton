// ......................... Fetch

function descargarUsuarios() {
     const api = `https://pixabay.com/api/?key=18166422-c39881a9559fd66a7d6c00c5c&q=bikini&per_page=200&image_type=photo&pretty=true`;


     const box_fetch = document.querySelector("#box_fetch")
     //llamado fetch

     fetch(api)
          .then(respuesta => respuesta.json() )
          .then(datos => {
               console.log(datos.hits);

               datos.hits.forEach(usuario => {
                    const {id} = usuario
               })
               box_fetch.innerHTML = `
               <h1>Nombre: ${id} </h1>
               `
               })
}

descargarUsuarios()

// function imprimirHTML(datos) {
//      //lista los datos uno x uno
//      datos.forEach(usuario => {
//
//           //crear etiqueta li
//           const li = document.createElemet('li');
//
//           //coger datos con Destructor
//           const {user, likes, webformatURL} = usuario;
//
//           //insertar datos en html
//           li.innerHTML = `
//                          Nombre: ${user} ${likes}
//                          <img src="${webformaURL}">
//           `;
//           document.querySelector("#box_fetch").appendChild(li);
//
//      });
// }
//
// const fetch = document.querySelector("#fetch");
// fetch.addEventListener('click', descargarUsuarios);



// ............................ Object Constructor

// class Cancion {
//      constructor(color){
//           this.color = color;
//           this.añadir = function(nombre){
//                const box_body = document.querySelector("#box_constructor");
//                const contenido = `
//                                <div style=   'float:left;
//                                               width: calc(33.3% - 2rem);
//                                               height: 20vh;
//                                               min-width: 20rem;
//                                               background-color: ${this.color};
//                                               margin: 1rem;'>
//
//                                     <h4 style="color:white"> ${nombre} <h4>
//                                </div>
//                                `
//                           box_body.innerHTML += contenido
//           }
//      }
// }
//
// const facil = new Cancion("green")
// // const medio = new Cancion()
// // const dificil = new Cancion()
//
//
// const constructor = document.querySelector("#constructor");
// constructor.addEventListener('click', añadir);
// function añadir(){
//      facil.añadir("cancion fácil");
// }
