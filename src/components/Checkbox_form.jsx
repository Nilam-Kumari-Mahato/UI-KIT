export default function CheckboxForm({title , onsubmit }) {
    return (
        <form onSubmit={onsubmit} className="flex flex-col justify-center items-start bg-gray-200 p-4 shadow-md w-1/2 rounded m-5">
            <h1 className="font-bold text-3xl p-2  mb-4">{title}</h1>
            <div className="flex flex-row justify-center">
                <input type="checkbox" name="option1" className="m-2" />
                <label htmlFor="option1" className="text-gray-700">Option 1</label>
            </div>
            <div className="flex flex-row justify-center">
                <input type="checkbox" name="option2" className="m-2" />
                <label htmlFor="option2" className="text-gray-700">Option 2</label>
            </div>
            <input type="submit" value="Submit" className="bg-blue-500 text-white p-2 rounded-md m-2 cursor-pointer" />
        </form>
    );
}