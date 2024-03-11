import React, { useEffect, useState } from "react";
import "../Login/Login.css";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await fetch('http://localhost:8081/api/v1/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      });

      if (!response.ok) {
        throw new Error('Failed to refresh access token');
      }

      const data = await response.json();
      const newAccessToken = data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      console.log('Access token refreshed successfully');
    } catch (error) {
      console.error('Failed to refresh access token:', error);
    }
  };

  const isAccessTokenExpired = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return true; // No token available, consider it expired
    }

    const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expirationTime = decodedToken.exp * 1000; // Convert seconds to milliseconds

    return expirationTime < Date.now();
  };

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      if (isAccessTokenExpired()) {
        await refreshAccessToken();
      }
    };

    const intervalId = setInterval(checkAndRefreshToken, 15 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSignIn = async () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
      errors.email = "Enter valid email address";
    }

    if (!password) {
      errors.password = "Password is required.";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8081/api/v1/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('Error occurred during sign-in.');
        }

        const data = await response.json();
        const { accessToken, refreshToken } = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('Sign-in successful');
      } catch (error) {
        console.error('Sign-in error:', error);
      }
    }
  };

  return (
    <div className="form">
      <div className="heading">Login</div>
      <br></br>
      <div className="flex-column">
        <label>
          Email <span className="required">*</span>
        </label>
      </div>
      <div className="inputForm">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="flex-column">
        <label>
          Password <span className="required">*</span>
        </label>
      </div>
      <div className="inputForm">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      <div>
        <button className="button-submit" onClick={handleSignIn}>
          Sign In
        </button>

        <p className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
