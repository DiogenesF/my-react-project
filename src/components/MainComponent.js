import React, { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyContent from "./MyContentComponent";
import Game from "./GameComponent";
import NotFound from "./NotFoundComponent";
import RPS from "./Games/RockPaperScissors";
import TicTacToe from "./Games/TicTacToeComponent";
import SignUp from "./Accounts/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";

function Main() {
  const [plays, setPlays] = useState([]);
  const [toggle, setToggle] = useState(false);

  const addPlay = (play) => {
    const newState = [...plays, play];
    setPlays(newState);
  };

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
  };

  const resetPlays = () => {
    const newState = [];
    setPlays(newState);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/my-react-project" component={MyContent} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/notfound" component={NotFound} />
        <Route
          exact
          path="/RPS"
          component={() => (
            <RPS
              plays={plays}
              addPlay={addPlay}
              toggle={toggle}
              handleToggle={handleToggle}
              resetPlays={resetPlays}
            />
          )}
        />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/TicTacToe" component={TicTacToe} />
        <Redirect to="/notfound" />
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
