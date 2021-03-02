import Picture from './Picture'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'


const Pictures = ({ pictures, onDelete, onLikePicture, addComment, incraseSize, sizeHelp, imageControl, sizeID, deleteComment}) => {

    if(sizeHelp){
        return(
            <div className={'flexBox'}>
                    <AiFillCaretLeft className={'AiFillCaret'} onClick={() => imageControl(sizeID, "down")}/>
                    {pictures.slice(0).reverse().map((picture) => (  
                        picture.id === sizeID 
                        ? <Picture  key={picture.id} 
                                    picture={picture} 
                                    onDelete={onDelete} 
                                    onLikePicture={onLikePicture} 
                                    addComment={addComment} 
                                    incraseSize={incraseSize} 
                                    pictureSize={"100%"} 
                                    sizeHelp={sizeHelp} 
                                    deleteComment={deleteComment}/> 
                        : ""
                    ))}
                    <AiFillCaretRight className={'AiFillCaret'} onClick={() => imageControl(sizeID, "up")}/>
            </div>
        )
    }else{
        return (
            <>
                {pictures.slice(0).reverse().map((picture) => (  
                    <Picture key={picture.id} picture={picture} onDelete={onDelete} onLikePicture={onLikePicture} addComment={addComment} incraseSize={incraseSize} pictureSize={"60%"} sizeHelp={sizeHelp}/>
                ))}
            </>
        )
    }

}

export default Pictures
