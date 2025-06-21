import Link from "next/link"
import Views from "../_components/Views";
import Likes from "../_components/Likes";
import Comments from "../_components/Comments";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            <Link href="/products/3">Product 3</Link>
            <Link href="/products/4">Product 4</Link>
            <Link href="/products/5">Product 5</Link>
            <Suspense fallback={<div>
                <h1>Loading Views...</h1>
            </div>}> <Views /></Suspense>
            <Suspense fallback={<div>
                <h1>Loading likes...</h1>
            </div>}> <Likes /></Suspense>
            <Suspense fallback={<div>
                <h1>Loading comments...</h1>
            </div>}> <Comments /></Suspense>
        </div>
    );

}