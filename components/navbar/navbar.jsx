/** @jsx React.DOM */
'use strict';
var React = require('react');
class Navbar extends React.Component {
    render() {
        var iconContainer =  (
            <div className="logo-container">
                <img src="../../assets/img/uviclogo.png" width="50px"></img>
            </div>);
        var textMenu = (
            <ul className="navbar-sections">
                <li className="navbar-item about">About</li>
                <li className="navbar-item faq">FAQ</li>
                <li className="navbar-item schedule">Schedule</li>
                <li className="navbar-item sponsors">Sponsors</li>
            </ul>
        );
        var iconMenu = (
            <ul className="navbar-icons">
                <li className="navbar-item email"><i className="fa fa-envelope"></i></li>
                <li className="navbar-item facebook"><i className="fa fa-facebook-square"></i></li>
                <li className="navbar-item twitter"><a href="https://www.twitter.com/HackUVIC"><i className="fa fa-twitter"></i></a></li>
            </ul>
        );
        return (
            <section className="navbar">
                {iconContainer}
                {textMenu}
                {iconMenu}
            </section>
        )
    }
}

module.exports = Navbar;