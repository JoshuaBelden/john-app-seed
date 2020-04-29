import React, { Fragment } from 'react';

import Navbar from './Navbar';
import { Footer } from './Footer';
import { Subscribe } from './Subscribe';

export const Dashboard = () => {
    return (
        <Fragment>
            <header id="header" className="alt">
                <a id="contribution" href="https://github.com/JoshuaBelden/john-app-seed">Contribute on GitHub</a>
                <Navbar />
            </header>
            <section id="banner">
                <h2>John App Seed</h2>
                <p>A starter template for kickass web apps.</p>
            </section>

            <section id="main" className="container">
                <section className="box special">
                    <header className="major">
                        <h2>Header</h2>
                        <div>
                            <p>
                                Topic
							</p>
                        </div>
                    </header>
                    <span className="image featured"><img src="images/feature.jpg" alt="" /></span>
                </section>
                <section className="box special features">
                    <div className="features-row">
                        Content
                    </div>
                </section>
            </section>

            <section id="dev-notes" className="box">
                <p>footer notes</p>
            </section>

            <Subscribe />

            <Footer />

        </Fragment>
    );
};
