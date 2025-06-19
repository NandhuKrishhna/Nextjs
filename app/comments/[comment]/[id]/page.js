import React from 'react'

const Comment = async ({ searchParams, params }) => {
    const { id } = await params
    return (
        <div>
            <h1>Next inner id : {id}</h1>
        </div>
    )
}

export default Comment
