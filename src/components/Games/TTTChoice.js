import React from "react";


function TTTChoice({ didUserChoose, handleUserChoice, isUserX }) {

    const handleClick = (e) => {
        handleUserChoice(e.target.value);
    }

    if (didUserChoose === false) {
        return (
            <>
                <div>
                    <div>
                        <h4>What do you wanna play with ?</h4>

                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <button onClick={handleClick} style={{ margin: "10px" }} value="O" className="btn btn-primary">O</button>
                        Or
                        <button onClick={handleClick} style={{ margin: "10px" }} value="X" className="btn btn-danger">X</button>
                    </div>

                </div>

            </>
        );
    }
    else {
        return (
            <div>
                <div>
                    <h5>We will automatically generate your opponent's plays!!</h5>
                </div>
                <div style={{marginTop: "40px", marginBottom: "20px"}}>
                    <h4>You are: {isUserX ? "X" : "O"}</h4>
                    <h6>Just click in a square to make your move</h6>
                </div>
            </div>
        )
    }
}

export default TTTChoice;