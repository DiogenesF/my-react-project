import React from "react";

function DisplayScore({plays, toggle}) {
    console.log(toggle);
    if (toggle === false) {
        return null
    }
    else {
        if (plays.length !== 0) {
            var score = plays.map((each) => {
                if (each.winner === "you") {
                    return (
                        <div key={each.play} style={{ color: "green" }}>
                            <p>Play: {each.play}. Opponent: {each.opp}. You: {each.you}. Winner: {each.winner}</p>
                        </div>
                    )
                }
                else if (each.winner === "opp") {
                    return (
                        <div key={each.play} style={{ color: "red" }}>
                            <p>Play: {each.play}. Opponent: {each.opp}. You: {each.you}. Winner: {each.winner}</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={each.play}>
                            <p>Play: {each.play}. Opponent: {each.opp}. You: {each.you}. Winner: {each.winner}</p>
                        </div>
                    )
                }
            })
            return (
                <div>
                    <h3>Score</h3>
                    {score}
                </div>
            );
        }
        else {
            return (
                <div>
                    <h5>No games have been played yet!</h5>
                </div>
            )
        }
    }
}

class Score extends React.Component {
    state = {
        toggle: false
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render () {
        const {plays} = this.props;

        return (
            <div>
                <div className="row center">
                    <button onClick={this.handleClick} className="waves-effect waves-light black btn"> <i className="fa fa-clipboard"></i>Show/Hide Score</button>
                </div>
                <DisplayScore plays={plays} toggle={this.state.toggle}/>
            </div>
        );
    }
}


export default Score