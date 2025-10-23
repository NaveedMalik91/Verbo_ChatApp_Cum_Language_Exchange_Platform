import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ShipWheelIcon } from "lucide-react";
const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const API_URL = import.meta.env.VITE_API_URL;
            await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
            toast.success("Password reset email sent!");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to send email");
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
                <div >
                  <h2 className="text-xl font-semibold"> Don't remember your password?</h2>
                  <p className="text-sm opacity-70">
                    Enter your email and we will send you a reset link.
                  </p>
                </div>

                <div className="form-control w-full space-y-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
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
    </div>
    );

};

export default ForgotPasswordPage;
