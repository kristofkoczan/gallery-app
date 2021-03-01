import { FaTimes } from 'react-icons/fa'

const Picture = ({ picture, onLikePicture }) => {
    return (
        <div style={{margin: "0% 30% 0% 30%" }}>
            <img src={picture.file} alt="adminPicture" style={{cursor: 'pointer', width: "80%", display: "block", margin: "auto"}}  onDoubleClick={() => onLikePicture(picture.id)}/>
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
