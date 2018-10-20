import React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                Hello, world!
                <br />
                This is the home page.
                <br />
                <Link to="/about">This is a link</Link>
            </div>
        );
    }
}
