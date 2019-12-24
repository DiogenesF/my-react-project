import React, { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyContent from "./MyContentComponent";
import Game from "./GameComponent";
import NotFound from "./NotFoundComponent";
import RPS from "./Games/RockPaperScissors";
import TicTacToe from "./Games/TicTacToeComponent";
import { Route, Switch, Redirect } from "react-router-dom";


function Main() {
    const [plays, setPlays] = useState([]);     //These are the state of the Rock Paper Scissors game
    const [toggle, setToggle] = useState(false);//It was declared here to make sure that the state of this game 
                                                //will only be changed if the page is re-rendered.
                                                //A different approach was used in the TicTacToe game.
    const addPlay = (play) => {
        const newState = [...plays, play];
        setPlays(newState);
    }

    const handleToggle = () => {
        const newToggle = !toggle;
        setToggle(newToggle);
    }

    const resetPlays = () => {
        const newState = [];
        setPlays(newState);
    }

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={MyContent} />
                <Route exact path="/game" component={Game} />
                <Route exact path="/notfound" component={NotFound} />
                <Route exact path="/RPS" component={() => <RPS plays={plays} addPlay={addPlay}
                    toggle={toggle} handleToggle={handleToggle}
                    resetPlays={resetPlays} />} />
                <Route exact path="/TicTacToe" component={TicTacToe} />
                <Redirect to="/notfound" />

            </Switch>
            <Footer />
        </>
    );
}

export default Main;