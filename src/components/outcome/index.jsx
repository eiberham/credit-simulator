import React from 'react';
import PropTypes from 'prop-types';

import './outcome.css';

const Outcome = props => {
    const { label, result } = props;
    return (
        <div className="outcome">
            <span>{label}</span>
            <span>{result}</span>
        </div>
    )
};

Outcome.propTypes = {
    label: PropTypes.string.isRequired,
    result: PropTypes.number
}

Outcome.defaultProps = {
    result: 0
}

export default Outcome;