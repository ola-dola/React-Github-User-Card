import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./Components/UserList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ola-dola")
      .then(response => {
        console.log(response.data);
        this.setState(currentState => ({
          userData: [...currentState.userData, response.data]
        }));
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    const { userData } = this.state;

    return (
      <div className="App">
        <h2>Github Data</h2>
        <UserList userData={userData} />
      </div>
    );
  }
}

function AppOld() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // https://api.github.com/ola-dola/
    axios.get("https://api.github.com/users/ola-dola")
      .then(response => {
        console.log(response.data);
        setUserData(userData.concat(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h2>Github Data</h2>
      <UserList userData={userData} />
    </div>
  );
}

export default App;
