import React from "react";
import Background from "./styles/computer.jpeg";

function MyContent() {
  return (
    <>
      <div
        style={{
          background: "url(" + Background + ") no-repeat center center fixed",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3 style={{ marginTop: "80px", color: "white" }}>
                <strong>Be welcome to my webpage!!</strong>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-4 text-center">
              <img src="assets/images/my_image.png" alt="me" height="300px" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-4">
              <h5 style={{ color: "lightgray" }}>
                <strong>
                  This is a website that I created using React just to practice
                  and test my knowledge using this library. I didn't want to
                  spend too much time with the design so I decided to keep it as
                  simple as possible. Btw I used
                  <a
                    style={{ color: "gray" }}
                    href="https://reactstrap.github.io/"
                  >
                    {" "}
                    reactstrap
                  </a>{" "}
                  and a little inline CSS.
                </strong>
                <strong>
                  <br />A few details of the implementation: The state of the
                  Rock-Paper-Scissors game won't change if you move through the
                  routes, but in the Tic-Tac-Toe game it will.
                </strong>
                <br />
                <strong>Up until now I used the following features: </strong>
                <ul style={{ marginLeft: "50px" }}>
                  <li>
                    <strong>React-Router-Dom</strong>
                  </li>
                  <li>
                    <strong>React-Hooks</strong>
                  </li>
                  <li>
                    <strong>Reactstrap</strong>
                  </li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyContent;
