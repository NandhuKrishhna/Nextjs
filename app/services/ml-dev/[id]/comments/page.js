const page = async ({ params }) => {
    const { id } = await params
    return (
        <div>
            <h1>All comments <b>{id}</b> Page</h1>
            <h2> Loading all the comments..........</h2>
        </div>
    )
}

export default page
