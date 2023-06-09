import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";

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
		console.log(loginResult)
		if (loginResult) {
			navigate("/");
		} else {
			navigate("/Register");
		}
	};
	return (
		<div className="loginContainer">
		<div className="loginDiv">
			<h1 className="loginPage">Login Page</h1>
			<label className="formBox" htmlFor="userName">Username:</label>
			<input className="formBox"
				type="text"
				name="userName"
				value={userName}
				onChange={(e) => setuserName(e.target.value)}
			/>
			<br />
			<label className="formBox" htmlFor="password">Password:</label>
			<input className="formBox"
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Login</button>
      		<br/>
        <img className="loginGif" src="https://64.media.tumblr.com/f57d2f5e0ca482086fe3e159a57d51c5/tumblr_npvgkd19u41s5f7v4o1_1280.gifv" alt="regGif"></img>
		</div>
		</div>
	);
}