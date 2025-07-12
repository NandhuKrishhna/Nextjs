'use client'
const Button = ({ handleClick }) => {

    return (
        <button
            className="bg-indigo-400 py-1 px-4 cursor-pointer rounded-lg text-white text-2xl hover:bg-indigo-500"
            onClick={handleClick}>
            Click</button>
    )
}

export default Button
