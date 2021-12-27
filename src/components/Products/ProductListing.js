import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "./ProductItem";
import axios from "axios";
import {setProducts} from "../../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatchProduct = useDispatch();
    // const [product, setProduct] =
    const fetchProduct = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log('Error', error)
            })
        dispatchProduct(setProducts(response.data))
    }
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <div className="ui grid container">
            <ProductItem/>
        </div>
    );
};

export default ProductListing;