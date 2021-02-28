import React from 'react'
import store from '../store'

const Upload = () => {

    const onUpload = event => {
        event.preventDefault();
        console.log('Picture upload is successful: ', event.target.files[0]);
        let nameOfUser = "";
        store.getState().forEach(obj => {
            if(obj.current){
                nameOfUser = obj.username;
            }
        })
        

        store.dispatch({
            type: "upload",
            payload: {
                file:  event.target.files[event.target.files.length - 1],
                username: nameOfUser,
            }
          });
        console.log("Store: ", store.getState())
    }

    return (
        <div>
            <form>
                 <label>Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={onUpload}/>
            </form>
                
   

        </div>
    )
}

export default Upload
