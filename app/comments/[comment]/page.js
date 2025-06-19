import React from 'react'

const Comment = async ({ searchParams, params }) => {
    const { comment } = await params
    return (
        <div>
            <h1>Comment Id : {comment}</h1>
        </div>
    )
}

export default Comment
