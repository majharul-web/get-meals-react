import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.food;
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingBasket} />
    return (

        <div className="card" style={{ maxWidth: "540px" }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <img src={strMealThumb} className="img-fluid img-thumbnail" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">Name: {strMeal}</h5>
                        <p className="card-text"><span className="fw-bolder">Details: </span>{strInstructions.slice(0, 100)}</p>
                        <button onClick={() => props.handleAddProduct(strMeal)} className="btn btn-danger">{element} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;