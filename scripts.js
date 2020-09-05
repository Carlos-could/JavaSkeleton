descargarBikini(20)

function descargarBikini(x) {
    const apo = `https://pixabay.com/api/?key=18166422-c39881a9559fd66a7d6c00c5c&q=bikini&per_page=${x}&image_type=photo&pretty=true`

    // llamado Fetch
    fetch(apo)
      .then(respuesta => respuesta.json() )
      .then(datos => {
           imprimirHTML(datos.hits );
           console.log(datos.hits)
      });
}

function imprimirHTML(datos){
     datos.forEach(usuario => {

          const li = document.createElement("li");

          const {tags,userImageURL } = usuario;

          li.innerHTML = `
          ID: ${tags} <br>
          <img src="${userImageURL}" style=width:100px>
          `;

          document.querySelector("#box_fetch").appendChild(li);
     });
}


// function imprimirHTML (data) {
//
//   // lista los datos uno x uno
//   data.forEach(usuario => {
//
//     // crea Lista => li
//     const li = document.createElement('li');
//
//     // asigna variable a cada dato
//     const { user, likes, webformatURL } = usuario;
//
//     //inserta el dato en HTML
//     li.innerHTML = `
//         Nombre: ${user} ${likes}
//         <img src="${webformatURL}">
//     `;
//     document.querySelector('#box_fetch').appendChild(li);
//   });
//
// }
//
// const boton_fetch = document.querySelector("#boton_fetch");
// boton_fetch.addEventListener('click', descargarBikini);


// ............................ Object Constructor

class Cancion {
     constructor(color){
          this.color = color;
          this.añadir = function(nombre){
               const box_body = document.querySelector("#box_constructor");
               const contenido = `
                               <div style=   'float:left;
                                              width: calc(33.3% - 2rem);
                                              height: 20vh;
                                              min-width: 20rem;
                                              background-color: ${this.color};
                                              margin: 1rem;'>

                                    <h4 style="color:white"> ${nombre} <h4>
                               </div>
                               `
                          box_body.innerHTML += contenido
          }
     }
}

const facil = new Cancion("green")
// const medio = new Cancion()
// const dificil = new Cancion()


const constructor = document.querySelector("#constructor");
constructor.addEventListener('click', añadir);
function añadir(){
     facil.añadir("cancion fácil");
}
