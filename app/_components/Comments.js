
const Comments = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            <h1>5 k comments</h1>
        </div>
    )
}

export default Comments
