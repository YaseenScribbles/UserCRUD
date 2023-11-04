import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <>
                <div className="login-signup-form">
                    <div className="card">
                        <h1 className="title">Create your account</h1>
                        <div className="form">
                            <form action="post">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter confirmation password"
                                />
                                <button className="btn btn-block">
                                    Sign Up
                                </button>
                                <p className="message">
                                    Already a user? Sign In
                                    <Link to={"/login"}> Now</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default SignUp;
