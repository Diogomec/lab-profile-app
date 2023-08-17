import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="container">
            <div className="image-container">
                <h4>IronProfile</h4>
                <p>Today we will create an appwith authentication, adding some cool styles!</p>
                <button><Link to="/signup">Sign up</Link></button>
                <button><Link to="/login">Log in</Link></button>
            </div>
        </div>
    )
}

export default HomePage