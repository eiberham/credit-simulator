import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './range.css';

import { formatter } from '../../utils';

const style = {
    fontSize: '14px',
    color: 'white',
};

const Range = ({label, currency, minRange, maxRange, invokeFunction}) => {
    const [max, setMax] = useState('');

    const marks = {
        [minRange]: {
            style,
            label: <strong>{`${currency ? '$' : ''}${minRange}`}</strong>,
          },
        
        [maxRange]: {
            style,
            label: <strong>{`${currency ? '$' : ''}${maxRange}`}</strong>,
          },
    };

    const onSliderChange = value => {
        setMax(value)
        invokeFunction(value)
    }

    return (
        <div className="range">
            <div className="row">
                <span className="label">{label}</span>
                <input type="text" value={currency ? formatter.format(max) : max} readOnly />
            </div>
            
            <Slider 
                min={minRange} 
                max={maxRange} 
                onChange={onSliderChange} 
                marks={marks}
                step={currency ? 1000 : 1}
            /> 
        </div>
    )
}

Range.propTypes = {
    label: PropTypes.string.isRequired,
    currency: PropTypes.bool,
    minRange: PropTypes.number.isRequired,
    maxRange: PropTypes.number.isRequired,
    invokeFunction: PropTypes.func.isRequired
}

Range.defaultProps = {
    currency: false
}

export default Range;