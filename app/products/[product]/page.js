import Link from "next/link";



// export function generateStaticParams() {
//     return [
//         { product: '1' },
//         { product: '2' },
//         { product: '3' },
//         { product: '4' },
//         { product: '5' }
//     ]
// }
const page = async ({ params }) => {
    const { product } = await params;
    console.log(product);
    return (
        <div>
            <h1>Welcome to Our product {product}</h1>
            <p>This is product {product} page.</p>
            <Link href='/products'>Back to Product Page</Link>
        </div>

    )
}

export default page
