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
                                <tr>
                                    {comment.author === store.getState()[0].username ? 
                                        <th style={{width: '30px', border: '1px solid white', backgroundColor: '#638396', borderRadius: '10px', padding: '4px 0px 0px 0px'}}><FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteComment(comment.comment, picture.id, comment.commentID)}/></th> 
                                        : <th style={{width: '30px'}}></th>}
                                    <th style={{width: '150px', border: '1px solid white', backgroundColor: '#638396', borderRadius: '5px 0px 0px 5px', padding: '3px 5px' }}><b>{comment.author}: </b></th>
                                    <th style={{width: '300px', border: '1px solid white', backgroundColor: '#638396', borderRadius: '0px 5px 5px 0px', textAlign: 'left', padding: '3px 5px'}}>{comment.comment}</th>
                                </tr>
                            </tbody>
                        </table>
                       ) : "No comment for this post yet"}
                </span>
                
        </div>
    )
}

export default Comment
