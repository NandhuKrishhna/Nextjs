import Link from "next/link"

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            <Link href="/products/3">Product 3</Link>
            <Link href="/products/4">Product 4</Link>
            <Link href="/products/5">Product 5</Link>
        </div>
    );

}