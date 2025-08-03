export default function Modals({title , content}){
    //if(!isopen) return null;

    return(
        <div className=" w-1/2 flex flow-row justify-content-center align-items-center bg-gray-200 shadow-lg bg-opacity-40 m-5 rounded">
            <div className=" p-6">
                <h1 className="font-bold text-3xl p-2  mb-4">{title}</h1>
                <p className="text-gray-700 mb-4 text-sm">{content}</p>
                <button className="shadow text-md font-bold bg-blue-400 text-white p-4 rounded-md m-5" >Confirm</button>
            </div>
        </div>

    )
}