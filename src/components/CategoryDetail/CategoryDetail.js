import React from 'react';


const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h3>This is your category Detail.</h3>
            <h6>Selected product: {name} </h6>

        </div>
    );
};

export default CategoryDetail;