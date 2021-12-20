import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Typography} from "@material-ui/core";

function Challenge3() {
    const [comments, setComments] = useState([])
    const [visibility, setVisibility] = useState(0)
    const fetchComments = async () => {
        try {
            const results = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            const myComms = results.data
            setComments(myComms)
        } catch (error) {
            console.log('Find me in logs', error)
        }
    }
    useEffect(() => {
        fetchComments()
    }, [])
    const toggleVisibility = () => {
        setVisibility(visibility + 5)
    }
    return (
        <div>
            {
                comments.slice(0, visibility).map((comment) => (
                    <div key={comment.id}>
                        <div>
                            {comment.title}
                        </div>
                        <div>
                            {comment.body}
                        </div>

                    </div>
                ))
            }
            <button onClick={() => toggleVisibility()}>
                Fetch Comments
            </button>
        </div>
    );
};

export default Challenge3;