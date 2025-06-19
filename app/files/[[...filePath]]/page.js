export default async ({ params }) => {
    const { filePath } = await params
    return (
        <div>
            Files / {filePath?.join("/")}
        </div>
    )
}
