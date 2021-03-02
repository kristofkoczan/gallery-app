import React from 'react'
import { FaTimes } from 'react-icons/fa'
import store from '../store';

let date = new Date();

const Comment = ({ onSubmit, picture, comment, setComment, deleteComment }) => {
    return (
        <div>
                <span>
                    {picture.comments.length > 0 ? picture.comments.map(comment => 
                        <table key={date}>
                            <tbody>
                                <tr stlye={{cursor: "pointer", }}>
                                    {comment.author === store.getState()[0].username ? 
                                        <th><FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteComment(comment.comment, picture.id, comment.commentID)}/></th> 
                                        : ""}
                                    <th><b>{comment.author}: </b></th>
                                    <th>{comment.comment}</th>
                                </tr>
                            </tbody>
                        </table>
                       ) : "No comment for this post yet"}
                </span>
                
        </div>
    )
}

export default Comment
