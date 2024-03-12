
import React from 'react';
import './watch.css'

const Watch = ({watch, handleCard}) => {
    const {name,price} = watch
    return (
        <div className='Watching'>
            <h2>Watchs:{name}</h2>
            <p>{price}</p>
            <button onClick={()=>{handleCard()}}>add button</button>
        </div>
    );
};

export default Watch;