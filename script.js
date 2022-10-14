var app = new Vue
({
  el: '#app',

  data:
    {
      email: '',
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
          this.listaEmail.push(this.email);
          this.email = '';
        }
    }
});

