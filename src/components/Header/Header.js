import React, { useState } from 'react';

const Header = (props) => {
    const [count, setCount]  =useState(0);
    return (
        <div>
            <h3>This is Header: {count} </h3>
        </div>
    );
};

export default Header;