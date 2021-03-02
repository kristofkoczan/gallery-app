import { FaTimes, FaAngleUp } from 'react-icons/fa'
import { useState } from 'react'
import store from '../store'


let date = new Date();


const Picture = ({ picture, onLikePicture, onDelete, addComment}) => {
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!comment){
            alert('Please add a task!')
        }
        addComment(comment, picture.id)
        console.log("ID IS ", picture.id)

        setComment('')

    }


  

  return (
        <div style={{margin: "0% 30% 0% 30%" }}>
            <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer', width: "80%", display: "block", margin: "auto"}}/>
            {store.getState()[0].username === picture.username ? <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(picture.id)}/> : ""}
            <FaAngleUp style={{color: 'green', cursor: 'pointer'}} onClick={() => onLikePicture(picture.id)}/>
            <span>
                {picture.comments.length > 0 ? picture.comments.map(comment => 
                    <table key={date}>
                        <tbody>
                            <tr>
                                <th><b>{comment.author}: </b></th>
                                <th>{comment.comment}</th>
                            </tr>
                        </tbody>
                    </table>
                   ) : "No comment for this post yet"}
            </span>

            <form onSubmit={onSubmit}>
                    <input type='text' placeholder='New comment' value={comment} onChange={(e) => setComment(e.target.value, picture.id)} />
                <button type="submit">Send</button>
            </form>

            <table style={{ padding: '1em', width: '100%'}}>
                <tbody>
                <tr>
                    <th style={{width: "30%"}}><h5>Upload date: {picture.date}</h5></th>
                    <th style={{width: "30%"}}>{picture.likes} Like</th>
                    <th style={{width: "30%"}}>{picture.username}</th>
                </tr>
                </tbody>     
            </table>
        </div>

    )
}

export default Picture
