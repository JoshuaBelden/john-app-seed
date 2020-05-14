import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, loadUser } from '../../actions/auth';

const Login = ({ login, loadUser, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (event) => setFormData({
        ...formData, [event.target.name]: event.target.value
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        login(email, password);
        loadUser();
    };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <Fragment>
            <section className="box">
                <h1 className="large text-primary">Sign In</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                    <Link to="/">Cancel</Link>
                </form>
                <p className="my-1">
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </section>
        </Fragment>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.authData.isAuthenticated
});

export default connect(mapStateToProps, { login, loadUser })(Login);
