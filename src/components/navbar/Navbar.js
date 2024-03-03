import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowLeftLong, faPen } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import signupSvg from "../assets/signupui.svg";

const Navbar = () => {
  const [isSignupVisible, setSignupVisible] = useState(false);

  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignup = () => {
    setSignupVisible(!isSignupVisible);
  };

  const toggleSignin = () => {
    setShowSignIn(!showSignIn);
    if (isSignupVisible && showSignIn) {
      setShowSignIn(false);
    }
  };

  useEffect(() => {
    if (isSignupVisible || showSignIn) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSignupVisible, showSignIn]);

  return (
    <div className="main-nav">
      <div className="second-nav">
      <FontAwesomeIcon icon={faArrowLeftLong} className="second-nav-icon" />
      <h4 className="second-nav-header">Group</h4>
      </div>
      <nav className="nav">
      <img src={logo} alt="" className="px-5 logo" />
      <div className="mid-color-nav ">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon " />
        <input
          type="text"
          placeholder="Search For Your favorite groups in ATG"
          className="mid-input"
        />
      </div>
      <div className="nav-end" onClick={toggleSignup}>
        <li className="px-1 fw-bold">Create Account</li>
        <li className="px-1 fw-bold blue-color-nav">It's Free!</li>
      </div>
    </nav>
      <div className={isSignupVisible ? "signup" : "hide-signup"}>
        <div className="signup-wrapper">
          <h1 className="green">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘
          </h1>
          <div className="signup-header">
            <h4 className="signup-inner-header">Sign In</h4>
            <div className="signup-header-clr" onClick={toggleSignin}>
              <h3>Already have an account?</h3>
              <h3 className="blue" onClick={toggleSignup}>
                Sign In
              </h3>
            </div>
          </div>
          <div className="signup-inner-wrapper">
            <div className="signup-left">
              <div className="two-input">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="three-input">
                <input type="text" placeholder="Email" />
                <div className="signup-eye">
                  <input
                    type="text"
                    placeholder="Password"
                    className="eye-input"
                  />
                  <FontAwesomeIcon icon={faEye} className="eye-icon" />
                </div>
                <input type="text" placeholder="Confirm Password" />
              </div>

              <h2 className="create-account">Create Account</h2>
              <div className="signup-facebook">
                <h2 className="common">Sign up with Facebook</h2>
              </div>

              <div className="signup-facebook">
                <h2 className="common">Sign up with Google</h2>
              </div>
            </div>
            <div className="signup-right">
              <img src={signupSvg} alt="" className="signup-svg" />
              <h1 className="signup-right-bottom">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={showSignIn ? "signin" : "hide-signin"}>
        <div className="signup-wrapper">
          <h1 className="green">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘
          </h1>
          <div className="signin-header">
            <h4 className="signup-inner-header">Don't have an account yet?</h4>
            <div className="signup-header-clr remove-clr" onClick={toggleSignin}>
              <h3>Already have an account?</h3>
              <h3 className="blue">Create new for free!</h3>
            </div>
          </div>
          <div className="signup-inner-wrapper">
            <div className="signup-left">
              <div className="signin-input">
                <input
                  type="text"
                  placeholder="Email"
                  className="signin-single-input"
                />
                <div className="eye">
                  <input
                    type="text"
                    placeholder="Password"
                    className="eye-input"
                  />
                  <FontAwesomeIcon icon={faEye} className="eye-icon" />
                </div>
              </div>

              <h2 className="create-account">Create Account</h2>
              <div className="singup-facebook">
                <h2 className="common">Sign up with Facebook</h2>
              </div>

              <div className="singup-facebook">
                <h2 className="common">Sign up with Google</h2>
              </div>
            </div>
            <div className="signup-right">
              <img src={signupSvg} alt="" className="signup-svg"/>
              <h1 className="signup-right-bottom">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="hold-pen" onClick={toggleSignup}>
      <FontAwesomeIcon icon={faPen} className="pen-icon"/>
      </div>
    </div>
  );
};

export default Navbar;
