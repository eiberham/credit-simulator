import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider, { Range as RangeSlider } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './range.css';

const Range = props => {
    const { label, prefix, minRange, maxRange } = props;
    const [max, setMax] = useState();
    const ref = useRef();
    const timeout = useRef();

    const debounce = (fn, delay) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(fn, delay);
    }

    const onChange = (e) => {
        const [min, max] = e;
        debounce(() => 
            setMax(max)
        , 10);
    }

    useEffect(() => {
        ref.current.value = max;
    }, [max])

    return (
        <div className="range">
            <div class="row">
                <span className="label">{label}</span>
                <input type="number" value="" readOnly ref={ref} />
            </div>
            
            <RangeSlider 
                min={minRange} 
                max={maxRange} 
                onChange={onChange} 
            /> 
        </div>
    )
}

Range.propTypes = {
    label: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    minRange: PropTypes.string.isRequired,
    maxRange: PropTypes.string.isRequired
}

export default Range;