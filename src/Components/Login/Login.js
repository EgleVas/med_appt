import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
        
    return (
        <div className="container" style={{marginTop: '5%'}}>
        <div className="login-grid">
            <div className="login-text">
                <h1>Login</h1>
            </div>
            <div className="login-text1">Are you a new member? 
                <span>
                    <Link to="/SignUp" style={{color: '#2190FF'}}> Sign Up Here</Link>
                </span>
            </div>
            <br />
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="password" >Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            aria-describedby="helpId"
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                    <br />
                    <div className="login-text">Forgot Password?</div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;