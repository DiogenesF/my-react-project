import React from "react";

function DisplayScore({ plays, toggle, resetPlays }) {
    if (toggle === false) {
        return null
    }
    else {
        if (plays.length !== 0) {
            var score = plays.map((each) => {
                if (each.winner === "tie") {
                    return (
                        <div key={each.play}>
                            <p>Play: {each.play}. Opponent: {each.opp}. You: {each.you}. Winner: {each.winner}</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={each.play} style={{ color: each.winner === "you" ? "green" : "red" }}>
                            <p>Play: {each.play}. Opponent: {each.opp}. You: {each.you}. Winner: {each.winner}</p>
                        </div>
                    );
                }
            })
            return (
                <div style={{marginTop: "20px"}}>
                    <h3>Score: </h3>
                    {score}
                    <button onClick={() => resetPlays()} className="btn btn-dark">Reset Score</button>
                </div>
            );
        }
        else {
            return (
                <div style={{marginTop: "30px"}}>
                    <h5 >No games have been played yet!</h5>
                </div>
            )
        }
    }
}

function Score(props) {

    return (
        <div style={{marginTop: "50px", marginBottom: "90px"}}>
            <div>
                <div>
                    <button onClick={() => props.handleToggle()} className="btn btn-dark"> <i className="fa fa-clipboard"></i>Show/Hide Score</button>
                </div>
            </div>
            <DisplayScore plays={props.plays} toggle={props.toggle} resetPlays={props.resetPlays} />
        </div>
    );
}


export default Score