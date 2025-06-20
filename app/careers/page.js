import { cookies } from "next/headers";

const page = async ({ searchParams }) => {
    const myCookies = await cookies();
    console.log(myCookies)
    console.log("Careers page loaded");
    return (
        <div>
            <h1>Careers Page....</h1>
        </div>
    )
}

export default page
