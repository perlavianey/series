import React from 'react';
import loader from '../../assets/loader.gif'

const Loader = props =>{
    return <div>
        <img style={{width:35}}
        src={loader} alt="loader"/>
    </div>
}

export default Loader;