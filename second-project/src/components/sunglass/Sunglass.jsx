
import React from 'react';
import './Sunglass.css'
import '../Watch/Watch'
import { Add, multiply } from '../../Utlis/Calcualte';

const Sunglass = () => {
    const first = 55;
    const second = 99;
    const sum = Add(first,second)
    const mul = multiply(first,second)
    return (
        <div>
            
        </div>
    );
};

export default Sunglass;