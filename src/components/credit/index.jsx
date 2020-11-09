import React, { useState, useEffect } from 'react';
import './credit.css';

import Title from '../title';
import Range from '../range';
import Button from '../button';
import Result from '../result';

import { formatter } from '../../utils';

const calculateFixedFee = amount => period => {
    if (period < 1) return null;
    const result = (amount / period).toFixed(2);
    return formatter.format(result);
}

const Credit = () => {
    const [period, setPeriod] = useState(null);
    const [amount, setAmount] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setResult(calculateFixedFee(amount)(period));
    }, [period, amount]);

    const onAmountChange = amount => setAmount(amount)

    const onPeriodChange = period => setPeriod(period);
    
    return (
        <div className="credit">
            <Title text="Simulá tu crédito" />
            <Range 
                key="total"
                label={`Monto Total`} 
                minRange={5000} 
                maxRange={50000} 
                currency
                invokeFunction={onAmountChange}
            />
            <Range 
                key="plazo"
                label={`Plazo`} 
                minRange={3}
                maxRange={24}
                invokeFunction={onPeriodChange}
            />
            <div className="credit__result">
                <Result 
                    label="Cuota fija por mes" 
                    result={result}
                />
            </div>
            <div className="credit__actions">
                <Button 
                    key="credito"
                    type="success" 
                    name="credito"
                    text="Obtené Crédito"
                />
                <Button 
                    key="cuotas"
                    type="info" 
                    name="cuotas"
                    text="Ver detalle de cuotas"
                />
            </div>
        </div>
    );
};

export default Credit;