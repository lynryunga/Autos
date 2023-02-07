// variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); //Año actual
const min = max - 10;


// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos();//Muestra los automoviles al cargar

  //Llena las opciones de años
  llenarSelect();
});


//Funciones
function mostrarAutos() {
  autos.forEach( auto => {

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('P');

    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - ${transmision} - $${precio} - ${color}
        `;

      // Insertar en el HTML
      resultado.appendChild(autoHTML);
  })
}

//Genera las opciones de años en el select
function llenarSelect() {

  for( let i = max; i >= min; i-- ){
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones de año al select
  }

}