interface Props{
    text: string,
    clickHandler: () => void
}

export default function Button({text, clickHandler}:Props){
    return <button onClick={clickHandler} className="py-2 px-4 border border-green-500">
        {text}
    </button>
}