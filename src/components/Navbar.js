import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../logo-inverted.svg';
import './Navbar.css';

class _NavbarLink extends Component {
    render() {
        console.log(this.props)
        return (
            <Link to={this.props.to} className={classNames('navbar-item', 'special')}>
                {this.props.children}
            </Link>
        );
    }
}

var NavbarLink = withRouter(_NavbarLink);

class Navbar extends Component {
    render() {
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
                        <NavbarLink to="/cards">
                            Hi
                        </NavbarLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;