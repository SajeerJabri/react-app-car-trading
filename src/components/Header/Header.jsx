import React from "react";
import "./Header.css";
import { Navbar, Button } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user_token"]);
  const user_token = cookies["user_token"];
  //   console.log("token: ", user_token);

  // handle logout button
  const logOut = () => {
    removeCookie("user_token");
  };

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <Link to="/">Car Trading</Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="header__user_info">
              <Link to="/profile">
                <AccountCircleIcon />
                <span className="header__username">
                  {user_token.toUpperCase()}
                </span>
              </Link>
            </div>
          </Navbar.Text>
          <Button variant="outline-info" onClick={logOut}>
            LogOut
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
