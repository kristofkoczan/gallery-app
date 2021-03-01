import { FaTimes } from 'react-icons/fa'

const Picture = ({ picture, onDelete, onLikePicture }) => {
    return (
        <div style={{margin: "0% 30% 0% 30%"}}>
            <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer', width: "80%"}}  onDoubleClick={() => onLikePicture(picture.id)}/>
            <table style={{ padding: '1em', width: '100%'}}>
                <tbody>
                <tr>
                    <th style={{width: "30%"}}>Upload date: {picture.date}</th>
                    <th style={{width: "30%"}}>{picture.likes} Like</th>
                    <th style={{width: "30%"}}><FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(picture.id) }/></th>
                </tr>
                </tbody>     
            </table>
        </div>

    )
}

export default Picture
