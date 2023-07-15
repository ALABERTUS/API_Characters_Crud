import { NavLink } from "react-router-dom";
import ShowCharacters from "../componentes/ShowCharacters";
import axios from 'axios';

const Home = () => {
    const deleteCharacter = async (id) => {
      await axios.delete(`http://localhost:8080/characters/${id}`);
    };
  
    return (
     <div>
        <div className="button-container">
          <NavLink to="/create"><button>Crear</button></NavLink>
          
        </div>
        <ShowCharacters/>
        
      </div>
    );
  };
  
  export default Home;