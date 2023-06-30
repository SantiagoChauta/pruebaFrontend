
import axios from 'axios'



const asistentesApi  =axios.create({
    baseURL:'http://localhost:3000/asistentes'
})


const getTotal = async()=>{
    const res = await asistentesApi.get()
    return res.data.total;
}

const getAsistentesByPage = async(page=0)=>{
    const res = await asistentesApi.get(`/${page}`)
    return res.data
}

const filtrarAsistentes = async(opcion,valor,documento,page)=>{
    let url=''
    if(opcion=='document'){
        url=`/document/${documento}&${valor}&${page}`
    }else{
        url = `/${opcion}/${valor}&${page}`
    }
    const res = await asistentesApi.get(`${url}`)
    return res.data
}

const deleteAsistente = async(tipoid,numid)=>{
    const res = await asistentesApi.delete(`/${tipoid}&${numid}`)
    return res.data.message
}

const patchAsistencia = async(tipoid,numid,estado)=>{
    estado = !estado
    const res = await asistentesApi.patch(`/${tipoid}&${numid}&${estado}`)
}

const postAsistente = async(asistente) =>{

    const res = await asistentesApi.post('',{
        "nombre":asistente.nombre,
        "apellido":asistente.apellido,
        "tipodocumento": asistente.tipodocumento,
        "numerodocumento": asistente.numerodocumento,
        "telefono": asistente.telefono,
        "email": asistente.email,
        "estado":true,
    })

    const { message, messageError} = res.data
    if(message) return {status:'ok',message}
    return {status:'bad',message:messageError}
}

const updateAsistente = async (asistente)=>{
    const res = await asistentesApi.put('',{
        "nombre":asistente.nombre,
        "apellido":asistente.apellido,
        "tipodocumento": asistente.tipodocumento,
        "numerodocumento": asistente.numerodocumento,
        "telefono": asistente.telefono,
        "email": asistente.email,
    })

    const { message} = res.data
    return {status:'ok',message}
}

const Asistentes ={
    deleteAsistente,
    filtrarAsistentes,
    getTotal,
    getAsistentesByPage,
    patchAsistencia,
    postAsistente,
    updateAsistente
}

export default Asistentes;