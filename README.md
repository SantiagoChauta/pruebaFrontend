# pruebagearelectricfrontend-santiagochauta

## Instalacion de modulos de desarrollo

```
npm install
```

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

```
npm run serve
```



