import React, { Fragment } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    let location = useLocation();

    const logoutUser = () => {
        logout();
        return <Redirect to="/" />
    }

    const ProfileMenuItem = () => (
        user && location.pathname !== '/profile/me'
            ? <li><Link to={'/profile/me'}>{user.email}</Link></li>
            : <Fragment />
        )

    const authLinks = (
        <ul>
            <li><a href="mailto:johnappseed@joshuabelden.com">Contact</a></li>
            <ProfileMenuItem />
            <li>
                <a onClick={logoutUser} href="/">
                    <i className="fas fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><a href="mailto:johnappseed@joshuabelden.com">Contact</a></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="button">Register</Link></li>
        </ul>
    );

    return (
        <nav id="nav">
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    );
};

const mapStateToProps = state => ({
    auth: state.authData,
});

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    user: PropTypes.object,
};

export default connect(mapStateToProps, { logout })(Navbar);
