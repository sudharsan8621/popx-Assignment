import { useNavigate } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex p-9 justify-center">
                <div className="max-w-sm w-full  mx-auto h-[90vh] max-h-[800px]  bg-neutral-50  shadow-2xl rounded-xl flex flex-col justify-end gap-3 p-6">
                    <div className=" bg-neutral-50  w-full py-2 ">
                        <h1 className="font-bold w-full text-3xl">Welcome to PopX</h1>
                        <h2 className="p-1 font-medium leading-snug text-gray-400">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.</h2>
                    </div>

                    <button onClick={()=> navigate('/signup')} className="w-full bg-violet-600 hover:bg-violet-800 text-white hover:text-violet-200 transition-transform duration-200 hover:scale-102  font-semibold py-3 rounded-lg">
                        Create Account
                    </button>
                    <button onClick={()=> navigate('/login')} className="w-full bg-violet-300 hover:bg-violet-400 text-black transition-transform duration-200 hover:scale-102 font-bold py-3 rounded-lg">
                        Already Registered? Login
                    </button>


                </div>
            </div>
        </>
    )
}