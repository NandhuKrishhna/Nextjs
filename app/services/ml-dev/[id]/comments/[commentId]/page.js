const CommentId = async ({ params }) => {
    console.log(await params)
    const { commentId } = await params
    return (
        <div>
            <p>{commentId} : Nandhu's Comment</p>
        </div>
    )
}

export default CommentId
