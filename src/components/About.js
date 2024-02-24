import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructr");
  }

  componentDidMount() {
   // console.log("parent constructor is called ");
  }

  render() {
   // console.log("parent render");
    return (
      <div>
        <h1>This is a about page</h1>
        <User name="Sanjeev Kumar (class comp)" location="Ranchi" />
      </div>
    );
  }
}

export default About;
