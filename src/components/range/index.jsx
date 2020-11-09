import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './range.css';

import { formatter } from '../../utils';

const Range = props => {
    const { label, currency, minRange, maxRange, invokeFunction } = props;
    const [max, setMax] = useState('');
    const ref = React.createRef();
    const timeout = useRef();
    const marks = {
        [minRange]: {
            style: {
                fontSize: '14px',
                color: 'white',
            },
            label: <strong>{`${currency ? '$' : ''}${minRange}`}</strong>,
          },
        
        [maxRange]: {
            style: {
                fontSize: '14px',
                color: 'white',
            },
            label: <strong>{`${currency ? '$' : ''}${maxRange}`}</strong>,
          },
    };

    const debounce = (fn, delay) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(fn, delay);
    }

    const onSliderChange = value => {
        debounce(() => {
            setMax(value)
            invokeFunction(value)
        }, 10);
    }

    useEffect(() => {
        ref.current.value = `${currency ? formatter.format(max) : max}`;
    }, [max, currency, ref])

    return (
        <div className="range">
            <div className="row">
                <span className="label">{label}</span>
                <input type="text" value="" readOnly ref={ref} />
            </div>
            
            <Slider 
                min={minRange} 
                max={maxRange} 
                onChange={onSliderChange} 
                marks={marks}
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