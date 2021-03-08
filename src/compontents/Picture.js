import { FaTimes, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import Comment from './Comment';
import store from '../store';



const Picture = ({ picture, onLikePicture, onDelete, addComment, incraseSize, pictureSize, sizeHelp, deleteComment}) => {
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!comment){
            alert('Please add a task!')
        }
        let newComment= comment.split('');
        let newComment2 = [];
        for(let i=0; i< newComment.length; i++){
            if(newComment[i]===':' && newComment[i+1]==='D'){
                newComment2.push('😀');
                i++;
            }else if(newComment[i]===':' && newComment[i+1]==='P'){
                newComment2.push('😜');
                i++;
            }else if(newComment[i]==='>' && newComment[i+1]==='.' && newComment[i+2]==='<'){
                newComment2.push('😝');
                i+=2;
            }else if(newComment[i]===':' && newComment[i+1]==='*'){
                newComment2.push('😘');
                i++;
            }else if(newComment[i]==='B' && newComment[i+1]===')'){
                newComment2.push('😎');
                i++;
            }else if(newComment[i]===':' && newComment[i+1]==='O'){
                newComment2.push('😲');
                i++;
            }else if(newComment[i]==='O' && newComment[i+1]===':' && newComment[i+2]===')'){
                newComment2.push('😇');
                i+=2;
            }else if(newComment[i]==='<' && newComment[i+1]==='3'){
                newComment2.push('❤️');
                i++;
            }else if(newComment[i]===';' && newComment[i+1]===')'){
                newComment2.push('😉');
                i++;
            }else if(newComment[i]==='°' && newComment[i+1]==='°' && newComment[i+2]==='.'){
                newComment2.push('🙄');
                i+=2;
            }else if(newComment[i]==='?' && newComment[i+1]==='M'){
                newComment2.push('🤷‍♂️');
                i++;
            }else if(newComment[i]==='?' && newComment[i+1]==='F'){
                newComment2.push('🤷');
                i++;
            }else{
                newComment2.push(newComment[i]);
            }
        }
        console.log(newComment2);
        addComment(newComment2, picture.id)
        setComment('')

    }

    if(sizeHelp){
        return (
            <div style={{width: '100%'}}>
                <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                    <img src={picture.file} alt="adminPicture"  style={{cursor: 'pointer', width: "50em", display: "block"}} onDoubleClick={() => onLikePicture(picture.id)}/>
                
                    <span>
                        <FaAngleUp id={'actionLike'} onClick={() => onLikePicture(picture.id)}/>
                        {store.getState()[0].username === picture.username 
                            ? <FaTimes id={'actionDelete'} onClick={() => onDelete(picture.id)}/> 
                            : ""}
                    </span>

                    <span style={{display: 'flex', height: '30px', width: '70%', border: '1px solid white', borderRadius: '5px', padding: '5px 2px 0px 2px', backgroundColor: '#638396'}}>
                        <div style={{width: '33%', textAlign: 'left'}}><b>Upload date: {picture.date}</b></div>
                        <div style={{width: '33%', textAlign: 'center'}}><b>{picture.likes} Likes</b></div>
                        <div style={{width: '33%', textAlign: 'right'}}><b>{picture.username}</b></div>
                    </span>
                </div>

                
                <Comment onSubmit={onSubmit} picture={picture} comment={comment} setComment={setComment} deleteComment={deleteComment}/>

                <form onSubmit={onSubmit} className={'alignCenter'} style={{width: "20em", border: "none"}}>
                    <input className={'sendinput'} type='text' placeholder='New comment' value={comment} onChange={(e) => setComment(e.target.value, picture.id)} />
                    <button className={'sendbutton'} type="submit">Send</button>
                </form>
            </div>
        )
    }else{
        return (
            <div className={'tooltip'}>
                <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer'}} 
                    onClick={() => incraseSize(picture.id)}>
                </img><br/>
                <span className={'tooltiptext'}>Uploaded: {picture.username}</span>
            </div>
        )
    }
  

 
}

export default Picture
