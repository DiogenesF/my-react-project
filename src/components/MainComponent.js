import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import MyContent from "./MyContentComponent";
import Game from "./GameComponent";
import NotFound from "./NotFoundComponent";
import RPS from "./Games/RockPaperScissors";
import TicTacToe from "./Games/TicTacToeComponent";
import { Route, Switch, Redirect } from "react-router-dom";


class Main extends React.Component {
    state = {
        plays: [],
        toggle: false
    }

    addPlay = (play) => {
        const state = [...this.state.plays, play];
        this.setState({
            plays: state
        })
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    resetPlays = () => {
        this.setState({
            plays: []
        })
    }

    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={MyContent} />
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/notfound" component={NotFound} />
                    <Route exact path="/RPS" component={() => <RPS plays={this.state.plays} addPlay={this.addPlay}
                                                toggle={this.state.toggle} handleToggle={this.handleToggle}
                                                resetPlays={this.resetPlays}/>} />
                    <Route exact path="/TicTacToe" component={TicTacToe} />
                    <Redirect to="/notfound" />

                </Switch>
                <Footer />
            </>
        );
    }
}

export default Main;