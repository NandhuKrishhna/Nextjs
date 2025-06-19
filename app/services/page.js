import Link from "next/link"
const Services = () => {
    return (
        <div className=" min-h-screen text-center text-3xl flex flex-col  justify-center items-center gap-6">
            <h2 className="text-center">Services page </h2>
            <Link href='/about'>About</Link>
        </div>
    )
}

export default Services
