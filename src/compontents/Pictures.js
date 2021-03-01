import Picture from './Picture'
import store from '../store'
import currentUser from '../getCurrentUser'





const Pictures = ({ pictures, onDelete, onLikePicture}) => {
        
    return (
        <>
            {pictures.map((picture) => (  
                picture.username === currentUser() ? <Picture key={picture.id} picture={picture} onDelete={onDelete} onLikePicture={onLikePicture} /> : ""
            ))}
        </>
    )
}

export default Pictures
