import React from "react";
import GameView from "./GameView";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import NetworkManager from "../Network/NetworkManager";
import "./GamePage.css";

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": null
        };
    }

    componentDidMount() {
        NetworkManager.authenticate(name => {
            this.setState({
                "name": name
            });
        });
    }

    render() {
        return (
            <div className="game-page">
                <div className="top">
                    <TopBar model={this.state} />
                </div>
                <div className="bottom">
                    <div className="left">
                        <SideBar model={this.state} />
                    </div>
                    <div className="right">
                        <GameView model={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}
