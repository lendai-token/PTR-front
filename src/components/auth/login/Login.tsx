import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setIsLoggedIn } from "./loginSlice";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const payload = {
    email: email,
    password: password,
  };
  const handleSubmit = () => {
    try {
      fetch(`${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            dispatch(setIsLoggedIn(true));
            navigate("/admin");
          } else {
            dispatch(setIsLoggedIn(false));
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          }
        });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center mt-[10vh]">
        <div className="login-container">
          <section className={error ? "login error_1" : "login"} id="login">
            <header>
              <h2>Move Mater</h2>
              <h4>Login</h4>
            </header>

            <form className="login-form" action="#" method="post">
              <input
                type="text"
                className="login-input"
                placeholder="Email"
                onChange={handleEmailChange}
                required
              />
              <input
                type="password"
                className="login-input"
                placeholder="Password"
                onChange={handlePasswordChange}
                required
              />
              <div className="submit-container">
                <button
                  type="button"
                  className="login-button"
                  onClick={handleSubmit}
                >
                  LOG IN
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
