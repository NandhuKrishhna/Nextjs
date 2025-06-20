
const page = async ({ searchParams }) => {
    const search = await searchParams;
    console.log(search);
    console.log("Careers page loaded");
    return (
        <div>
            <h1>Careers Page....</h1>
        </div>
    )
}

export default page
