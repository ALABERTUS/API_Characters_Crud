import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    const response = await axios.get(`http://localhost:8080/characters/${id}`);
    const character = response.data;
    setNombre(character.name);
    setImagen(character.img);
    setDescripcion(character.description);
  };

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/characters/${id}`, {
      name: nombre,
      img: imagen,
      description: descripcion,
    });
    navigate("/");
  };

  return (
    <>
      <h2>Editar personaje</h2>

      <form onSubmit={update}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Actualizar personaje</button>
      </form>
    </>
  );
};

export default EditCharacter;
