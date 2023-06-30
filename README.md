# pruebagearelectricfrontend-santiagochauta

## Instalacion de modulos de desarrollo

Ejecutar el siguiente comando

```
npm install
```

## Framework utilizado

Se realiza el proyecto con el framework de Vue3 ya que permite renderizar elementos html de una manera bastante facil por medio del uso de 
componentes, en este caso facilita la visualización de los datos que se insertan el tabla html.

Por otra parte el framework trabaja con javascript, lenguaje bastante comodo para trabajar lo que facilita la codificación.

## Modulos extra que utiliza el aplicativo

### Sweetalert 
El aplicativo hace uso del modulo sweetalert para proporcionar ventanas modales con mejor estetica faciles de configurar

### Axios
Proporciona funciones que permiten realizar llamados a API's de manera más comoda

##  Configuración conexion al backend

En el archivo ``` src/helpers/AsistentesApi.js ``` encontrara el siguiente fragmento de codigo, el cual
permite la conexion al backend que realiza las peticiones a la base de datos. por defecto el servidor backend esta corriendo
en el puerto 3000, si por algún motivo esta corriendo en otro puerto, debe corregirlo aqui

```
const asistentesApi  =axios.create({
    baseURL:'http://localhost:3000/asistentes'
})
```

## Compilar y corre la aplicacion

Ejecutar el siguiente comando

```
npm run serve
```

# Nota

De ser posible correr en el mismo host que el servidor backend para facilitar la conexión entre las aplicaciones



