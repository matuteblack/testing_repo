var app = new Vue
({
  el: '#app',

  data:
    {
      message:          'Hola Vue!',
      botonShow:        true,
      botonIf:          true,
      botonComparado:   'si',
      codHtml:          '<h1>Titular insertado con Vue</h1>',
      checkeado:        false,
      listaDeElementos: [],
      listaImg: []
    },

  methods:
    {
      unaFuncion: function()
        {
          console.log('Texto en consola desplegado por la función');
        },
      eventoClick: function()
        {
          console.log('Clickeaste el botón');
        },
      eventoKeyDown: function()
        {
          alert('Presionaste enter!');
        },
      eventoKeyUp: function()
        {
          alert('Soltaste la tecla enter!');
        }
    }
});

setTimeout(() =>
  {
    app.codHtml = '<h3>No te duermas</h3>'
  }, 2000);

setTimeout(() =>
  {
    app.codHtml = '<h1>Dormiste</h1>'
  }, 4000);


app.listaDeElementos.push(1);
app.listaDeElementos.push(2);
app.listaDeElementos.push(3);


for (let i = 0; i < app.listaDeElementos.length; i++)
  {
    console.log(app.listaDeElementos);
  }

// FOR IN TOMA LOS INDICES (KEYS). FOR OF TOMA LOS VALORES EN ESOS INDICES (VALUES).
for (let item in app.listaDeElementos)
  {
    console.log(app.listaDeElementos[item]);
  }



// OFFMETA: CAROUSEL CON V-FOR

const listaImg = [{
  "id": 1,
  "url": "./assets/img/imagen-1.jpg"
},
{
  "id": 2,
  "url": "./assets/img/imagen-2.jpg"
},
{
  "id": 3,
  "url": "./assets/img/imagen-3.jpg"
},
{
  "id": 4,
  "url": "./assets/img/imagen-4.jpg"
},
{
  "id": 5,
  "url": "./assets/img/imagen-5.jpg"
},
{
  "id": 6,
  "url": "./assets/img/imagen-6.jpg"
}];


// Recorrer array y guardar en propiedad de Vue:
listaImg.forEach(e =>
  {
    app.listaImg.push(e.url);
  });

