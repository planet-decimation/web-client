import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./Game/GamePage";
import ErrorPage from "./Error/ErrorPage";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/error/:id" component={ErrorPage} />
                    <Route path="/" component={Game} />
                </Switch>
            </BrowserRouter>
        );
    }
}
