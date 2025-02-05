import { useState } from "react";
import LOGIN from "../assets/images/login.jpg";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For name in signup
  const [phone, setPhone] = useState(""); // For phone number in signup
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Error message state

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", email, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signing up with", name, email, phone, password);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-[#00000099] flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="flex w-1/2 h-[450px] justify-center items-center relative bg-white rounded-lg" // Make the container relative to position the title
          onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
        >
          {/* Left Side (Form) */}
          <div className="flex-1 p-6 bg-white rounded-l-lg overflow-auto flex justify-center items-center">
            <div>
              {/* Title positioned at the top left */}
              <h2 className="text-lg font-bold text-gray-700 mb-4 absolute top-6 left-6">
                {isSignup ? "Sign Up" : "Login"}
              </h2>

              <form
                onSubmit={isSignup ? handleSignupSubmit : handleLoginSubmit}
                className="space-y-4"
              >
                {isSignup && (
                  <>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border-b border-gray-300 bg-white hover:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                        required
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-6px] peer-focus:text-xs peer-focus:text-gray-500 bg-white px-1"
                      >
                        Enter Your Name*
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border-b border-gray-300 bg-white hover:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                        required
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-6px] peer-focus:text-xs peer-focus:text-gray-500 bg-white px-1"
                      >
                        Enter Your Phone*
                      </label>
                    </div>
                  </>
                )}
                <div className="relative w-full">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border-b border-gray-300 bg-white hover:border-gray-500 focus:outline-none focus:border-gray-500 peer"
                    required
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="w-full absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-6px] peer-focus:text-xs peer-focus:text-gray-500 bg-white px-1 z-10"
                  >
                    Enter Your Email*
                  </label>
                </div>

                {/* Password */}
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border-b border-gray-300 bg-white hover:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                    required
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="w-full absolute left-0 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-6px] peer-focus:text-xs peer-focus:text-gray-500 bg-white px-1"
                  >
                    Enter Your Password*
                  </label>
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-300 hover:text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <HiOutlineLockOpen size={20} />
                    ) : (
                      <HiOutlineLockClosed size={20} />
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-red-800"
                    required
                  />
                  <p className="text-xs text-gray-600">
                    I agree to the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      className="text-red-800 hover:underline"
                    >
                      terms and conditions{" "}
                    </a>
                    &amp;{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      className="text-red-800 hover:underline"
                    >
                      privacy policies
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-red-800 text-white rounded-lg cursor-pointer hover:bg-red-700 hover:shadow-lg transition-all"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </button>
              </form>
              <div className="mt-4 text-center">
                {isSignup ? (
                  <p>
                    Already have an account?{" "}
                    <span
                      className="text-red-800 cursor-pointer"
                      onClick={() => setIsSignup(false)}
                    >
                      Login here
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <span
                      className="text-red-800 cursor-pointer"
                      onClick={() => setIsSignup(true)}
                    >
                      Sign up
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div
            className="flex-1 hidden md:block bg-white rounded-r-lg bg-cover bg-center justify-center items-center"
            style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
          >
            <img
              src={LOGIN} // Static image URL
              alt="LOGIN Icon"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
