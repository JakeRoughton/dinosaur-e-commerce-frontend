import { useState } from "react";
import { useAuth } from "../Hooks/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (props) => {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  //we are accessing the authentication context from within our 
  // component 
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="registration">Registration Page</h1>
      <label className="email">Email:</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
			<br/>
			<br/>
      <label className="userName">Username:</label>
      <input
        type="text"
        onChange={(e) => {
          setuserName(e.target.value);
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
          const registerResult = await auth.register(email, userName, password);
          if (registerResult.success) {
						navigate("/login");
          }
        }}
      >
        Signup
      </button>
      <br/>
        <img className="regGif" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTViNWU1ZWJiZmE2NjdiMjkxNDI0MzBlYzVhOGFiYmRjOTljYmUwNiZjdD1n/wl3pyqP3J57oc/giphy.gif" alt="regGif"></img>
    </div>
  );
};

export default RegistrationPage;