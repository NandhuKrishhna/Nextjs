'use client'
import { usePathname } from "next/navigation";

export default function NotFound() {
    const a = usePathname();
    console.log(a)
    return (
        <div className="h-screen flex items-center justify-center text-3xl text-red-500">
            <h1>404 - Page Not Found</h1>
        </div>
    );
}
