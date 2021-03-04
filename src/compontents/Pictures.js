import Picture from './Picture'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'


const Pictures = ({ pictures, onDelete, onLikePicture, addComment, incraseSize, sizeHelp, imageControl, sizeID, deleteComment}) => {

    if(sizeHelp){
        return(
            <div className={'flexBox2'}>
                    <div className={'control'}><AiFillCaretLeft className={'AiFillCaret control1'} onClick={() => imageControl(sizeID, "down")}/></div>
                    <div id={'pictureDiv'}>
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
                    </div>
                    <div className={'control'}><AiFillCaretRight className={'AiFillCaret  control2'} onClick={() => imageControl(sizeID, "up")}/></div> 
            </div>
        )
    }else{
        return (
            <div className={'flexBox'}>
                {pictures.slice(0).reverse().map((picture) => (  
                    <div><div><Picture key={picture.id} picture={picture} onDelete={onDelete} onLikePicture={onLikePicture} addComment={addComment} incraseSize={incraseSize} pictureSize={"80%"} sizeHelp={sizeHelp}/></div></div>
                ))}
            </div>
        )
    }

}

export default Pictures
