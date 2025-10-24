// import { useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import axios from "axios";
// import toast from "react-hot-toast";

// const ResetPasswordPage = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       const API_URL = import.meta.env.VITE_API_URL;
//       await axios.post(`${API_URL}/api/auth/reset-password/${token}`, { password });
//       toast.success("Password reset successful!");
//       navigate("/login");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to reset password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-base-200">
//       <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
//         {/* FORM SECTION */}
//         <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
//           <h2 className="text-2xl font-bold mb-2 text-center">Reset Password</h2>
//           <p className="text-sm text-center opacity-70 mb-6">
//             Enter your new password and confirm it to reset your account password.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="password"
//               placeholder="New Password"
//               className="input input-bordered w-full"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="input input-bordered w-full"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <button type="submit" className="btn btn-primary w-full" disabled={loading}>
//               {loading ? "Resetting..." : "Reset Password"}
//             </button>
//           </form>
//         </div>

//         {/* IMAGE SECTION */}
//         <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
//           <div className="max-w-md p-8">
//             <div className="relative aspect-square max-w-sm mx-auto">
//               <img
//                 src="/i.png"
//                 alt="Language connection illustration"
//                 className="w-full h-full"
//               />
//             </div>
//             <div className="text-center space-y-3 mt-6">
//               <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
//               <p className="opacity-70">
//                 Practice conversations, make friends, and improve your language skills together.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPage;


import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { ShipWheelIcon } from "lucide-react";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.post(`${API_URL}/api/auth/reset-password/${token}`, { password });
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* FORM SECTION */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Verbo
            </span>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Reset Your Password</h2>
                  <p className="text-sm opacity-70">
                    Enter your new password and confirm it to reset your account password.
                  </p>
                </div>

                <div className="form-control w-full space-y-2">
                  <label className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="input input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control w-full space-y-2">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Resetting...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm">
                    Remembered your password?{" "}
                    <a href="/login" className="text-primary hover:text-gray-300 text-sm">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
