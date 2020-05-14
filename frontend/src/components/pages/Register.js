import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { createAlert } from '../../actions/alert';
import { createRegistration } from '../../actions/auth';

const Register = ({ createAlert, createRegistration, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordMatch: ''
    });

    const { name, email, password, passwordMatch } = formData;

    const onChange = (event) => setFormData({
        ...formData, [event.target.name]: event.target.value
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        if (password !== passwordMatch) {
            createAlert('Passwords do not match.', 'danger', 1000);
        } else {
            createRegistration({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <section className="box">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
                    <small className="form-text">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password} onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordMatch"
                        value={passwordMatch} onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
                <Link to="/">Cancel</Link>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    );
};

Register.propTypes = {
    createAlert: PropTypes.func.isRequired,
    createRegistration: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.authData.isAuthenticated
})

export default connect(mapStateToProps, { createAlert, createRegistration })(Register);
