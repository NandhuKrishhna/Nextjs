'use client'
import { usePathname } from "next/navigation";


const UIDevelopment = () => {
    const a = usePathname();
    console.log(a)
    return (
        <div>
            <h1>UIDevelopment Page</h1>

        </div>
    )
}

export default UIDevelopment
