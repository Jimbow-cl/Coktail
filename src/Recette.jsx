import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Menu from "./layout/Menu";
import Models from "./models/modelRecette";

function Recette() {

    const [api, setApi] = useState([]);
    const [coktail, setCoktail] = useState("margarita");



    const search = (e) => {
        setCoktail(e.target.value);
    };

    async function Api() {
        let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coktail}`);
        console.log('reponse', response);
        let donnees = await response.json();
        console.log('données', donnees.drinks);
        setApi(donnees.drinks);
    }


    const RenderMyArray = () => {
        if (api == null) {
            return (
                <div> <p>Oh nooon! cette recette n'existe pas! Continuez en modifiant votre recherche </p></div>
            )
        }
        else {
            return api.map((item, key) => {
                return (
                    <Models
                        id={key}
                        strDrinkThumb={item.strDrinkThumb}
                        idDrink={item.idDrink}
                        strDrink={item.strDrink}
                        strInstructions={item.strInstructions}
                        strAlcoholic={item.strAlcoholic}
                        strIngredient1={item.strIngredient1}
                        strIngredient2={item.strIngredient2}
                        strIngredient3={item.strIngredient3}
                        strIngredient4={item.strIngredient4}
                        strIngredient5={item.strIngredient5}
                        strIngredient6={item.strIngredient6}
                        strIngredient7={item.strIngredient7}
                        strIngredient8={item.strIngredient8}
                        strIngredient9={item.strIngredient9}
                        strIngredient10={item.strIngredient10}
                        strIngredient11={item.strIngredient11}
                        strIngredient12={item.strIngredient12}
                        strIngredient13={item.strIngredient13}
                        strIngredient14={item.strIngredient14}
                        strIngredient15={item.strIngredient15}
                        strMeasure1={item.strMeasure1}
                        strMeasure2={item.strMeasure2}
                        strMeasure3={item.strMeasure3}
                        strMeasure4={item.strMeasure4}
                        strMeasure5={item.strMeasure5}
                        strMeasure6={item.strMeasure6}
                        strMeasure7={item.strMeasure7}
                        strMeasure8={item.strMeasure8}
                        strMeasure9={item.strMeasure9}
                        strMeasure10={item.strMeasure10}
                        strMeasure11={item.strMeasure11}
                        strMeasure12={item.strMeasure12}
                        strMeasure13={item.strMeasure13}
                        strMeasure14={item.strMeasure14}
                        strMeasure15={item.strMeasure15} />

                );
            })
        }
    };

    return (
        <div className="container-fluid">
            <div className="recherche ">
                <Menu />
                <div className="row recherche2"><p> Bienvenue sur la page des Recettes!</p>
                    <p> Merci de taper le nom du coktail que vous souhaiteriez :</p>
                    <input type="text" onChange={search} placeholder="Ici le nom de votre coktail" />
                    <div className="empty2"></div>
                    <button onClick={Api}> Rechercher</button>
                    <p> Vous avez recherché : {coktail} , <Badge bg="success">{api?.length} Résultat(s)

                    </Badge> </p>
                </div>

            </div>
            <div className="empty"></div>
            <div className=" row coktail align ">
                {RenderMyArray()}
            </div>

        </div>)

}

export default Recette