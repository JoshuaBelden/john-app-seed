import React, { Fragment } from 'react';

import Navbar from './Navbar';
import { Footer } from './Footer';
import { Subscribe } from './Subscribe';

export const Dashboard = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <header id="header" className="alt">
                    <a id="contribution" href="https://github.com/JoshuaBelden/john-app-seed">Contribute on GitHub</a>
                    <Navbar />
                </header>
                <section id="banner">
                    <img id="logo" src="images/logo.png" alt="john app seed logo" />
                    <p>A starter template for kickass web apps.</p>
                </section>

                <section id="main" className="container">
                    <section className="box special">
                        <header className="major">
                            <h2>MERN: The Modern Application Stack</h2>
                            <div>
                                <p>
                                    This application was built using Mongo, Express, React and Node. Designed from the ground up to be the quickest path to market, allowing you to focus on the features that matter most. Making intelligent use of Docker, Compose, NGINX and Let's Encrypt, this application is ready to go to production the moment you clone the repository.
							    </p>
                            </div>
                        </header>
                    </section>
                    <section className="box special features">
                        <div className="features-row feature-card-container">
                            <div className="feature-card">
                                <div className="feature-card-header">
                                    <i className="fa fa-beer" />
                                    Inspiration
                                </div>
                                <div className="feature-card-content">
                                    <p>
                                        John App Seed was developed after putting together pandemicmemorial.com and jumping through too many hurdles to get the app deployed. The hope is that when an idea for an app hits you, basic app infrastructure has already been handled.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card-header">
                                    <i className="fa fa-route" />
                                    Getting Started
                                </div>
                                <div className="feature-card-content">
                                    <p>
                                        The easiest way to get started is to visit our <a href="https://github.com/JoshuaBelden/john-app-seed">GitHub repository</a> and review the readme.md.
                                    </p>
                                </div>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card-header">
                                    <i className="fa fa-hand-holding-heart" />
                                    Contribute
                                </div>
                                <div className="feature-card-content">
                                    <p>
                                        Excited to be a part of something cool? We'd love to get some help. Visit our <a href="https://github.com/JoshuaBelden/john-app-seed">GitHub repository</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <Subscribe />
                <Footer />
            </div>

        </Fragment>
    );
};
