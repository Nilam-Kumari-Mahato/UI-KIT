export default function Form({onsubmit }) {

    return(
            <form onSubmit={onsubmit} className="flex flex-col justify-center items-center bg-gray-200 p-4 shadow-md w-1/2 rounded m-5 ">
                <input type="text" name="name" placeholder="Name" className="bg-white p-2 m-2 rounded w-full" />
                <input type="email" name="email" placeholder="Email" className="bg-white p-2 m-2 rounded w-full" />
                <input type="password" name="password" placeholder="Password" className="bg-white p-2 m-2 rounded w-full" />
                <input type="submit" value="Submit" className="bg-blue-500 text-white p-2 rounded-md m-2 cursor-pointer" />
            </form>

    )
}