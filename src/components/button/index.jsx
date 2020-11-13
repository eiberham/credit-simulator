import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({type, name, text}) => {
    return (
        <button 
            type="button" 
            name={name} 
            className={`btn btn--${type}`}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['info', 'success']).isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    type: 'info'
}

export default Button;