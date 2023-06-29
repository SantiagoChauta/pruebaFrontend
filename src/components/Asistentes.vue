<template>
    <h1>Evento de Bienvenida
    </h1>
    <div class="table__container">
        <Table 
            class="table__layout" 
            :asistentes="asistentes"
            @stateToggle="changeState"
            @delete="deleteAsistente"
            @edit="editAsistente"
            />
    </div>

    <div class="buttons__container">
        <button @click="prevPage()"> - Prev</button>
        <button @click="nextPage()">Next +</button>
    </div>
    <button class="agregar">Agregar Asistente</button>

    <Formulario/>

  
</template>

<script>

import Table from './table.vue'
import Asistentes from '@/helpers/AsistentesApi'
import Formulario from './formulario.vue'

export default {

    data(){
        return{
            asistentes:[],
            page:0
        }
    },
    components:{
        Formulario,
        Table,

    },
    methods:{
        async getAsistentes(){
            this.asistentes = await Asistentes.getAsistentesByPage(this.page)
        },
        nextPage(){
            if(this.asistentes.length<10) return
            this.page++
            this.getAsistentes()
        },
        prevPage(){
            if(this.page==0) return 
            this.page--
            this.getAsistentes()
        },
        async changeState(tipoid,numid,estado){
            await Asistentes.patchAsistencia(tipoid,numid,estado)
            this.getAsistentes()
        },
        async deleteAsistente(tipoid,numid){
            const resp = await Asistentes.deleteAsistente(tipoid,numid)
            alert(resp)
            this.getAsistentes()
        },
        async editAsistente(asistente){
            console.log(asistente.nombre);
            console.log(asistente.apellido);
        }
    },
    mounted(){
        this.getAsistentes()
    }
}
</script>

<style scoped>

button{
    margin-top:3rem ;
    padding: 5px 10px;
    background-color: #7ffc03;
    border: none;
    font-weight: 600;
    border-radius: 5px
}

.table__layout{
    margin: 0 auto;
}

.buttons__container{
    max-width: 60rem;
    display: flex;
    justify-content: space-between;
}


</style>