import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./Game/GamePage";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Game} />
                </Switch>
            </BrowserRouter>
        );
    }
}
