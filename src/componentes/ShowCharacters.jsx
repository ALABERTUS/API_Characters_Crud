import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import DeleteCharacter from "../componentes/DeleteCharacter";
import './showCharacter.css'

const url = "http://localhost:8080/characters"

const ShowCharacters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
        console.log(data)
    }

    return (
        <div className="contenedor">
            <div>
                <NavLink to="/create">
                    <button className="btn btn-primary">Create</button>
                </NavLink>
            </div>
            {characters.map(character => (
                <div key={character.id} className="card">
                    <img src={character.img} alt="" className="img" />
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                    <NavLink to={`/edit/${character.id}`}><button>Editar</button></NavLink>
                    <DeleteCharacter id={character.id} onDelete={getAllCharacters} />
                </div>
            ))}
        </div>
    )
}

export default ShowCharacters
