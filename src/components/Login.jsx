import { Link } from "react-router-dom"
import { AnotherHeader } from "../utils/AnotherHeader"

export const Login=()=>{
    return(
    <>
    <AnotherHeader/>
    <div className="flex justify-between bg-blue-400 h-full pb-40 pt-10">
        <div className="flex flex-col text-xl justify-start  text-white p-20 pt-36">
            <h1>Se connecter</h1>
            <p className="text-xl mt-9 max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium id animi amet cupiditate <br />quae ex, rerum consectetur dolorum ratione sunt ipsa repellat commodi voluptatum rem  laboriosam voluptatibus. Fugiat, minus.</p>
            <div className="text-2xl font-bold mt-8"><p><i className="fa-solid fa-phone mr-3"></i>Besoin d&apos;aide?</p></div>
            <p className="text-2xl font-bold mt-4">+(213)0561037192</p>
        </div>
        <div className=" form w-3/5">
            <form action="" className="flex flex-col  mr-24 ml-20 mt-28 bg-white p-11 pt-7 rounded-2xl">
                <div className="flex  justify-center">
                    <i className="fa-regular fa-user text-6xl text-center mb-5 mt-0 text-blue-400 bg-gray-100 rounded-full p-2"></i>
                </div>
                <input type="text" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg'placeholder="Entrez votre numero de telephone" required/>
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Entrez votre mot de passe" required/>
                <button className="bg-blue-400 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105">Se connecter</button>
                <p className="text-black text-base  mt-7 ml-2 ">T&apos;as pas un compte ? <Link to={'/cabinait-dentaire/signup'}>S&apos;identifier</Link></p>
            </form>
        </div>
    </div>
    </>)
}