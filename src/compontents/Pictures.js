import Picture from './Picture'
import store from '../store'



function currentUser(){

    function check(user){
        if(user.current){
            return user.username
        }
    }

    let nameOfUser = "";
    store.getState().forEach(user => nameOfUser = check(user))
    return nameOfUser
    
}


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
