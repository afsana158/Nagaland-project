import { useState } from "react";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form>
          {!isLogin && <input type="text" placeholder="Full Name" />}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          {!isLogin && <input type="password" placeholder="Confirm Password" />}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
