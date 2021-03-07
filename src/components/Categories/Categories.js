import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'Lenovo', category:'laptop'}, {name: 'Asus', category:'laptop'}, {name: 'Dell', category:'laptop'},
    {name: 'Samsung', category:'mobile'}, {name: 'Nokia', category:'mobile'}, {name: 'apple', category:'mobile'},
    {name: 'Canon', category:'camera'}, {name: 'Nikor', category:'camera'}, {name: 'Sony', category:'camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        console.log({category});
        const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    
    return (
        <div>
            <h2>This is categories</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;