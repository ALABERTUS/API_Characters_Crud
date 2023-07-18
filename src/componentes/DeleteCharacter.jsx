import axios from "axios"
import { useNavigate } from "react-router-dom"

const DeleteCharacter = ({ id, onDelete }) => {
const navigate = useNavigate()

const deleteCharacter = async () => {
await axios.delete(`http://localhost:8080/characters/${id}`)

    onDelete()
    navigate("/")
}

return (
    <div className="delete">
    <button className="btn-delete" onClick={deleteCharacter}>Eliminar</button>
    </div>
)
}

export default DeleteCharacter
