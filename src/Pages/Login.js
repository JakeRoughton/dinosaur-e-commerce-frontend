import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth(); //access the authentication context 
	const navigate = useNavigate() // be able to navigate to home on login

  return (
    <div>
      <h1 className="login">Login Page</h1>

      <h3>{loginMessage}</h3>

      <label className="email">Email:</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
			<br/>
			<br/>

      <label className="password">Password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br/>
      <button
        onClick={async () => {

          //login in using auth context
          const loginResult = await auth.login(email, password);
					console.log("button onclick loginResult: ", loginResult)
					if (loginResult.success) {
						navigate("/")
					}
          if (!loginResult.success) {
            setLoginMessage(loginResult.message)
          }
        }}
      >
        Login
      </button>
      <br/>
        <img className="loginGif" src="https://64.media.tumblr.com/f57d2f5e0ca482086fe3e159a57d51c5/tumblr_npvgkd19u41s5f7v4o1_1280.gifv" alt="regGif"></img>
    </div>
  );
};

export default LoginPage;