import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
	
  const [showPass, setShowPass] = useState(false);
  function toggleShow() {
    setShowPass(!showPass);
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type={!showPass ? "password" : "text"} placeholder="Password" />
        <button className="showBtn" onClick={toggleShow}>
          {showPass ? "Show" : "Hide"}
        </button>
      </div>
      <div className="btn-container">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </>
  );
}
