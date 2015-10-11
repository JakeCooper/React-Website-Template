/** @jsx React.DOM */
'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./Hello');
require("../less/main.less"); //load less main file to compile all less.

ReactDOM.render(<Hello />, document.getElementById('content'));
