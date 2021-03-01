import React, { useState } from 'react';
import store from './store'
import currentUser from './getCurrentUser'
import MainField from './compontents/MainField'
import Pictures from './compontents/Pictures'
import UploadPicture from './compontents/UploadPicture'

const readURL = file => {
  return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = e => {res(e.target.result)};
      reader.onerror = e => rej(e);
      reader.readAsDataURL(file);
  });
  };

  const preview = async event => {;
    const url = readURL(event.target.files[event.target.files.length-1]);
    return await url;
  };




function App() {
  //Login
        const [username, setUsername] = useState('');
        const [logedin, setLogedin] = useState(false);

        const handleLogin = event => {
          event.preventDefault();
          if(!username){
            alert("Please add name")
            return
          }
          store.dispatch({
            type: "login",
            payload: {
                username: username
            }
          });
          if(!logedin){
            setLogedin(true);
            console.log("Bejelentkezes")
          }
          console.log(username)
          console.log(store.getState())
        }

        const handleLogout = event => {
          event.preventDefault();

          if(logedin){
            setLogedin(false);
            console.log("Kijelentkezes")
          }
        }

  //Picture Uploading
  const [pictures, setPictures] = useState([
      {   
          id: 1,
          type: "picture",
          username: "Admin",
          file: "https://images.unsplash.com/photo-1550262838-265efb9b449d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3plZ2VkfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
          date: "2021-01-01",
          likes: 325,
      },
      {   
          id: 2,
          type: "picture",
          username: "Admin",
          file: "https://dbtribute.org/wp-content/uploads/2020/10/Different-Types-of-Photography.jpg",
          date: "2021-01-01",
          likes: 325,
      },
      {   
          id: 3,
          type: "picture",
          username: "Admin",
          file: "https://content3.jdmagicbox.com/comp/hyderabad/t2/040pxx40.xx40.181125050506.c5t2/catalogue/lax-leo-photography-hyderabad-0vyzvimzvb.jpg",
          date: "2021-01-01",
          likes: 335,
      },
      {   
          id: 4,
          type: "picture",
          username: "Admin",
          file: "https://mallina-studio.com/wp-content/uploads/2019/07/Learn-Digital-Photography0.jpg",
          date: "2021-01-01",
          likes: 1325,
      },
      {   
          id: 5,
          type: "picture",
          username: "Admin",
          file: "https://solomonturner.com/wp-content/uploads/2019/11/Photography.jpg",
          date: "2021-01-01",
          likes: 325,
      },
  ])

  //delete a picture
  const deletePicture = (id) => {
    setPictures(pictures.filter((picture) => picture.id !== id))
  }
  
  //Like a picture
  const onLikePicture = (id) => {
    setPictures(pictures.map((picture) => picture.id === id ? {...picture, likes: picture.likes+1}  : picture))
  }

  //add picture
  const uploadPicture = async event => {

    let url = await preview(event);

      let date = new Date();
      const newPicture = {
          id: pictures.length+1,
          type: "picture",
          username: currentUser(),
          file: url,
          date: JSON.stringify(date).slice(1, 11),
          likes: 0,
      }

      setPictures([...pictures, newPicture]);  
  }  

  const ShowPictures = () => {
    console.log(pictures)
  }
        

  if(!logedin){
    return(
      <div>
        <h1>Please log in</h1>
        <form onSubmit={handleLogin}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }else{
    return(
      <div>
          <form onSubmit={handleLogout}>
            <button type="submit">LogOut</button>
          </form>
          <MainField />
          <UploadPicture uploadPicture={uploadPicture}/>
          {pictures.length > 0 ?<Pictures pictures={pictures} onDelete={deletePicture} onLikePicture={onLikePicture} /> : 'No picture uploaded'}
          <button onClick={ShowPictures}>Show me now</button>
      </div>
    )
  }



}

export default App;