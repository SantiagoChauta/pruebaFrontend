
import axios from 'axios'



const asistentesApi  =axios.create({
    baseURL:'http://localhost:3000/asistentes'
})


const getTotalAsistentes = async()=>{
    const res = await asistentesApi.get()
    return res.data.total;
}

const getAsistentesByPage = async(page=0)=>{
    const res = await asistentesApi.get(`/${page}`)
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

const Asistentes ={
    deleteAsistente,
    getTotalAsistentes,
    getAsistentesByPage,
    patchAsistencia,
}

export default Asistentes;