export default function Cards({title, content}) {
    return(
        <div className="bg-white shadow-lg rounded-lg w-1/2 p-6 m-5">
            <img src="###" alt=" picture" className="h-10 w-1/2" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{content}</p>
        </div>
    )
}