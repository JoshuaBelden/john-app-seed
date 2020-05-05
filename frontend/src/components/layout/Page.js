import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import { Footer } from './Footer';

export const Page = () => (
    <Fragment>
        <header id="header" className="page">
            <img id="logo" src="images/logo.png" alt="john app seed logo" width="128" />
            <nav id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
        <section className="container">
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
        </section>
    </Fragment>
);
