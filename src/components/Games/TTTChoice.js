import React from "react";


function TTTChoice({ didUserChoose, handleUserChoice, isUserX }) {

    const handleClick = (e) => {
        handleUserChoice(e.target.value);
    }

    if (didUserChoose === false) {
        return (
            <>
                <div className="container">
                    <div className="row center">
                        <h4>What do you wanna play with ?</h4>

                    </div>
                    <div className="row center">
                        <button onClick={handleClick} style={{ margin: "10px" }} value="O" className="waves-effect waves-light blue btn">O</button>
                        Or
                        <button onClick={handleClick} style={{ margin: "10px" }} value="X" className="waves-effect waves-light red btn">X</button>
                    </div>

                </div>

            </>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <h6>We will automatically generate your opponent's plays!!</h6>
                </div>
                <div className="row">
                    <h5 className="center">You are: {isUserX ? "X" : "O"}</h5>
                    <h6>Just click in a square to make your move</h6>
                </div>
            </div>
        )
    }
}

export default TTTChoice;