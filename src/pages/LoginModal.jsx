import { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For name in signup
  const [phone, setPhone] = useState(""); // For phone number in signup

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

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-[#00000099] flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-lg w-96"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
        >
          <h2 className="text-xl mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
          <form
            onSubmit={isSignup ? handleSignupSubmit : handleLoginSubmit}
            className="space-y-4"
          >
            {isSignup && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 shadow-sm border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 shadow-sm border-gray-300 rounded-lg"
                  required
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 shadow-sm border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 shadow-sm border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="mt-4 text-center">
            {isSignup ? (
              <p>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsSignup(false)}
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
