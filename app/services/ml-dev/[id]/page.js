const page = async ({ params }) => {
    const { id } = await params
    return (
        <div>

            <h1>The id from the URL is : {id}</h1>
        </div>
    )
}

export default page
