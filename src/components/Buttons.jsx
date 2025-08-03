export default function Buttons({label , variant , onclick }){
    const style =
        variant === "primary" ? " shadow-md bg-blue-400 text-white-300 p-2 rounded-md m-9 " : " shadow  opacity-90 bg-gray-300 text-black-600 p-4 rounded-md m-5";

    return(
        <button className={style} onclick={onclick} >{label} </button>
    )    
}