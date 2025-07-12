import Link from "next/link"
import Likes from "../_components/Likes";


export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <Likes />
            <h1>Sample Like</h1>
        </div>
    );

}