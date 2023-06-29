<template>
  <h1>Formulario</h1>

  <form>

    <div class="form__layout">
    <div class="campo">
        <label for="nombre">Nombres:</label>
        <input name="nombre" type="text" placeholder="Nombres" required>
    </div>

    <div class="campo">
        <label for="apellidos">Apellidos:</label>
        <input name="apellidos" type="text" placeholder="Apellidos" required>
    </div>

    <div class="campo">
            <label for="tipoDocumento">Tipo de Documento:</label>
            <select name="tipoDocumento" id="pais" required>
                    <option value="CC">C.C.</option>
                    <option value="CE">C.E.</option>
                    <option value="Pasaporte">Pasaporte</option>
            </select>
    </div>

    <div class="input__container">
        <label for="numeroDocumento">Numero de Documento:</label>
        <input name="numeroDocumento" type="text" placeholder="Número de Documento" required>
    </div>

    <div class="input__container">
        <label for="telefono">Telefono:</label>
        <input name="telefono" type="tel" placeholder="Telefono" required>
    </div>

    <div class="input__container">
        <label for="email">Email:</label>
        <input name="email" type="email" placeholder="Email" required>
    </div>

    <button type="submit">Registrar</button>

    </div>


  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>