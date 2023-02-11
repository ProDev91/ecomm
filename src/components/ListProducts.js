import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios.get('http://localhost:80/api/products/').then(function(response) {
            console.log(response.data);
            setProducts(response.data);
        });
    }
    return (
        <div>
HEllo
        </div>
    )
}
