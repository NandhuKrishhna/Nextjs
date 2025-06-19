import Link from "next/link"

export const metadata = {

    title: {
        template: "%s | Services",
        default: "Services"
    }


}
const Services = () => {
    return (
        <div className=" min-h-screen text-center text-3xl flex flex-col  justify-center items-center gap-6">
            <h2 className="text-center">Services page </h2>
            <Link href='/services/app-development'>App Development</Link>
            <Link href='/services/web-development'>Web Development</Link>
            <Link href='/services/ui-development'>UI Development</Link>
            <Link href='/services/game-development'>Game Development</Link>
        </div>
    )
}

export default Services
