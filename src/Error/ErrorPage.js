import React from "react";
import { Link } from "react-router-dom";
import ErrorCodes from "./ErrorCodes";
import "./ErrorPage.css";

export default class ErrorPage extends React.Component {
    render() {
        return (
            <div className="error-page">
                <div className="pad" />
                    <div className="main">
                        <div className="pad" />
                        <main>
                            <h1>Unexpected Error</h1>
                            <h3>{ErrorCodes[this.props.match.params.id] || ErrorCodes[0]}</h3>
                            <Link to="/">Retry</Link>
                        </main>
                        <div className="pad" />
                    </div>
                <div className="pad" />
            </div>
        );
    }
}
