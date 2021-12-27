import React, {useState, useEffect} from 'react';

const CommentDetails = ({match}) => {
    const [commentData, setCommentData] = useState([])
    const fetchComments = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
        const commentData = await fetchItem.json()
    }
    useEffect(() => {
        fetchComments()
    }, [commentData])
    return (
        <div>
            {commentData.map((card) => (
                <div key={card.id}>
                    <div>{card.name}</div>
                    <div>{card.email}</div>
                    <div>{card.body}</div>
                </div>
            ))}

        </div>
    );
};

export default CommentDetails;