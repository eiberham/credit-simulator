import React from 'react';
import PropTypes from 'prop-types';

import './result.css';

const Result = ({label, result}) => {
    return (
        <div className="result">
            <span>{label}</span>
            <span>{result}</span>
        </div>
    )
};

Result.propTypes = {
    label: PropTypes.string.isRequired,
    result: PropTypes.string
}

Result.defaultProps = {
    result: ''
}

export default Result;