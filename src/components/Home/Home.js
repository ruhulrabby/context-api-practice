import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid purple',
        }}>
            <h3>This is Home: {count}</h3>
            <Categories/>
        </div>
    );
};

export default Home;