import React, { Component } from "react";


export class StudentsList extends Component {
  state = {
    pageTitle: "Students",
    studentsCount: 5,
    students: [
      {
        id: 1,
        name: "vijay",
        phone: "",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/220/200/300"
      },
      {
        id: 2,
        name: "ajith",
        phone: "",
        address: { city: "Bangalore" },
        photo: "https://picsum.photos/id/221/200/300"
      },
      { id: 3, name: "mahesh", phone: "889000921", address: { city: "London" }, photo: "https://picsum.photos/id/222/200/300" },
      { id: 4, name: "aamir khan", phone: "552967601", address: { city: "indore" }, photo: "https://picsum.photos/id/223/200/300" },
      { id: 5, name: "John", phone: "781566778", address: { city: "surath" }, photo: "https://picsum.photos/id/238/200/300" },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2" style={{ color:"red"}} >
            {this.state.studentsCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Student Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.getStudentRow()}
          </tbody>
        </table>
      </div>
    );
  }
  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ studentsCount: 7 });
    console.log("hiii")
  };
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getStudentRow = () => {
    return this.state.students.map((stud,index) => {
      return (
        <tr key={stud.id}>
          <td>{stud.id}</td>
          <td><img src={stud.photo} alt="student" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(stud, index)
                }} >
                Change Picture
              </button>
            </div>
          </td>
          <td style={this.studentNameStyle(stud.name)}>{stud.name}</td>
          <td>{this.getPhoneToRender(stud.phone)}</td>
          <td>{stud.address.city}</td>
        </tr>

      );
    });
  };
  studentNameStyle = (studName) => {
    if (studName.startsWith("S")) return { backgroundColor: "green" };
    else if (studName.startsWith("J")) return { backgroundColor: "red" };
    else return {};
  };

  onChangePictureClick = (stud, index) => {
    console.log(stud);
    console.log(index);
    //get existing students
    var studArr = this.state.students;
    studArr[index].photo = "https://picsum.photos/id/256/200/300";
    //update "students" array in the state
    this.setState({ students: studArr });
  };

}



