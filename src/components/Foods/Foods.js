import React from 'react';
import { useState, useEffect } from "react";
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import "./Food.css"

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayFoods, setDisplayFoods] = useState([]);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setDisplayFoods(data);
            });
    }, []);

    const handleAddProduct = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);

    }

    const handleSearch = (event) => {
        const searchText = event.target.value;
        // console.log(searchText)
        const matchedProduct = foods.filter(food => food.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayFoods(matchedProduct);
        console.log(matchedProduct.length);
    }
    return (

        <>
            <div className="container mt-3">
                <div className="w-50 mx-auto">
                    <input onChange={handleSearch} className="form-control" type="text" placeholder="search food" />
                </div>

            </div>

            <div className="container">
                <div className="row my-4">

                    <div className="col-md-9">
                        <div className="card-container">
                            {
                                displayFoods.map(food => <Food
                                    food={food}
                                    key={food.idMeal}
                                    handleAddProduct={handleAddProduct}
                                >
                                </Food>)
                            }
                        </div>
                    </div>

                    <div className="col-md-3">

                        <Cart cart={cart} key={parseInt((Math.random() * 10000))}></Cart>


                    </div>

                </div>
            </div>
        </>
    );
};

export default Foods;