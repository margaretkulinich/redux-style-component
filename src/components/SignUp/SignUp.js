import { NavLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

export function SignUp() {
    const [firstName, setFirstName] = useLocalStorage("firstName", "");
    const [lastName, setLastName] = useLocalStorage("lastName", "");
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [navigateOn, setNavigateOn] = useState(false);
    const navigate = useNavigate();

    if (navigateOn) {
        navigate("/");
    }

    const submitHandler = () => {
        setNavigateOn(true);
    }

    useEffect(() => {
        if(firstName && lastName && email && password) {
            setDisabled(false);
        }
    }, [firstName, lastName, email, password])

    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
    const nameCheck = new RegExp(/[A-Za-z]{3,}/);

    function checkFalseValue(e) {
        const et = e.target;

        if(et.value === '') {
            et.style.borderColor = '#424242';
        } else {
            et.style.borderColor = 'red';
        }
    }

    const handleInputFistName = (e) => {
        const et = e.target;
        et.style.borderColor = 'green';
        setFirstName(et.value);

        if(!et.value.match(nameCheck)) {
            checkFalseValue(e);
        }
    }
    
    const handleInputLastName = (e) => {
        const et = e.target;

        et.style.borderColor = 'green';
        setLastName(et.value);
        
        if (!et.value.match(nameCheck)) {
            checkFalseValue(e);
        }
    };

    const handleInputEmail = (e) => {
        const et = e.target;

        et.style.borderColor = 'green';
        setEmail(et.value);

        if(!et.value.match(emailCheck)) {
            checkFalseValue(e);
        }
    } ;

    const handleInputPassword = (e) => {
        const et = e.target;

        et.style.borderColor = 'green';
        setPassword(et.value);

        if (!et.value.match(passCheck)) {
            checkFalseValue(e);
        }
    };

    const handleChaked = (e) => setChecked(e.target.checked);

    return (
        <div className="sign-container">
            <div className="header">
                <div className="lock-icon"><FontAwesomeIcon icon={faLock} /></div>
                <p>Sign Up</p>
            </div>

            <div className="container-forms">
                <div className="full-name">
                    <input
                        className="input-sign-firstname"
                        type="text"
                        value={firstName}
                        onChange={handleInputFistName}
                        placeholder="First Name*"
                    />
                    <input
                        className="input-sign up"
                        type="text"
                        value={lastName}
                        onChange={handleInputLastName}
                        placeholder="Last Name*"
                    />
                </div>
                <input
                    className="input-sign up"
                    type="email"
                    value={email}
                    onChange={handleInputEmail}
                    placeholder="Email Adress*"
                 />
                <input
                    className="input-sign up"
                    type="password"
                    value={password}
                    onChange={handleInputPassword}
                    placeholder="Password*"
                />
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChaked}
                    />{" "}
                    I want to receive inspiration, marketing promotion, and udates via email.
                </label>
                <button
                    className="submit-button"
                    disabled={disabled}
                    type="submit"
                    onClick={submitHandler}>
                    SIGN UP
                </button>
            </div>

            <div className="helpers-block">
                <NavLink to='/' className="nav-link">Already have an account? Sign In</NavLink>
            </div>

            <div className="footer">Copywrite &copy; Your website 2020.</div>
        </div>
    )
}