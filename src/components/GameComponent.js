import React from "react";
import { Link } from "react-router-dom";



class Game extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "lightCyan", height:"100%", width: "100%"}}>

                <div className="container">
                    <div className="row">
                        <div style={{marginTop: "80px"}}className="col-12 text-center">
                            <h3>Here you can choose a game to play, ok ?</h3>
                            <h4 style={{marginTop: "40px"}}>You have 2 options!!</h4>
                        </div>
                    </div>
                    <div style={{ marginTop: "30px" }} className="row">
                        <div className="col-12 text-center">
                            <Link to="/TicTacToe" className="btn btn-danger">Tic-Tac-Toe</Link>
                            <h6 style={{ margin: "20px" }} >Or</h6>
                            <Link to="/RPS" className="btn btn-success mb-5">Rock-Paper-Scissors</Link>
                        </div>
                    </div>
                   
                    
                </div>

                </div>
        );
    }
}

export default Game;