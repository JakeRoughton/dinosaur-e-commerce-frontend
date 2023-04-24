import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Login() {
	const [userName, setuserName] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const userData = {
			userName: userName,
			password: password,
		};
		const loginResult = await login(userData);
		if (loginResult) {
			navigate("/home");
		} else {
			navigate("/register");
		}
	};
	return (
		<div>
			<h1>Login Page</h1>
			<label htmlFor="userName">Username:</label>
			<input
				type="text"
				name="userName"
				value={userName}
				onChange={(e) => setuserName(e.target.value)}
			/>
			<br />
			<label htmlFor="password">Password:</label>
			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
      <br/>
        <img className="loginGif" src="https://64.media.tumblr.com/f57d2f5e0ca482086fe3e159a57d51c5/tumblr_npvgkd19u41s5f7v4o1_1280.gifv" alt="regGif"></img>
		<Footer/>
		</div>
	);
}