import { Link } from "react-router-dom";

function LogIn() {
    return (
        <>
            <div className="login-signup-form">
                <div className="card">
                    <h1 className="title">Log into your account</h1>
                    <div className="form">
                        <form action="post">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                            />
                            <button className="btn btn-block">Log In</button>
                            <p className="message">Not a user? Sign up <Link to={"/signup"}>Now</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;
