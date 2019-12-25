import React from "react";
import { Link } from "react-router-dom";



class Game extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "lightCyan", paddingBottom: "1px"}}>
                <div className="container" style={{
                    padding: "50px",
                    margin: "50px",
                }}>
                    <div className="row justify-content-center">
                        <h3>Here you can choose a game to play, ok ?</h3>
                    </div>
                    <div style={{ marginTop: "20px" }} className="row justify-content-center">
                        <h4>You have 2 options!!</h4>
                    </div>
                    <div style={{ marginTop: "30px" }} className="row justify-content-center">
                        <Link to="/TicTacToe" className="btn btn-danger">Tic-Tac-Toe</Link>
                    </div>
                    <div className="row justify-content-center">
                        <h6 style={{ marginTop: "10px" }} >Or</h6>
                    </div>
                    <div style={{ marginTop: "10px" }} className="row justify-content-center">
                        <Link to="/RPS" className="btn btn-success">Rock-Paper-Scissors</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Game;