import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

const API_URL = "http://localhost:5005";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [campus, setCampus] = useState("");
    const [course, setCourse] = useState("");

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleCampus = (e) => setCampus(e.target.value)
    const handleCourse = (e) => setCourse(e.target.value)

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const requestBody = { username, password, campus, course}

        axios
        .post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
            setUsername("");
            setPassword("");
            setCampus("");
            setCourse("");

            navigate("/login");
          })
          .catch((error) => console.log(error));
    }

    return (
        <div className="container">
            <div className="image-container">
                <form onSubmit={handleSignupSubmit}>
                    <input placeholder="Username" onChange={handleUsername}></input>
                    <input placeholder="Password" onChange={handlePassword}></input>
                    <input placeholder="Campus" onChange={handleCampus}></input>
                    <input placeholder="Course" onChange={handleCourse}></input>
                    <button type="submit">Create the Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup