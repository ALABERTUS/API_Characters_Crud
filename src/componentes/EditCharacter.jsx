import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const url = "http://localhost:8080/characters"
const EditCharacter = () => {
    const [nombre, setNombre] = useState('')
const [imagen, setImagen] = useState('')
const [descripcion, setDescripcion] = useState('')
const navigate = useNavigate()

const {id} = useParams()
const update = async (e) => {
    e.preventDefault()
    await axios.put(`${url}/${id}`, {name: nombre, img: imagen, description: descripcion})
    navigate("/")
    
}
useEffect(() => {
    const getCharacterById = async () => {
        const  response = await axios.get(`${url}/${id}`)
        setNombre(response.data.name)
        setImagen(response.data.img)
        setDescripcion(response.data.description)
        
    }
    getCharacterById()
}, [id])


  return (
    <div>
         <h3>Edit</h3>

<form onSubmit={update}>
    <div>
        <label>Nombre</label>
        {/** nombre tiene que valer lo que ingresamos en el value del input */}
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
    </div>
    <div>
        <label>Imagen</label>
        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
    </div>
    <div>
        <label>Descripción</label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
    </div>
    <button type="submit">Modificar</button>
</form>
    </div>
  )
}

export default EditCharacter