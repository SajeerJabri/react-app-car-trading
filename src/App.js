import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { useCookies } from "react-cookie";
import ImageCategory from "./components/ImageCategory/ImageCategory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReportPage from "./components/ReportPage/ReportPage";

function App() {
  const [cookies, setCookie] = useCookies(["user_token"]);
  const user_token = cookies["user_token"];
  console.log("user token ==>", user_token);
  return (
    <div className="app">
      {!user_token ? (
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <ImageCategory />
              </Route>
              <Route exact path="/profile">
                <ReportPage />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
