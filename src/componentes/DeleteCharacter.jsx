import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const remove = async () => {
    await axios.delete(`http://localhost:8080/characters/${id}`);
    navigate("/");
  };

  return (
    <>
      <h2>Eliminar personaje</h2>
      <p>¿Estás seguro de que deseas eliminar este personaje?</p>
      <button onClick={remove}>Eliminar</button>
    </>
  );
};

export default DeleteCharacter;
