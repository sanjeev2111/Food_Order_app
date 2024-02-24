import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    //  console.log("Child constructor");
    this.state = {
      userInfo: {
        login: "inital dummy data",
        location: "dsssd",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    //console.log("child component did mount");

    const data = await fetch("https://api.github.com/users/sanjeev2111");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location } = this.props;   this is comming from parent

    const { login, location, avatar_url } = this.state.userInfo;
    // console.log("child render");
    return (
      <div className="user-card">
        <img
          src="https://avatars.githubusercontent.com/u/94948226?v=4"
          alt=""
        />
        <h2>Name : {login}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @sanjiv_sr</h4>
      </div>
    );
  }
}

export default User;
