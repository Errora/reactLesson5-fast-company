import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import User from "./components/user";

function App() {
  return (
    <div>
      <NavBar/>
      <Route path="/" exact component={Main}/>
      <Route path="/login" component={Login}/>
      <Route path="/users/:userId" render={(props) => (<User {...props}/>)}/>
      <Route path="/users" exact render={(props) => (<Users {...props}/>)}/>
    </div>
  );
}

export default App;
