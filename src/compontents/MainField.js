import React from 'react'
import store from '../store'
import Upload from './Upload'
import Pictures from './Pictures'

const MainField = () => {
    function check(user){
        if(user.current){
            return user.username
        }
    }

    function currentUser(){
        let nameOfUser = "";
        store.getState().forEach(user => nameOfUser = check(user))
        return nameOfUser
    }

    return (
        <div>
            <div>
                <h1>Welcome {currentUser()}</h1>
            </div>
            <Upload />
            <Pictures />
        </div>
    )
}

export default MainField
