import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import { useState, useEffect } from "react";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRememberCred, setShouldRememberCred] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [navigateOn, setNavigateOn] = useState(null);
    const navigate = useNavigate();

    if (navigateOn) {
        navigate("/home");
    }

    const submitHandler = () => {
        if (localStorage.getItem('password') === password && localStorage.getItem('email') === email) {
            setNavigateOn(true);
        } else {
            setNavigateOn(false);
        }
    }

    const handleInputEmail = (e) => setEmail(e.target.value);
    const handleInputPassword = (e) => setPassword(e.target.value);
    const handleChaked = (e) => setShouldRememberCred(e.target.shouldRememberCred);

    useEffect(() => {
        (email && password) ? setDisabled(false) : setDisabled(true);
    }, [email, password])

    return (
        <div className="sign-container">
            <div className="header">
                <div className="lock-icon"><FontAwesomeIcon icon={faLock} /></div>
                <p className={navigateOn === false ? 'header-label-invalid' : ''}>Sign In</p>
            </div>

            <div className="container-forms">
                <input
                    className="input-sign-in"
                    type="email"
                    value={email}
                    onChange={handleInputEmail}
                    placeholder="Email Adress*"
                 />
                <input
                    className="input-sign-in"
                    type="password"
                    value={password}
                    onChange={handleInputPassword}
                    placeholder="Password*"
                />
                <label className="checkbox">
                    <input 
                    type="checkbox"
                    checked={shouldRememberCred}
                    onChange={handleChaked}
                    />{" "}
                    Remember me
                </label>
                <button
                disabled={disabled}
                className="submit-button"
                type="submit"
                onClick={submitHandler}>SIGN IN</button>
            </div>

            <div className="helpers-block links">
                <div>Forgot password?</div>
                <NavLink to='/sign-up' className="nav-link">Don't have an account? Sign Up</NavLink>
            </div>

            <div className="footer">Copywrite &copy; Your website 2020.</div>
        </div>
    )
}