import axios from "axios"
import { useNavigate } from "react-router-dom"

const DeleteCharacter = ({ id, onDelete }) => {
  const navigate = useNavigate()

  const deleteCharacter = async () => {
    const confirmed = window.confirm("¿Quieres eliminar este personaje?")

    if (confirmed) {
      await axios.delete(`http://localhost:8080/characters/${id}`)
      onDelete()
      navigate("/")
    }
  }

  return (
    <div className="delete">
      <button onClick={deleteCharacter}>Eliminar personaje</button>
    </div>
  )
}

export default DeleteCharacter
