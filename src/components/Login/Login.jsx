import React, { useState } from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useCookies } from "react-cookie";

const Login = () => {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(["user_token"]);

  // dummy user sign up database

  var userData = [{ userId: "usman", password: "usman123" }];

  //handle login function
  const handleLogin = (event) => {
    event.preventDefault();

    console.log(userId);
    console.log(password);
    userData.map((data) => {
      if (data.userId == userId && data.password == password) {
        setCookie("user_token", userId, { path: "/" });
      } else {
        alert("Account is not Valid");
      }
    });
    setUserId("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__form">
        <div>
          <Paper elevation={5}>
            <h1 className="login__heading">Login</h1>
            <div className="login__form_input">
              <form onSubmit={handleLogin}>
                {/* ======== user id ========== */}
                <div className="login__user_input">
                  <TextField
                    required
                    id="standard-required"
                    onChange={(e) => setUserId(e.target.value)}
                    label="User"
                    value={userId}
                  />
                </div>

                {/* ===== password ====== */}
                <div className="login__password_input">
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* ===== login button ===== */}
                <div className="login__btn">
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Login;
