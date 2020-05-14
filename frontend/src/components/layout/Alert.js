import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createAlert, deleteAlert } from '../../actions/alert';

const Alert = ({ createAlert, deleteAlert, alerts }) => (
    <div className="alert-container">
        {
            alerts.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.alertType}`} onClick={() => deleteAlert(alert)}>
                    {alert.message}
                </div>
            ))
        }
    </div>
);

Alert.propTypes = {
    createAlert: PropTypes.func.isRequired,
    deleteAlert: PropTypes.func.isRequired,
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    alerts: state.alertData
});

export default connect(mapStateToProps, { createAlert, deleteAlert })(Alert);
