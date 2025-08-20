// import { useState } from "react";
// import { useNavigate } from "react-router-dom"

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumbere] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isAgency, setIsAgency] = useState(null);
//   const navigate = useNavigate();

//  const handleSignUp = (e) => {
//   e.preventDefault();

//   if (!name || !phoneNumber || !email || !password || isAgency === null) {
//     alert("Please fill out all required fields.");
//     return;
//   }
//   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//   const emailExists = existingUsers.some(user => user.email === email);

//   if (emailExists) {
//     const goToLogin = window.confirm("Email address already in use. Click OK to Login or Cancel to stay here.");
//     if (goToLogin) {
//       navigate("/login");
//     }
//     return;
//   }
//   const newUser = { name, phoneNumber, email, password, isAgency };
//   existingUsers.push(newUser);

//   localStorage.setItem("users", JSON.stringify(existingUsers));
//   localStorage.setItem("user", JSON.stringify(newUser));

//   navigate("/profile");
// };


//   return (
//     <div className="flex justify-center px-6 py-10">
//       <div className="w-full max-w-sm h-[90vh] max-h-[900px] bg-neutral-50 shadow-xl rounded-xl p-6 flex flex-col">
//         <div>
//           <h1 className="text-2xl font-bold leading-tight">
//             Create your <br /> PopX account
//           </h1>
//         </div>

//         <form onSubmit={handleSignUp} className="flex flex-col flex-grow gap-5 justify-start mt-6">
//           <div className="relative">
//             <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
//               Full Name<span className="text-red-500">*</span>
//             </span>
//             <input
//               type="text"
//               placeholder="Marry Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 "
//             />
//           </div>

//           <div className="relative">
//             <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
//               Phone number<span className="text-red-500">*</span>
//             </span>
//             <input
//               type="tel"
//               placeholder="Marry Mishra"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumbere(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
//               Email address<span className="text-red-500">*</span>
//             </span>
//             <input
//               type="email"
//               placeholder="Marry Mishra"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
//               Password<span className="text-red-500">*</span>
//             </span>
//             <input
//               type="password"
//               placeholder="Marry Mishra"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
//               Company name
//             </span>
//             <input
//               type="text"
//               placeholder="Marry Mishra"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
//             />
//           </div>

//           <div className="flex flex-col gap-2 mt-2">
//             <label className="text-sm font-medium text-gray-800">
//               Are you an Agency?<span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-6">
//               <label className="inline-flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="agency"
//                   value="yes"
//                   checked={isAgency === "yes"}
//                   onChange={() => setIsAgency("yes")}
//                   className="form-radio accent-violet-600"
//                 />
//                 <span className="text-sm text-gray-800">Yes</span>
//               </label>
//               <label className="inline-flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="agency"
//                   value="no"

//                   checked={isAgency === "no"}
//                   onChange={() => setIsAgency("no")}
//                   className="form-radio accent-violet-600"
//                 />
//                 <span className="text-sm text-gray-800">No</span>
//               </label>
//             </div>
//           </div>
//           <div className="flex-grow"></div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700  transition-transform duration-200 hover:scale-102"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email || !password || isAgency === null) {
      alert("Please fill out all required fields.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = existingUsers.some((user) => user.email === email);

    if (emailExists) {
      const goToLogin = window.confirm(
        "Email address already in use. Click OK to Login or Cancel to stay here."
      );
      if (goToLogin) {
        navigate("/login");
      }
      return;
    }

    const newUser = { name, phoneNumber, email, password, isAgency };
    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/profile");
  };

  return (
    <div className="flex justify-center px-6 py-10">
      <div className="w-full max-w-sm h-[90vh] max-h-[900px] bg-neutral-50 shadow-xl rounded-xl p-6 flex flex-col">
        <div>
          <h1 className="text-2xl font-bold leading-tight">
            Create your <br /> PopX account
          </h1>
        </div>

        <form
          onSubmit={handleSignUp}
          className="flex flex-col flex-grow gap-5 justify-start mt-6"
        >
          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
              Full Name<span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 "
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
              Phone number<span className="text-red-500">*</span>
            </span>
            <input
              type="tel"
              placeholder="9876543210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
              Email address<span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
              Password<span className="text-red-500">*</span>
            </span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 px-1 bg-neutral-50 text-xs font-medium text-violet-600">
              Company name
            </span>
            <input
              type="text"
              placeholder="Company (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-sm font-medium text-gray-800">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  className="form-radio accent-violet-600"
                />
                <span className="text-sm text-gray-800">Yes</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  className="form-radio accent-violet-600"
                />
                <span className="text-sm text-gray-800">No</span>
              </label>
            </div>
          </div>
          <div className="flex-grow"></div>
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700  transition-transform duration-200 hover:scale-102"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
