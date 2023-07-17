import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const url = "http://localhost:8080/characters";

const CreateCharacter = () => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editNombre, setEditNombre] = useState('');
  const [editImagen, setEditImagen] = useState('');
  const [editDescripcion, setEditDescripcion] = useState('');
  const [characters, setCharacters] = useState([]);
  const [editCharacterId, setEditCharacterId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await axios.get(url);
    setCharacters(response.data);
  };

  const createCharacter = async (e) => {
    e.preventDefault();
    await axios.post(url, { name: nombre, img: imagen, description: descripcion });
    fetchCharacters();
    navigate('/');
    
  };

  const deleteCharacter = async (id) => {
    await axios.delete(`${url}/${id}`);
    fetchCharacters();
    navigate('/');
  };

  const startEditCharacter = (id, name, img, description) => {
    setEditCharacterId(id);
    setEditNombre(name);
    setEditImagen(img);
    setEditDescripcion(description);
  };

  const cancelEditCharacter = () => {
    setEditCharacterId(null);
    setEditNombre('');
    setEditImagen('');
    setEditDescripcion('');
  };

  const saveEditCharacter = async (id) => {
    await axios.put(`${url}/${id}`, { name: editNombre, img: editImagen, description: editDescripcion });
    fetchCharacters();
    cancelEditCharacter();
    navigate('/');
  };

  return (
    <>
    <div className="contenedorfondo">
      <h2>Crear un personaje</h2>

      <form onSubmit={createCharacter}>
        <div>
          <label >Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label >Imagen</label>
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>
        <div>
          <label >Descripción</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <button type="submit">Crear personaje</button>
      </form>

      <h2>Personajes</h2>

      {characters.map((character) => (
        <div key={character.id}>
          {editCharacterId === character.id ? (
            <>
              <input type="text" value={editNombre} onChange={(e) => setEditNombre(e.target.value)} />
              <input type="text" value={editImagen} onChange={(e) => setEditImagen(e.target.value)} />
              <input type="text" value={editDescripcion} onChange={(e) => setEditDescripcion(e.target.value)} />
              <button onClick={() => saveEditCharacter(character.id)}>Guardar</button>
              <button onClick={cancelEditCharacter}>Cancelar</button>
            </>
          ) : (
            <>
              <h3>{character.name}</h3>
              <p>{character.description}</p>
              <button onClick={() => deleteCharacter(character.id)}>Borrar</button>
              <button onClick={() => startEditCharacter(character.id, character.name, character.img, character.description)}>Editar</button>
              </>
            )}
          </div>
        ))}
    
        </div>
      </>
    );
  };
  
  export default CreateCharacter;