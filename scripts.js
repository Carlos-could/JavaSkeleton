class Cancion {
     constructor(){
          this.añadir = function(nombre){
               const box_body = document.querySelector("#box");
               const contenido = `
                               <div style=    'float:left;
                                              width: calc(33.3% - 1rem);
                                              height: 20vh;
                                             min-width: 20rem;
                                              background-color: red;
                                              border: 1px solid white'>

                                    <h4 style="color:white"> ${nombre} <h4>
                               </div>
                               `
                          box_body.innerHTML += contenido
          }
     }
}

const facil = new Cancion()
const medio = new Cancion()
const dificil = new Cancion()

facil.añadir("#b9770e")
medio.añadir("blue")
dificil.añadir("red")


// const cancion = {
//      añadir: function (cancion, bg){
//           const box_body = document.querySelector("#box")
//           const contenido = `
//                <div style=    'float:left;
//                               width: calc(33.3% - 1rem);
//                               height: 20vh;
//                               min-width: 20rem;
//                               background-color: ${bg};
//                               border: 1px solid white'>
//
//                     <h4 style="color:white"> ${cancion}<h4>
//                </div>
//                `
//           box_body.innerHTML = contenido
//      }
// }
//
// cancion.añadir('Volvere', '#b9770e')
