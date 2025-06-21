const Likes = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <div>
            <h1>2k likes</h1>
        </div>
    )
}

export default Likes
