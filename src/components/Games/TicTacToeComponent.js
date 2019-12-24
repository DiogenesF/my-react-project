import React, { useState } from "react";
import TTTChoice from "./TTTChoice";
import "../styles/TicTacToe.css";

function calculateWinner(plays) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (plays[a] && plays[a] === plays[b] && plays[a] === plays[c]) {
            return plays[a];
        }
    }
    return null;
}

function DisplayWinner({ winner, isUserX, finished }) {
    console.log(winner, isUserX, finished);
    if (winner === null) {
        if (finished) {
            return (
                <div className="center">
                    <h4>It was a tie!! Good game!</h4>
                </div>
            )
        }
        return (
            null
        );
    }
    else {
        let user = isUserX ? "X" : "O";
        if (winner === user) {
            return (
                <div className="center">
                    <h4 style={{ color: "green" }}>Congratz!! You won :D</h4>
                </div>
            )
        }
        else {
            return (
                <div className="center">
                    <h4 style={{ color: "red" }}>Unfortunately you lost :(</h4>
                </div>
            )
        }
    }
}


function TicTacToe() {
    const [plays, setPlays] = useState(Array(9).fill(null));
    const [didUserChoose, setDidUserChoose] = useState(false);
    const [isUserX, setIsUserX] = useState(false);
    const [finished, setIsGameFinished] = useState(false);
    const [winner, setWinner] = useState(null);


    const handleUserChoice = (choice) => {
        choice === "X" ? setIsUserX(true) : setIsUserX(false);
        setDidUserChoose(true);
    }

    const handleAgain = () => {
        const nullArray = plays.slice().fill(null);
        setPlays(nullArray);
        setDidUserChoose(false);
        setIsUserX(false);
        setIsGameFinished(false);
        setWinner(null);
    }

    const handlePlays = (e) => {

        let checkWinner1 = calculateWinner(plays);
        if (checkWinner1 !== null) {
            setIsGameFinished(true);
            setWinner(checkWinner1);
            return null;
        }

        if (didUserChoose === false) return null;
        if (finished === true) return null;
        var cont = 0;
        for (let i = 0; i < plays.length; i++) {
            if (plays[i] === null) {
                cont++;
            }
        }

        if (cont === 0) {
            let checkWinner1 = calculateWinner(plays);
            setWinner(checkWinner1);
            setIsGameFinished(true);
            return null;
        }

        if (cont === 1) {
            const lastPlay = plays.slice();
            lastPlay[e.target.id] = isUserX ? "X" : "O";
            setPlays(lastPlay);
            let checkWinner1 = calculateWinner(lastPlay);
            if (checkWinner1 !== null) {
                setWinner(checkWinner1);
                return null;
            }
            setIsGameFinished(true);
            return null;
        }

        var opponent;
        var newPlay;
        if (isUserX) {
            newPlay = plays.slice();
            newPlay[e.target.id] = "X";
            setPlays(newPlay);
            let checkWinner = calculateWinner(newPlay);
            if (checkWinner !== null) {
                setIsGameFinished(true);
                setWinner(checkWinner);
                return null;
            }

            do {
                opponent = Math.floor(Math.random() * 9);
            } while (newPlay[opponent] !== null)
            newPlay[opponent] = isUserX ? "O" : "X";

        } else {
            newPlay = plays.slice();
            newPlay[e.target.id] = "O";
            setPlays(newPlay);
            let checkWinner = calculateWinner(newPlay);
            if (checkWinner !== null) {
                setIsGameFinished(true);
                setWinner(checkWinner);
                return null;
            }

            do {
                opponent = Math.floor(Math.random() * 9);
            } while (newPlay[opponent] !== null)
            newPlay[opponent] = isUserX ? "O" : "X";
        }
        setPlays(newPlay);

        var cont_1 = 0;
        for (let i = 0; i < newPlay.length; i++) {
            if (newPlay[i] === null) {
                cont_1++;
            }
        }

        if (cont_1 === 0) {
            let checkWinner1 = calculateWinner(newPlay);
            setWinner(checkWinner1);
            setIsGameFinished(true);
            return null;
        }

        let checkWinner = calculateWinner(newPlay);
        if (checkWinner !== null) {
            setIsGameFinished(true);
            setWinner(checkWinner);
            return null;
        }
    }

    return (
        <>
            <div className="container">
                <div className="center" style={{marginTop: "50px"}}>
                    <TTTChoice didUserChoose={didUserChoose} handleUserChoice={handleUserChoice} isUserX={isUserX} />
                </div>
                <table>
                    <tbody>
                        <button onClick={handlePlays} id="0" className="white TTTbtn">{plays[0]}</button>
                        <button onClick={handlePlays} id="1" className="white TTTbtn">{plays[1]}</button>
                        <button onClick={handlePlays} id="2" className="white TTTbtn">{plays[2]}</button>
                    </tbody>
                    <tbody>
                        <button onClick={handlePlays} id="3" className="white TTTbtn">{plays[3]}</button>
                        <button onClick={handlePlays} id="4" className="white TTTbtn">{plays[4]}</button>
                        <button onClick={handlePlays} id="5" className="white TTTbtn">{plays[5]}</button>
                    </tbody>
                    <tbody>
                        <button onClick={handlePlays} id="6" className="white TTTbtn">{plays[6]}</button>
                        <button onClick={handlePlays} id="7" className="white TTTbtn">{plays[7]}</button>
                        <button onClick={handlePlays} id="8" className="white TTTbtn">{plays[8]}</button>
                    </tbody>
                </table>
                <DisplayWinner winner={winner} isUserX={isUserX} finished={finished} />
                <div className="center" style={{ marginBottom: "100px" }}>
                    <button onClick={handleAgain} className="waves-effect waves-light black btn">Start Again</button>
                </div>
            </div>
        </>
    );
}

export default TicTacToe;