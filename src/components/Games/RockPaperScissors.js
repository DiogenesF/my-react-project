import React from "react";
import Score from "./Score";


class RPS extends React.Component {
    state = {
        plays: []
    }

    Opponent = ({state}) => {
        if (state.plays.length !== 0) {
            const num = state.plays.length-1;
            const champ = this.CheckWinner(state.plays[num].opp, state.plays[num].you);
            if (state.plays[num].you === "") {
                return(
                    <div>
                        <h5>An error occurred! We are sorry! Please try again!!</h5>
                    </div>
                );
            }
            else {
                if (champ === "you") {
                    return (
                        <div>
                            <h6>Your opponent chose {state.plays[num].opp}</h6>
                            <h3 style={{color: "green"}}>You won!! Congratz :D</h3>
                        </div>
                    );
                }
                else if (champ === "opp") {
                    return (
                        <div>
                            <h6>Your opponent chose {state.plays[num].opp}</h6>
                            <h3 style={{color: "red"}}>You lost!! Better luck next time :(</h3>
                        </div>
                    );
                }
                else if (champ ==="tie") {
                    return (
                        <div>
                            <h6>Your opponent chose {state.plays[num].opp}</h6>
                            <h3>It was a tie! Good game!</h3>
                        </div>
                    );
                }
            }
        }
        return(
            null
        )
    }

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

    handleClick = (e) => {
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
            const newState = { play: this.state.plays.length + 1, you: e.target.id, opp: valor, winner: winner };
            const state = [...this.state.plays, newState];
            this.setState({
                plays: state
            })
        }
    }

    render() {
        return (
            <>
                <div style={{paddingTop: "10px"}}className="container">
                    <div className="row center">
                        <h4>Make your choice and we will randomly generate a choice for your opponent!!</h4>
                    </div>
                    <div className="row center">
                        <button onClick={this.handleClick} id="rock" className="waves-effect waves-light deep-purple accent-2 btn"> <i className="fa fa-hand-rock-o"></i> Rock</button>
                        <button onClick={this.handleClick} id="paper" className="waves-effect waves-light red darken-2 btn"> <i className="fa fa-hand-paper-o"></i> Paper</button>
                        <button onClick={this.handleClick} id="scissors" className="waves-effect waves-light teal darken-2 btn"> <i className="fa fa-hand-scissors-o"></i> Scissors</button>
                    </div>
                    <div className="row center">
                        <this.Opponent state={this.state}/>
                    </div>
                    <div className="row center">
                        <Score plays={this.state.plays}/>
                    </div>
                </div>
            </>
        );
    }
}

export default RPS;