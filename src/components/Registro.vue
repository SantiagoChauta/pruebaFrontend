<template>

  <div class="formulario">

    <div class="formulario__container">
    <h1 class="formulario__header">Inscripción</h1>
    <form @submit="sendData" class="form">
    <div class="form__display">
      <div class="campo">
        <label for="nombre">Nombres:</label>
        <input
          name="nombre"
          type="text"
          placeholder="Nombres"
          v-model="asistente.nombre"
          required
        />
      </div>

      <div class="campo">
        <label for="apellidos">Apellidos:</label>
        <input
          name="apellidos"
          type="text"
          placeholder="Apellidos"
          v-model="asistente.apellido"
          required
        />
      </div>

      <div v-if="!edit" class="campo">
        <label for="tipoDocumento">Tipo de Documento:</label>
        <select
          name="tipoDocumento"
          v-model="asistente.tipodocumento"
          required
        >
          <option value="CC">C.C.</option>
          <option value="CE">C.E.</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>

      <div v-if="!edit" class="campo">
        <label for="numeroDocumento">Numero de Documento:</label>
        <input
          name="numeroDocumento"
          type="text"
          placeholder="Número de Documento"
          v-model="asistente.numerodocumento"
          required
        />
      </div>

      <div class="campo">
        <label for="telefono">Telefono:</label>
        <input
          name="telefono"
          type="tel"
          placeholder="Telefono"
          v-model="asistente.telefono"
          required
        />
      </div>

      <div class="campo">
        <label for="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          v-model="asistente.email"
          required
        />
      </div>

      
      
    </div>
    <div class="buttons_container">
        <button class="btn save" v-if="edit" type="submit">Actualizar</button>
        <button class="btn save" v-else type="submit">Registrar</button>
        <button class="btn cancel" @click="$emit('close')">Cancelar</button>
      </div>
  </form>
  </div>

  </div>
  
</template>

<script>
export default {
  props: {
    asistente: {
      type: Object,
      default: {
        nombre: "",
        apellido: "",
        tipodocumento: "",
        numerodocumento: "",
        telefono: "",
        email: ""
      },
    },
    edit:{
        type:Boolean,
        default:false
    }

  },
  emits: {
    saveAsistente: null,
    close:null
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      this.$emit("saveAsistente", this.asistente);
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kurale&display=swap');
.formulario{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
}

.formulario__container{
    width: 50%;
    background-color: white;
    border-radius:5rem;
    color:black;
    font-family: 'Kurale';
}

.formulario__header{
    margin: 2rem auto;
    font-size: 5rem;
}

.form__display{
    display: grid;
    padding: 1rem 5rem;
    column-gap: 3rem;
    padding-top: 0;
    grid-template-columns: repeat(2,1fr);
}

select{
    width: 15rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
}

.campo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:1rem 0;
}

input{
    border: none;
    border-bottom: 1px solid black;
}

.buttons_container{
    padding-bottom: 2rem;
    display: flex;
    gap: 10rem;
    justify-content: center;
}

.btn{
    border: none;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 5px;
}

.cancel{
    background-color: #e32712;
}

.save{
    background-color: palegreen;
}


@media (max-width: 1430px) { 

    .formulario__container{
        width: 50%;
    }

    .formulario__header{
        font-size: 3rem;
    }

    .form__display{
        grid-template-columns: 1fr;
        padding: 1.5rem;
        font-size: 1.5rem;
    }
    .buttons_container{
        gap: 2rem;
    }
    .campo{
        justify-content: space-between;
    }
    select{
        width: 10rem;
    }
}

@media (max-width:700px ) { 
    .formulario__container{
        width: 80%;
    }
    
}


</style>