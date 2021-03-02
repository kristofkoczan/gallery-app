import { FaTimes, FaAngleUp } from 'react-icons/fa'
import { useState } from 'react'
import Comment from './Comment'
import store from '../store'



const Picture = ({ picture, onLikePicture, onDelete, addComment, incraseSize, pictureSize, sizeHelp, deleteComment}) => {
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!comment){
            alert('Please add a task!')
        }
        addComment(comment, picture.id)
        setComment('')

    }

    if(sizeHelp){
        return (
            <div style={{margin: "0% 30% 0% 30%"}}>
                <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer', width: pictureSize, display: "block", margin: "auto"}} 
                    onClick={() => incraseSize(picture.id)}/>
                {store.getState()[0].username === picture.username ? <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(picture.id)}/> : ""}
                <FaAngleUp style={{color: 'green', cursor: 'pointer'}} onClick={() => onLikePicture(picture.id)}/>
                <table style={{ padding: '1em', width: '100%'}}>
                    <tbody>
                        <tr>
                            <th style={{width: "30%"}}><h5>Upload date: {picture.date}</h5></th>
                            <th style={{width: "30%"}}>{picture.likes} Like</th>
                            <th style={{width: "30%"}}>{picture.username}</th>
                        </tr>
                    </tbody>     
                </table>
                
                <Comment onSubmit={onSubmit} picture={picture} comment={comment} setComment={setComment} deleteComment={deleteComment}/>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='New comment' value={comment} onChange={(e) => setComment(e.target.value, picture.id)} />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }else{
        return (
            <div style={{margin: "0% 30% 0% 30%"}}>
                <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer', width: pictureSize, display: "block", margin: "auto"}} 
                    onClick={() => incraseSize(picture.id)}/>
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
  

 
}

export default Picture
