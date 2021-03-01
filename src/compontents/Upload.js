import React from 'react'
import store from '../store'

const Upload = () => {
    const readURL = file => {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = e => res(e.target.result);
            reader.onerror = e => rej(e);
            reader.readAsDataURL(file);
        });
    };

    async function awaitHelp(obj){
        let url = await readURL(obj);
        //console.log(url)
        return url;
    }


    const onUpload = event => {
        event.preventDefault();
        console.log('Picture upload is successful: ', event.target.files[0]);
        let nameOfUser = "";
        store.getState().forEach(obj => {
            if(obj.current){
                nameOfUser = obj.username;
            }
        })


        let url = awaitHelp(event.target.files[event.target.files.length - 1])


        url.then(store.dispatch({
            type: "upload",
            payload: {
                file:  event.target.files[event.target.files.length - 1],
                username: nameOfUser,
                url: url
            }
          })
        )
        console.log("Here2");
        console.log(url)
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
