/** @jsx React.DOM */
'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./Hello.jsx');
require("../less/main.less"); //load less main file to compile all less.

class Index extends React.Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        )

    }
}

ReactDOM.render(<Index />, document.getElementById('content'));
