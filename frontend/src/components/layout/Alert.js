import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dismissAlert } from '../../actions/alert';

const Alert = ({ dismissAlert, alerts }) => (
    <div className="alert-container">
        {
            alerts.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.alertType}`} onClick={() => dismissAlert(alert)}>
                    {alert.msg}
                </div>
            ))
        }
    </div>
);

Alert.propTypes = {
    dismissAlert: PropTypes.func.isRequired,
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps, { dismissAlert })(Alert);
