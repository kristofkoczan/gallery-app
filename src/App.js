import React, { useState } from 'react';
import store from './store'
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
        const [sizeHelp, setSizeHelp] = useState(false);
        const [sizeID, setsizeID] = useState('');

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
          comments: [
            {
              author: "Admin",
              comment: "Check out my first picture",
              createdAt: "2021-01-01",
              commentID: 1530,
            },{
              author: "user989",
              comment: "It's awesome! :D",
              createdAt: "2021-01-05",
              commentID: 212,
            }
          ]
      },
      {   
          id: 2,
          type: "picture",
          username: "Admin",
          file: "https://dbtribute.org/wp-content/uploads/2020/10/Different-Types-of-Photography.jpg",
          date: "2021-01-01",
          likes: 325,
          comments: []
      },
      {   
          id: 3,
          type: "picture",
          username: "Admin",
          file: "https://content3.jdmagicbox.com/comp/hyderabad/t2/040pxx40.xx40.181125050506.c5t2/catalogue/lax-leo-photography-hyderabad-0vyzvimzvb.jpg",
          date: "2021-01-01",
          likes: 335,
          comments: []
      },
      {   
          id: 4,
          type: "picture",
          username: "Admin",
          file: "https://mallina-studio.com/wp-content/uploads/2019/07/Learn-Digital-Photography0.jpg",
          date: "2021-01-01",
          likes: 1325,
          comments: []
      },
      {   
          id: 5,
          type: "picture",
          username: "Admin",
          file: "https://solomonturner.com/wp-content/uploads/2019/11/Photography.jpg",
          date: "2021-01-01",
          likes: 325,
          comments: []
      },
  ])

  //delete a picture
  const deletePicture = (id) => {
    if(sizeHelp && sizeID === id){
      imageControl(id, "down");
    }
    setPictures(pictures.filter((picture) => picture.id !== id))
  }
  
  //Like a picture
  const onLikePicture = (id) => {
    setPictures(pictures.map((picture) => picture.id === id ? {...picture, likes: picture.likes+1}  : picture))
  }

  //Add a comment
  const addComment = (comment, id) => {
    const seged = (comments, newComment) => {
        newComment =  {
           ...newComment,
           commentID: Math.random()*1532-1,
        }
        comments = [...comments, newComment];
        console.log(comments)
        return comments;
    }

    let date = new Date();
    let newComment = {   
      author: store.getState()[0].username,
      comment: comment,
      createdAt: JSON.stringify(date).slice(1, 11),
    }
    setPictures(pictures.map((picture) => picture.id === id ? {...picture, comments: seged(picture.comments, newComment)} : picture))
  }

  //delete a comment
  const deleteComment = (comment, pictureID, commentID) => {
    setPictures(pictures.map(
      (picture) => picture.id === pictureID 
        ? {...picture, comments: picture.comments.filter((comment) => comment.commentID !== commentID)} 
        : picture))
    //console.log(comment, "  in:\n", pictureID, " which is:\n", commentID);
  }

  //Size
  const incraseSize = (pictureID) => {
    store.dispatch({
      type: "incraseSize",
      payload: {
          pictureID: pictureID
      }
    });
    if(store.getState()[1] === undefined){
      setSizeHelp(false);
      setsizeID('');
    }else{
      setSizeHelp(true);
      setsizeID(pictureID)
    }
    console.log(store.getState())
  }
  const imageControl = (newID, way) => {
    if(way === "up"){
      newID === pictures.length ? newID = 1 : newID = newID + 1;
      console.log(newID)
    }else{
      newID === 1 ? newID = pictures.length : newID = newID = newID-1;
      console.log(newID)
    }

    setSizeHelp(true);
    setsizeID(newID)
    //console.log(newID)
  }

  //add picture
  const uploadPicture = async event => {

    let url = await preview(event);

      let date = new Date();
      const newPicture = {
          id: pictures.length+1,
          type: "picture",
          username: store.getState()[0].username,
          file: url,
          date: JSON.stringify(date).slice(1, 11),
          likes: 0,
          comments: []
      }

      setPictures([...pictures, newPicture]);  
  }  

  if(!logedin){
    return(
      <div >
        <h1 className={'centerText'}>Please log in</h1>
        <form onSubmit={handleLogin}>
          <fieldset className={'loginDiv'}>
            <label>
              <input name="name" placeholder={"Username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label><br/><br/>
            <button type="submit">Submit</button>
          </fieldset>

        </form>
      </div>
    )
  }else{
    return(
      <div>
          <form onSubmit={handleLogout}>
            <button className={'alignCenter2'} type="submit">Log out</button>
          </form>
          <MainField />
          <UploadPicture uploadPicture={uploadPicture}/>
          {pictures.length > 0 
            ?<Pictures 
                pictures={pictures} 
                onDelete={deletePicture} 
                onLikePicture={onLikePicture} 
                addComment={addComment} 
                incraseSize={incraseSize} 
                sizeHelp={sizeHelp} 
                imageControl={imageControl} 
                sizeID={sizeID} 
                deleteComment={deleteComment}/>
            : 'No picture uploaded'}
      </div>
    )
  }



}

export default App;