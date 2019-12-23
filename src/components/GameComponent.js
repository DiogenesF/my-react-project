import React from "react";
import {Link} from "react-router-dom";



class Game extends React.Component {
    render() {
        return(
            <div className="light-blue lighten-5" style={{paddingTop: "50px",
                                                    paddingBottom: "20px"}}>
                <div className="row center">
                    <h3>Here you can choose a game to play, ok ?</h3>
                </div>
                <div className="row center">
                    <h4>You have 2 options!!</h4>
                </div>
                <div className="row center">
                    <Link to="/TicTacToe" className="colwaves-effect waves-light btn deep-orange accent-4">Tic-Tac-Toe</Link>
                </div>
                <div className="row center">
                    <h6>Or</h6>
                </div>
                <div className="row center">
                    <Link to="/RPS" className="waves-effect waves-light btn grey darken-4">Rock-Paper-Scissors</Link>
                </div>
            </div>
        );
    }
}

export default Game;