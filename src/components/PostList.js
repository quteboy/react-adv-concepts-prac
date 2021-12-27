import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
const PostList = () => {
    const [post, setPost] = useState([])
    const getMyPost = () => axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            const myPost = res.data
            setPost(myPost)
        })
    useEffect(() => {
        getMyPost()
    }, [])
    return (
        <div>
            {
                post.slice(0, 20).map((item) => (
                    <div key={item.userId}>
                        <div style={{border: '1px solid lightgrey', padding: '5px', backgroundColor: 'grey'}}>
                            <Link to={`/post/${item.id}`} style={{textDecoration:'none',cursor:'pointer'}}>
                                {item.title}
                            </Link>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostList;