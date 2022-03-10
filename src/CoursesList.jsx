import React, { Component } from "react";
import { Courses } from "./Courses";

export class CourseList extends Component {
  state = {
    courses: [
      { id: 1, courseName: "Mongo DB", price: 28900, duration: 20,quantity: 0 },
      { id: 2, courseName: "Express JS", price: 14500, duration: 10,quantity: 0 },
      { id: 3, courseName: "React JS", price: 27745, duration: 40,quantity: 0 },
      { id: 4, courseName: "Angular JS", price: 28400, duration: 40,quantity: 0 },
      { id: 5, courseName: "Node JS", price: 17780, duration: 20,quantity: 0 },
      { id: 6, courseName: "Python", price: 25880, duration: 45,quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4> Course List </h4>
        <div className="row">
          {this.state.courses.map((cour) => {
            return (
              <Courses key={cour.id} course={cour} onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}>
                <button className="btn btn-primary">Payment</button>
              </Courses>
            );
          })}
        </div>
      </div>
    );
  }

  handleIncrement = (course, maxValue) => {
    //get index of selected course
    let allCourses = [...this.state.courses];
    let index = allCourses.indexOf(course);
    if (allCourses[index].quantity < maxValue) {
      allCourses[index].quantity++;
      //update the state of current component (parent component)
      this.setState({ courses: allCourses });
    }
  };
  handleDecrement = (course, minValue) => {
    //get index of selected course
    let allCourses = [...this.state.courses];
    let index = allCourses.indexOf(course);
    if (allCourses[index].quantity > minValue) {
      allCourses[index].quantity--;
      //update the state of current component (parent component)
      this.setState({ courses: allCourses });
    }
  };
}
