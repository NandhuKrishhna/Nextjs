'use client';

import { useState } from "react";
import Button from "./Button";

const ProductCard = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1 className="text-xl font-bold">Count :{count}</h1>
            <Button handleClick={handleClick} />
        </div>
    )
}

export default ProductCard
