import React from "react";
import Score from "./Score";

const Opponent = ({ plays, check }) => {
    if (plays.length !== 0) {
        const num = plays.length - 1;
        const champ = check(plays[num].opp, plays[num].you);
        if (plays[num].you === "") {
            return (
                <div>
                    <h5>An error occurred! We are sorry! Please try again!!</h5>
                </div>
            );
        }
        else {
            if (champ === "you") {
                return (
                    <div style={{marginTop: "30px"}}>
                        <h6>Your opponent chose {plays[num].opp}</h6>
                        <h3 style={{ color: "green" }}>You won!! Congratz :D</h3>
                    </div>
                );
            }
            else if (champ === "opp") {
                return (
                    <div style={{marginTop: "30px"}}>
                        <h6>Your opponent chose {plays[num].opp}</h6>
                        <h3 style={{ color: "red" }}>You lost!! Better luck next time :(</h3>
                    </div>
                );
            }
            else if (champ === "tie") {
                return (
                    <div style={{marginTop: "30px"}}>
                        <h6>Your opponent chose {plays[num].opp}</h6>
                        <h3>It was a tie! Good game!</h3>
                    </div>
                );
            }
        }
    }
    return (
        null
    )
}

class RPS extends React.Component {

    CheckWinner = (opp, you) => {
        if (opp === "rock") {
            if (you === "rock") {
                return "tie";
            }
            else if (you === "paper") {
                return "you";
            }
            else {
                return "opp";
            }
        }
        else if (opp === "paper") {
            if (you === "paper") {
                return "tie";
            }
            else if (you === "scissors") {
                return "you";
            }
            else {
                return "opp";
            }
        }
        else {
            if (you === "scissors") {
                return "tie";
            }
            else if (you === "rock") {
                return "you";
            }
            else {
                return "opp";
            }
        }
    }

    render() {

        const handleClick = (e) => {
            if (e.target.id !== "") {
                let valor = Math.floor(Math.random() * 3);
                if (valor === 0) {
                    valor = "rock";
                }
                else if (valor === 1) {
                    valor = "paper";
                }
                else {
                    valor = "scissors";
                }
                const winner = this.CheckWinner(valor, e.target.id);
                const newPlay = { play: this.props.plays.length + 1, you: e.target.id, opp: valor, winner: winner };
                this.props.addPlay(newPlay);
            }
        }

        return (
            <>
                <div style={{ marginTop: "100px" }} className="container">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h4>Make your choice and we will randomly generate a choice for your opponent!!</h4>
                        </div>
                    </div>
                    <div style={{ marginTop: "40px" }} className="row text-center">
                        <div className="col-12 justify-content-center">
                            <button onClick={handleClick} id="rock" className="btn btn-primary"> <i className="fa fa-hand-rock-o"></i> Rock</button>
                            <button onClick={handleClick} id="paper" className="btn btn-danger"> <i className="fa fa-hand-paper-o"></i> Paper</button>
                            <button onClick={handleClick} id="scissors" className="btn btn-success"> <i className="fa fa-hand-scissors-o"></i> Scissors</button>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12 justify-content-center">
                            <Opponent plays={this.props.plays} check={this.CheckWinner} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Score plays={this.props.plays} toggle={this.props.toggle}
                                handleToggle={this.props.handleToggle} resetPlays={this.props.resetPlays} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RPS;