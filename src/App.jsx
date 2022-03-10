import React,{Component} from "react";
import "./index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";
import { NavBar } from "./NavBar";
//import { Mainbody } from "./MainBody";
import { CourseList } from "./CoursesList"




export class App extends Component {

  render(){
    return (
      <React.Fragment>
          <NavBar />
          < CourseList /> 
      </React.Fragment>
    
  );
  }
}
