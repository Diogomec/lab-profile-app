import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const requestBody = { username, password}

        axios
        .post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            console.log("JWT token", response.data.authToken);

            const token = response.data.authToken;
            storeToken(token);
            authenticateUser();

            navigate("/")
          })
          .catch((error) => console.log(error));
    }

    return (
        <div className="container">
            <div className="image-container">
                <form onSubmit={handleLoginSubmit}>
                    <input placeholder="Username" onChange={handleUsername}></input>
                    <input placeholder="Password" type="password" onChange={handlePassword}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login