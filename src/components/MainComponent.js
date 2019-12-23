import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyContent from "./MyContentComponent";
import Game from "./GameComponent";
import NotFound from "./NotFoundComponent";
import RPS from "./Games/RockPaperScissors";
import TicTacToe from "./Games/TicTacToeComponent";
import { Route, Switch, Redirect} from "react-router-dom";


class Main extends React.Component {
    render() {
        return (
            <>
            <Header />
            <Switch>
                <Route path="/home" component={MyContent}/>
                <Route exact path="/game" component={Game}/>
                <Route exact path="/notfound" component={NotFound} />
                <Route exact path="/RPS" component={RPS} />
                <Route exact path="/TicTacToe" component={TicTacToe} />
                <Redirect to="/notfound" />

            </Switch>
            <Footer />
            </>
        );
    }
}

export default Main;