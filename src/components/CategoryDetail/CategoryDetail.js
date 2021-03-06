import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const CategoryDetail = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h3>This is your category Detail.</h3>
            <h6>Selected category: {category} </h6>

        </div>
    );
};

export default CategoryDetail;