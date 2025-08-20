import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      navigate("/profile");
    } else {
      const goToSignUp = window.confirm(
        "Email or password is incorrect. Click OK to Sign Up or Cancel to try again."
      );
      if (goToSignUp) {
        navigate("/signUp");
      }
    }
  };

  return (
    <div className="flex justify-center px-6 py-10">
      <div className="w-full max-w-sm h-[90vh] max-h-[800px] bg-neutral-50 shadow-xl rounded-xl p-6 flex flex-col justify-start">
        <div className="pt-8">
          <h1 className="text-2xl font-bold leading-tight">
            Signin to your <br /> PopX account
          </h1>
          <h2 className="font-medium leading-snug text-gray-500">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
          </h2>
        </div>

        <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-5">
          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-semibold text-violet-600">
              Email Address
            </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-gray-400"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-semibold text-violet-600">
              Password
            </span>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition-transform duration-200 hover:scale-102"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
