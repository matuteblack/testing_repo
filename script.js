var app = new Vue
({
  el: '#app',

  data:
    {
      email: '',
      checkboxId: 0,
      listaEmail: []
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
        },
      agregar: function()
        {
          const infoMail = 
            {
              email: this.email,
              checkboxId: this.checkboxId++,
              check: false,
              show: true
            }
          this.listaEmail.push(infoMail);
          this.email = '';
        },
      limpiarLista: function()
        {
          this.listaEmail = [];
          this.checkboxId = 0;
        },
      limpiarSeleccion: function()
        { 
          for (let item of this.listaEmail)
            {
              if (item.check) item.show = false;
            }
        }
    }
});


// Spread

function validarSuma(elementoA, elementoB)
  {
    if (!elementoA) return -1;            // si A no es válido, cortar y dar error
    if (!elementoB) return elementoA;     // si B no es válido, devolver sólo A
    const A = +elementoA;                 // el signo + para parsear A (por si es string)
    const B = +elementoB;                 // el signo + para parsear B (por si es string)
    return A + B;
  }