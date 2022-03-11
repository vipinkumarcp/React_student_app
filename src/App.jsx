import React, { Component } from "react";
import "./index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";
import { NavBar } from "./NavBar";
//import { Mainbody } from "./MainBody";
//import { CourseList } from "./CoursesList";
import { Login } from "./Login";



export class App extends Component {


  

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Login/>
        
      </React.Fragment>
    );
  }
}
