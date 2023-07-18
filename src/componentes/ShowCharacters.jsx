import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './showCharacter.css'
import DeleteCharacter from "../componentes/DeleteCharacter.jsx"

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
        <div className="body">
        <div className="contenedor">
            <div>
                <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>
            </div>
            
            {
                characters.map(character => (
                    <div key={character.id} className="card">
                        <NavLink to={`/edit/${character.id}`}><button className="btn-edit">Editar</button></NavLink>
                        <img src={character.img} alt="" className="img" />
                        <h2 >{character.name}</h2>
                        <p>{character.description}</p>
                        <DeleteCharacter id={character.id} onDelete={getAllCharacters} /> 
                    </div>
                ))
            }

        </div>
        </div>
    )
}

export default ShowCharacters