import React from "react";
import GameView from "./GameView";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import "./GamePage.css";

export default class GamePage extends React.Component {
    render() {
        return (
            <div className="game-page">
                <div className="top">
                    <TopBar />
                </div>
                <div className="bottom">
                    <div className="left">
                        <SideBar />
                    </div>
                    <div className="right">
                        <GameView />
                    </div>
                </div>
            </div>
        );
    }
}
