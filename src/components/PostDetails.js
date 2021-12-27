import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";
import axios from "axios";

const PostDetails = ({match}) => {
    const [fetchPost, setFetchPost] = useState([])

    const productDetails = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${match.params.id}`)
            .then((res) => {
                const myPost = res.data
                setFetchPost(myPost)
                console.log(myPost)
            }).catch((error) => {
            console.log('I am Here', error)
        })
    }
    useEffect(() => {
        productDetails()
    }, [])
    return (
        <div>
            {
                fetchPost.map((post) => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))
            }
        </div>
    );
};

export default PostDetails;