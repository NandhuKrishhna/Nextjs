export default async ({ params }) => {
    console.log(await params)
    return (
        <div className="flex min-h-screen justify-center items-center text-3xl font-sans ">
            <h1 className="bg-amber-300 text-black p-3 rounded-lg">Comments Page</h1>
        </div>
    )
}
