import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import moment from 'moment';

import { getMyProfile } from '../../actions/profile';

import Spinner from '../../components/layout/Spinner';

export const ProfileNotFound = () => (
    <Fragment>
        <p>You don't have a profile yet.</p>
        <Link to='/edit-profile' className='btn btn-primary my-1'>Create/Edit Profile</Link>
    </Fragment>
)

export const Profile = ({
    getMyProfile,
    authData: { isAuthenticated, user },
    profileData: { myProfile, loading }
}) => {
    useEffect(() => {
        getMyProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isAuthenticated) {
        return <Redirect to="/" />;
    }

    return loading && myProfile === null
        ? <Spinner />
        : <Fragment>
            <section className="box">
                {myProfile && myProfile.user
                    ? <Fragment>
                        <h3 className="large text-primary">{ myProfile.user.name }</h3>
                        <article className="profile">
                            { myProfile.website ? (
                                <div>
                                    <a href={ myProfile.website } target="_blank" rel="noopener noreferrer">{ myProfile.website }</a>
                                </div>
                                ) : <Fragment />
                            }
                            { myProfile.birthday ? (
                                <div>
                                    <label>Born</label>
                                    { moment(myProfile.birthday).format('dddd MMMM Do, YYYY') }
                                </div>
                                ) : <Fragment />
                            }
                            { myProfile.location ? (
                                <div>
                                    <label>Currently in</label>
                                    { myProfile.location }
                                </div>
                                ) : <Fragment />
                            }
                            { myProfile.company ? (
                                <div>
                                    <label>Working for</label>
                                    { myProfile.company }
                                </div>
                                ) : <Fragment />
                            }
                        
                            { myProfile.biography ? (
                                <p className="biography">
                                    { myProfile.biography }
                                </p>
                                ) : <Fragment />
                            }

                            <div className="social-links">
                                { myProfile.social && myProfile.social.twitter ? (
                                    <span>
                                        <a href={myProfile.social.twitter} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </a>
                                    </span>
                                    ) : <Fragment /> 
                                }
                                { myProfile.social && myProfile.social.facebook ? (
                                    <span>
                                        <a href={myProfile.social.facebook} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook fa-2x"></i>
                                        </a>
                                    </span>
                                    ) : <Fragment /> 
                                }
                                { myProfile.social && myProfile.social.youtube ? (
                                    <span>
                                        <a href={myProfile.social.youtube} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube fa-2x"></i>
                                        </a>
                                    </span>
                                    ) : <Fragment /> 
                                }
                                { myProfile.social && myProfile.social.linkedin ? (
                                    <span>
                                        <a href={myProfile.social.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                    </span>
                                    ) : <Fragment /> 
                                }
                                { myProfile.social && myProfile.social.instagram ? (
                                    <span>
                                        <a href={myProfile.social.instagram} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram fa-2x"></i>
                                        </a>
                                    </span>
                                    ) : <Fragment /> 
                                }
                            </div>
                        </article>

                        <div>
                            <Link to='/edit-profile' className='btn btn-primary my-1'>Edit Profile</Link>
                        </div>
                    </Fragment>
                    : <ProfileNotFound />
                }
            </section>
        </Fragment>;
};

Profile.propTypes = {
    getMyProfile: PropTypes.func.isRequired,
    authData: PropTypes.object.isRequired,
    profileData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    authData: state.authData,
    profileData: state.profileData
});

export default connect(mapStateToProps, { getMyProfile })(Profile);
