// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmosion = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor div para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); //Año actual
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos();//Muestra los automoviles al cargar

  //Llena las opciones de años
  llenarSelect();
});

//Event listener para los select de busqueda
marca.addEventListener( 'change', (e) => {
  datosBusqueda.marca = e.target.value;
});
year.addEventListener( 'change', (e) => {
  datosBusqueda.year = e.target.value;
});
minimo.addEventListener( 'change', (e) => {
  datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener( 'change', (e) => {
  datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener( 'change', (e) => {
  datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener( 'change', (e) => {
  datosBusqueda.transmision = e.target.value;
});
color.addEventListener( 'change', (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda)
})



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