'use client';

import { useState } from "react";
import Button from "./Button";

const Likes = () => {
    const [count, setCount] = useState(0);
    console.log(useState);
    console.log(count)
    if (typeof localStorage !== "undefined") {
        console.log("localStorage is not available");
    }
    console.log("Likes component loaded");
    return (
        <div>e
            <Button />
        </div>
    )
}

export default Likes
