import { NavLink } from "react-router-dom"
import ShowCharacters from "../componentes/ShowCharacters.jsx"

const Home = () => {
  return (
    <div>
        <NavLink to="Create"> <button>Crear</button> </NavLink>
        <ShowCharacters/>
    </div>
  )
}

export default Home