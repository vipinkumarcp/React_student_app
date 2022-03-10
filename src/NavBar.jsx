import React,{Component} from "react";
import "./index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";




export class NavBar extends Component {

  render(){
    return (
      <React.Fragment>

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
    <a className="navbar-brand" href="#">Upshoot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link active" href="#">students</a>
        <a className="nav-link active" href="#">course list</a>
      </div>
    </div>
  </div>
</nav>
      
  </React.Fragment>

    

      
  );
  }
}
