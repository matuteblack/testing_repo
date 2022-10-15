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

