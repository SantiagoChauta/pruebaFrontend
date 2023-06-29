<template>
  <table>
    <tr>
        <th>Asistencia</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Tipo de Documento</th>
        <th>Numero de Documento</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Opciones</th>
    </tr>   

    <tr v-for="asistente in asistentes" :key="asistente.tipodocumento + asistente.numerodocumento">
        <td><input type="checkbox" name="asistencia"  @click="$emit('stateToggle',asistente.tipodocumento,asistente.numerodocumento,asistente.estado)" :checked="asistente.estado" ></td>
        <td>{{asistente.nombre}}</td>
        <td>{{asistente.apellido}}</td>
        <td>{{asistente.tipodocumento}}</td>
        <td>{{asistente.numerodocumento}}</td>
        <td>{{asistente.telefono}}</td>
        <td>{{asistente.email}}</td>
        <td><button @click="$emit('edit',asistente)">edit</button> <button @click="$emit('delete',asistente.tipodocumento,asistente.numerodocumento)">Delete</button></td>
    </tr>

    

  </table>
</template>

<script>
export default {

    props:{
       asistentes:{
        type:Array,
        required:true,
        default:[]
       }
    }

}
</script>

<style scoped>

table{
    table-layout: fixed;
    border: 2px solid #e1e1e1;
    background-color: white;
    color: black;
}

th, td {
    width: 15rem;
    height: 4rem;
    word-wrap: break-word;
}

</style>