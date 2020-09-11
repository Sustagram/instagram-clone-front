import React from "react";
import axios from "axios";
import "./App.css";
import Buttons from "./Components/Buttons";

const App: React.FC = () => {
  const onClickGetButton = () => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/test",
    }).then((responseType) => {
      console.log("GET!");
    });
  };

  const onClickPostButton = () => {
    axios
      .post("https://127.0.0.1:8000/api/test", {
        /* asd */
      })
      .then((responseType) => {
        console.log("POST!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Buttons
        onClickGetButton={onClickGetButton}
        onClickPostButton={onClickPostButton}
      />
    </div>
  );
};

export default App;
