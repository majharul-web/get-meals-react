import React from 'react';
import { useState, useEffect } from "react";

const Food = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);
    return (
        <div>
            <h1>foods</h1>
            <h2>{foods.length}</h2>
        </div>
    );
};

export default Food;