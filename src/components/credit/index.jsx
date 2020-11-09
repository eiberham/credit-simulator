import React, { useState, useEffect } from 'react';
import './credit.css';

import Title from '../title';
import Range from '../range';
import Button from '../button';
import Outcome from '../outcome';

const Credit = () => {
    
    return (
        <div className="credit">
            <Title text="Simulá tu crédito" />
            <Range 
                key="total"
                label={`Monto Total`} 
                minRange={5000} 
                maxRange={50000} 
            />
            <Range 
                key="plazo"
                label={`Plazo`} 
                minRange={3}
                maxRange={24}
            />
            <div className="credit__result">
                <Outcome 
                    label="Cuota fija por mes" 
                    result={0}
                />
            </div>
            <div className="credit__actions">
                <Button 
                    key="credito"
                    type="success" 
                    name="credito"
                    text="Obtené Crédito"
                    size="large"
                />
                <Button 
                    key="cuotas"
                    type="info" 
                    name="cuotas"
                    text="Ver detalle de cuotas"
                    size="small"
                />
            </div>
        </div>
    );
};

export default Credit;