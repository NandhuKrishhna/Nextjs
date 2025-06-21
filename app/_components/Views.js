const Views = async () => {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return (
        <div>
            <h2>10 Views</h2>
        </div>
    )
}

export default Views
