import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {Profile} from "./profile/Profile";
import {Home} from "./home/Home";
import {Navbar, Nav} from "react-bootstrap";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <BrowserRouter>
        <Navbar bg="dark" className="justify-content-center">
          <Nav>
            <Nav.Link>
              <Link to="/">
                <h4 className="text-white">Home</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile">
                <h4 className="text-white">Profile</h4>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
