<template>
  <h1 class="title">Special Design</h1>

    <div class="top">
        <Filter 
        @buscar="setFiltro"
        @restart="restartFiltro"
        />
        <h3 class="total-asis">Numero de asistentes: {{total}}</h3>
    </div>
  
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
    <button class="btn" @click="prevPage()">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/left-squared--v1.png"
        alt="flecha izquierda"
      />
    </button>
    <button class="btn" @click="nextPage()">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/right-squared--v1.png"
        alt="flecha derecha"
      />
    </button>
  </div>
  <button class="btn" @click="showForm = true">
    <img src="../assets/plus-icon.svg" alt="Agregar" />
  </button>
  <Form
    v-if="showForm"
    @saveAsistente="saveAsistente"
    @close="
      showForm = false;
      edit = false;
      asisData = {};
      getAsistentes();
    "
    :asistente="asisData"
    :edit="edit"
  />
</template>

<script>
import Table from "./TableComponent.vue";
import Form from "./Registro.vue";
import Filter from "./Filter.vue";

import Asistentes from "@/helpers/AsistentesApi";
import swal from "sweetalert";

export default {
  data() {
    return {
      asistentes: [],
      page: 0,
      showForm: false,
      edit: false,
      asisData: {},
      total:0,
      isFiltred:false,
      filterOption:'',
      filterValue:'',
      filterDocument:''
    };
  },
  components: {
    Filter,
    Form,
    Table,
  },
  methods: {
    async getTotal(){
        this.total = await Asistentes.getTotal()
    },
    async getAsistentes() {
      this.asistentes = await Asistentes.getAsistentesByPage(this.page);
    },

    nextPage() {
      if ( this.total <= (this.page+1)*10) return; 
      this.page++;
      if(!this.isFiltred){
        this.getAsistentes()
      }else{
        this.buscarAsistentes()
      }
    },
    prevPage() {
      if (this.page == 0) return;
      this.page--;
      if(!this.isFiltred){
        this.getAsistentes();
      }else{
        this.buscarAsistentes();
      }
    },
    async changeState(tipoid, numid, estado) {
      await Asistentes.patchAsistencia(tipoid, numid, estado);
      this.getAsistentes();
    },

    setFiltro(opcion,valor,documento){
      if(valor==''){
        this.getAsistentes()
        return
      }
      this.page=0
      this.isFiltred=true
      this.filterOption = opcion
      this.filterValue=valor.toLowerCase()
      this.filterDocument=documento
      this.buscarAsistentes()
    },
    restartFiltro(){
      this.page=0
      this.isFiltred=false
      this.getAsistentes()
      this.getTotal()
    },
    async buscarAsistentes(){
      const res = await Asistentes.filtrarAsistentes(this.filterOption,this.filterValue,this.filterDocument, this.page)
      this.asistentes = res.filas 
      this.total = res.total
    },
    async deleteAsistente(tipoid, numid) {
      swal({
        title: "¿Seguro?",
        text: "¿De verdad quieres eliminar estos datos?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then( async(option) => {
        if (option) {
            const resp = await Asistentes.deleteAsistente(tipoid,numid)
            this.getAsistentes()
            this.getTotal()
            swal(resp, {
            icon: "success",
            });
        }
      });

    },

    editAsistente(asistente) {
      this.asisData = asistente;
      this.edit = true;
      this.showForm = true;
    },

    async saveAsistente(asistente) {
      let res;
      if (this.edit) {
        res = await Asistentes.updateAsistente(asistente);
        this.edit = false;
      } else {
        res = await Asistentes.postAsistente(asistente);
      }
      const m = res.message;
      let icono = "error"
      if (res.status == "ok") {
        this.showForm = false;
        icono = 'success'
      }
      swal({
        text: m,
        icon: icono,
      })
      this.asisData={}
      this.getTotal()
      this.getAsistentes();
    },
  },
  mounted() {
    this.getAsistentes()
    this.getTotal()
  },
};
</script>

<style scoped>

.top{
    max-width: 120rem;
    width: 90%;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
}

.total-asis{
    text-align: right;
    font-size: 2.5rem;
}

.title {
  color: transparent;
  font-family: "maghody", "Alex Brush", cursive;
  background: linear-gradient(to right, #360033 30%, #0b8793 100%);
  margin: 0;
  font-size: 8rem;
  -webkit-background-clip: text;
  background-clip: text;
}
.table__layout {
  margin: 0 auto;
}

.btn {
  margin-top: 3rem;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
}

.btn:hover {
  transform: scale(1.5);
}

.buttons__container {
  display: flex;
  justify-content: space-between;
  max-width: 60%;
}

</style>