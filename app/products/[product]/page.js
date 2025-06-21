import Link from "next/link";

export const dynamicParams = false;
export const revalidate = 5;
const page = async ({ params }) => {
    const { product } = await params;
    console.log("Product Id : ", product);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Link className="bg-yellow-300 text-black m-1 rounded-lg text-xl p-2 hover:bg-amber-500" href='/products'>Back to Product Page</Link>
            <h1 className="text-3xl">Welcome to Our product {product}</h1>
            <p className="text-2xl">This is product {product} page.</p>

        </div>
    )
}

export default page
