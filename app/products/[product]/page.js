import ProductCard from "@/app/_components/ProductCard";
import Link from "next/link";

export const dynamicParams = false;
export const revalidate = 5;
const page = async ({ params }) => {
    const { product } = await params;
    console.log("Product Id : ", product);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Welcome to Our product {product}</h1>
            <p>This is product {product} page.</p>
            <Link className="bg-yellow-300 text-black m-1 rounded-lg text-xl p-4 hover:bg-amber-500" href='/products'>Back to Product Page</Link>
            <p>{new Date().toLocaleString()}</p>
            <ProductCard />
        </div>
    )
}

export default page
