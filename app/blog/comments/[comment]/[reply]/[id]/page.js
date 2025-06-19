import { notFound } from "next/navigation";

export default async ({ params }) => {
    console.log(await params);
    const { id, comment, reply } = await params
    if (isNaN(id)) {
        return notFound()
    }
    return (
        <div className="flex min-h-screen justify-center items-center text-3xl font-sans ">
            <h1 className="bg-amber-300 text-black p-3 rounded-lg">Reply - Reply : {id}</h1>
        </div>
    )
}
