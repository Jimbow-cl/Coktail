import { Link } from "react-router-dom";

function Menu() {

    return (
        <nav>

            <Link to="/"><button>Home</button></Link>
            <Link to="/recette"><button>Recettes</button></Link>
        </nav>
    )
}

export default Menu