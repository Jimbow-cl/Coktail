import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Models(props) {


    return (
        <Card style={{ width: '35rem' }}>
            <Card.Img className="img" variant="top" src={props.strDrinkThumb} />
            <Card.Body>
                <Card.Title>Boisson n°{props.idDrink}, {props.strDrink}</Card.Title>
                <Card.Text>{props.strInstructions}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item ><strong>Type: </strong>{props.strAlcoholic}</ListGroup.Item>
                <div className={`${props.strIngredient1 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong>Ingr: </strong>{props.strIngredient1}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure1}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient2 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient2}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure2}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient3 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient3}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure3}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient4 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong>Ingr: </strong>{props.strIngredient4}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure4}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient5 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient5}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure5}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient6 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient6}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure6}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient7 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong>Ingr: </strong>{props.strIngredient7}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure7}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient8 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient8}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure8}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient9 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient9}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure9}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient10 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong>Ingr: </strong>{props.strIngredient10}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure10}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient11 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient11}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure11}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient12 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient12}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure12}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient13 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong>Ingr: </strong>{props.strIngredient13}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure13}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient14 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient14}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure14}</ListGroup.Item></div>
                    </div>
                </div>
                <div className={`${props.strIngredient15 == null ? "effacer" : "row"}`}>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item><strong>Ingr: </strong>{props.strIngredient15}</ListGroup.Item></div>
                    </div>
                    <div className='col-6'>
                        <div className='row'><ListGroup.Item ><strong> Mesure: </strong>{props.strMeasure15}</ListGroup.Item></div>
                    </div>
                </div>


            </ListGroup>

        </Card >
    );
}

export default Models;

