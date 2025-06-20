'use client'
const Button = ({ handleClick }) => {

    return (
        <button
            className="bg-indigo-400 py-2 px-4 cursor-pointer rounded-lg text-white text-xl hover:bg-indigo-500"
            onClick={handleClick}>
            Click</button>
    )
}

export default Button
