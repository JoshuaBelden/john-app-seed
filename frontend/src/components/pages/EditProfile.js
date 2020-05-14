import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';

import { updateProfile, getMyProfile } from '../../actions/profile';

const EditProfile = ({
    authData: { user },
    profileData: { myProfile, loading },
    updateProfile,
    getMyProfile,
    history }) => {

    useEffect(() => {
        if (loading || !user || !myProfile) {
            getMyProfile();
            setFormData({
                name: '',
                biography: '',
                birthday: '',
                company: '',
                facebook: '',
                github: '',
                instagram: '',
                linkedin: '',
                location: '',
                profileimage: '',
                twitter: '',
                website: '',
                youtube: '',
            });
        } else {
            setFormData({
                biography: myProfile.biography,
                birthday: myProfile.birthday,
                company: myProfile.company,
                github: myProfile.github,
                location: myProfile.location,
                name: user.name,
                profileimage: myProfile.profileimage,
                website: myProfile.website,
                facebook: myProfile.social ? myProfile.social.facebook : '',
                instagram: myProfile.social ? myProfile.social.instagram : '',
                linkedin: myProfile.social ? myProfile.social.linkedin : '',
                twitter: myProfile.social ? myProfile.social.twitter : '',
                youtube: myProfile.social ? myProfile.social.youtube : '',
            });
        }
    }, [loading]
    );

    const [formData, setFormData] = useState({
        name: '',
        biography: '',
        birthday: '',
        company: '',
        github: '',
        location: '',
        profileimage: '',
        website: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
        youtube: '',
    });

    const {
        name,
        biography,
        birthday,
        company,
        github,
        location,
        profileimage,
        website,
        facebook,
        instagram,
        linkedin,
        twitter,
        youtube,
    } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        updateProfile(formData, history, true);
    };

    return (
        <section className="box">
            <h1 className="large text-primary">
                Editing Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get your info.
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label className="form-text">Name:</label>
                    <input type="text" placeholder="Your name" name="name" value={name} onChange={(e) => onChange(e)} required />
                </div>
                <div className="form-group">
                    <label className="form-text">Profile image:</label>
                    <input type="text" placeholder="Choose an image" name="profileimage" value={profileimage} onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <label className="form-text">Biography</label>
                    <textarea placeholder="A short bio of yourself" name="biography" value={biography} onChange={(e) => onChange(e)} ></textarea>
                </div>
                <div className="form-group">
                    <label className="form-text">Birthday:</label>
                    <input type="date" placeholder="Birthday" name="birthday" value={birthday} onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <label className="form-text">Company:</label>
                    <input type="text" placeholder="Name of your company" name="company" value={company} onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <label>Website</label>
                    <input type="text" placeholder="Website" name="website" value={website} onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <label className="form-text">Location</label>
                    <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <label className="form-text">GitHub Username</label>
                    <input type="text" placeholder="Github Url" name="github" value={github} onChange={(e) => onChange(e)} />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-twitter fa-2x"></i>
                    <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={(e) => onChange(e)} />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-facebook fa-2x"></i>
                    <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={(e) => onChange(e)} />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-youtube fa-2x"></i>
                    <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={(e) => onChange(e)} />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={(e) => onChange(e)} />
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-instagram fa-2x"></i>
                    <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={(e) => onChange(e)} />
                </div>

                <input type="submit" className="btn btn-primary my-1" onSubmit={e => onSubmit(e)} />
                <Link className="btn btn-light my-1" to="/profile">Go Back</Link>
            </form>
        </section>
    );
};

EditProfile.propTypes = {
    authData: PropTypes.object.isRequired,
    profileData: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
    getMyProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    authData: state.authData,
    profileData: state.profileData
});

export default connect(mapStateToProps, { updateProfile, getMyProfile })(withRouter(EditProfile));
