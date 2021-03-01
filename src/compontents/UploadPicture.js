import { useState } from 'react';


const UploadPicture = ({ uploadPicture }) => {


    return (
        <div>
            <form style={{margin: "3% 0%"}}>
                 <label>Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={(event) => uploadPicture(event)}/>
            </form>
        </div>
    )
}

export default UploadPicture
