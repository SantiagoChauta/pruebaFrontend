<template>
  <table>
    <tr>
      <th>Asistencia</th>
      <th>Apellidos</th>
      <th>Nombres</th>
      <th>Tipo de Documento</th>
      <th>Número de Documento</th>
      <th>Telefono</th>
      <th>Email</th>
      <th>Opciones</th>
    </tr>

    <tr
      v-for="asistente in asistentes"
      :key="asistente.tipodocumento + asistente.numerodocumento"
    >
      <td>
        <input
          type="checkbox"
          name="asistencia"
          @click="
            $emit(
              'stateToggle',
              asistente.tipodocumento,
              asistente.numerodocumento,
              asistente.estado
            )
          "
          :checked="asistente.estado"
        />
      </td>
      <td>{{ asistente.apellido }}</td>
      <td>{{ asistente.nombre }}</td>
      <td>{{ asistente.tipodocumento }}</td>
      <td>{{ asistente.numerodocumento }}</td>
      <td>{{ asistente.telefono }}</td>
      <td>{{ asistente.email }}</td>
      <td class="buttons">
        <button class="edit btn" @click="$emit('edit', asistente)">
          <img src="../assets/edit-icon.svg" alt="edit" >
        </button>
        <button
          class="delete btn"
          @click="
            $emit('delete', asistente.tipodocumento, asistente.numerodocumento)
          "
        >
          <img src="../assets/delete-icon.svg" alt="delete" >
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    asistentes: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
  color: black;
  border-collapse: collapse;
}

th,
td {
  width: 15rem;
  height: 4rem;
  word-wrap: break-word;
}

th{
  background-color: black;
  color: white;
  margin-bottom: 1rem;
  font-size: 1.75 rem;
}

tr:nth-child(odd){
  background-color:#e1e1e1 ;
}

.buttons{
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin:0 auto;
  padding:5px 0; 
}

.btn{
  background-color: transparent;
}

.edit{
  border-radius: 5px;
  border: none;
}

.delete{
  border-radius: 5px;
  border: none;
}
</style>