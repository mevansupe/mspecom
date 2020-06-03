import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { listProducts, clearProducts } from "../actions/productActions";
import axios from "axios";

function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const productList = useSelector(state => state.productList);
    // const {products, loading, error} = productList;
    // const dispatch = useDispatch();

    const getProducts = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
        // dispatch(listProducts());
        return () => {
            // console.log(products);
            // dispatch(clearProducts());
            // console.log(products);
        };
        // const fetchData = async () => {
        //     const {data} = await axios.get("/api/products");
        //     setProducts(data);
        // }
        // fetchData()
    }, []);

    return <>
        {loading ? <div>Loading...</div> :
            // error ? <div>{error}</div> :
                <ul className="products">
                    {
                        products.map(product =>
                            <li key={product._id}>
                                <div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={product.image} alt="product" />

                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
                                </div>
                            </li>)
                    }
                </ul>
        }
    </>
}

export default HomeScreen;