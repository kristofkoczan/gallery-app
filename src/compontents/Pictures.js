import Picture from './Picture'


const Pictures = ({ pictures, onDelete, onLikePicture}) => {
        
    return (
        <>
            {pictures.slice(0).reverse().map((picture) => (  
                <Picture key={picture.id} picture={picture} onDelete={onDelete} onLikePicture={onLikePicture} />
            ))}
        </>
    )
}

export default Pictures
