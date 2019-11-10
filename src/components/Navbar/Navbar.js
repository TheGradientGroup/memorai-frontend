import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import classNames from 'classnames';
import logo from '../../logo-inverted.svg';
import './Navbar.css';

class _NavbarLink extends Component {
    render() {
        return (
            <Link to={this.props.to} onClick={this.props.onClick} className={classNames('navbar-item', 'special', { 'hidden': this.props.hidden })}>
                {this.props.children}
            </Link>
        );
    }
}

var NavbarLink = withRouter(_NavbarLink);

class Navbar extends Component {
    render() {
        var loggedIn = this.props.isLoggedIn;
        return (
            <div className="navbar is-dark" style={{ background: '#008EF4' }}>
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src={logo} alt="logo" width="112" />
                    </Link>
                    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <NavbarLink to="/">
                            Home
                            </NavbarLink>
                        <NavbarLink to="/decks" hidden={!loggedIn}>
                            My Decks
                            </NavbarLink>
                    </div>
                    <div className="navbar-end">
                        <NavbarLink to="#" onClick={() => this.props.firebase.doSignIn()} hidden={loggedIn}>
                            Login
                        </NavbarLink>
                        <NavbarLink to="#" onClick={() => this.props.firebase.doSignOut()} hidden={!loggedIn}>
                            Log out&nbsp;<strong>{this.props.firebase.auth.currentUser ? this.props.firebase.auth.currentUser.displayName : ''}</strong>
                        </NavbarLink>
                    </div>
                </div>
            </div>

        );
    }
}

export default withFirebase(Navbar);