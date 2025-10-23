import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showTerms, setShowTerms] = useState(false); // 👈 Modal state

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* LEFT SIDE (FORM) */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Verbo
            </span>
          </div>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Create an Account</h2>
              <p className="text-sm opacity-70">
                Join Verbo and start your language learning adventure!
              </p>
            </div>

            {/* FULL NAME */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Naveed Malik"
                className="input input-bordered w-full"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs opacity-70 mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* TERMS CHECKBOX */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" required />
                <span className="text-xs leading-tight">
                  I agree to the{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => setShowTerms(true)} // 👈 Open modal
                  >
                    terms of service
                  </span>
                </span>
              </label>
            </div>

            {/* SIGNUP BUTTON */}
            <button className="btn btn-primary w-full" type="submit">
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-gray-300 text-sm">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
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

      {/* ✅ TERMS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-lg w-full mx-4 relative">
            <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
            <div className="max-h-80 overflow-y-auto text-sm space-y-3">
              <p>
                Welcome to Verbo! By creating an account, you agree to abide by our terms and conditions.
              </p>
              <p>
                - You must be at least 13 years old to use this service.
              </p>
              <p>
                - You agree not to misuse or exploit the platform for any illegal purposes.
              </p>
              <p>
                - We value your privacy and handle your data responsibly.
              </p>
              <p>
                - Verbo reserves the right to modify or terminate the service at any time.
              </p>
              <p>
                - Violations of these terms may result in suspension or account removal.
              </p>
              
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="btn btn-sm btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
