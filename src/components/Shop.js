import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Shop = () => {
    const [comment, setComments] = useState([])
    const fetchItem = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments')
        const items = await data.json()
        setComments(items)
    }
    useEffect(() => {
        fetchItem()
    }, [])
    return (
        <div>
            {
                comment.slice(0, 20).map((curItem) => (
                    <div key={curItem.id} style={{border: '1px solid darkgrey', padding: '10px'}}>
                        <Link to={`/shop/${curItem.id}`} style={{textDecoration:'none'}}>
                            <h4 >
                                {curItem.name}
                            </h4>
                        </Link>

                        <div>
                            {curItem.email}
                        </div>
                        <div>
                            {curItem.body}
                        </div>
                    </div>
                ))
            }
            Hello from Shop
        </div>
    );
};

export default Shop;