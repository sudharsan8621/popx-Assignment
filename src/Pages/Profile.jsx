import Profileimg from "../assets/profimg.png";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Profile() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user"));

        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        } else {
            navigate("/login");
            return;
        }
    }, []);

    return (
        <div className="flex justify-center items-start min-h-screen bg-[#f9f9f9] py-10">
            <div className="w-full max-w-sm h-[85vh] max-h-[700px] bg-neutral-50 border border-gray-200 rounded-md shadow-sm flex flex-col justify-between">
                <div>
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-[18px] font-medium text-gray-800">Account Settings</h2>
                    </div>
                    <div className="flex gap-4 px-6 py-5 items-start">
                        <div className="relative w-14 h-14 shrink-0">
                            <img
                                src={Profileimg}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 bg-[#8c30f5] p-[4px] rounded-full border-[2px] border-white">
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 5c-1.654 0-3 1.346-3 3 0 .597.176 1.151.474 1.618L5 14v5h5l4.382-4.382c.467.298 1.021.474 1.618.474 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3zM5 17v-2.586l6.586-6.586c.196-.195.451-.305.707-.305.553 0 1 .447 1 1 0 .256-.11.511-.305.707L7.414 17H5zm7-5c0-.553.447-1 1-1s1 .447 1 1-.447 1-1 1-1z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-bold text-gray-800">{name}</p>
                            <p className="text-sm font-semibold text-gray-800">
                                {email}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 pb-6 border-b border-gray-200">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                            Erat, Sed Diam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
