<template>
  
  <div class="filter__container">
    <label for="opcion" class="filter__label">Buscar:</label>
    <select name="opcion" v-model="opcion" class="filter__option" >
          <option @click="showDocumentType=false" value="name" >Nombre</option>
          <option @click="showDocumentType=false" value="email">Correo</option>
          <option @click="showDocumentType=true" value="document">Documento</option>
    </select>
    <div class="inputs">
        <select v-if="showDocumentType" v-model="documento" name="document" class="document__option" >
          <option value="CC" >C.C.</option>
          <option value="CE">C.E.</option>
          <option value="Pasaporte">Pasaporte</option>
         </select>
        <input  v-model="valor" class="filter__input" type="text">
        <button @click="$emit('buscar',opcion,valor,documento)" class="btn" ><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="Buscar"/></button>
        <button @click="$emit('restart')" class="btn"> <img width="30" height="30" src="../assets/restart-icon.svg" alt="restart data" ></button>
    </div>
    
  </div>
</template>

<script>
export default {
    

    data(){
        return{
            valor:'',
            opcion:'name',
            documento:'CC',
            showDocumentType:false
        }
    }
}
</script>

<style scoped>

.filter__container{
    text-align: left;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.filter__label{
    font-size: 1.9rem;
}

.filter__option{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
}
.inputs{
    display: flex;
    align-items: center;
    width: 100%;
    gap: .5rem;
}

.filter__input{
    width: 90%;
    height: 2.5rem;
}

.btn{
    background-color: transparent;
    border: none;
}

.document__option{
    margin-right: 2rem;
}


</style>