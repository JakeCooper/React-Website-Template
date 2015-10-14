/** @jsx React.DOM */
'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar/navbar.jsx');
require("../less/main.less"); //load less main file to compile all less.

class Index extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )

    }
}

ReactDOM.render(<Index />, document.getElementById('content'));
