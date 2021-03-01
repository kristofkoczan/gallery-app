import React from 'react'
import store from '../store'

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
        </div>
    )
}

export default MainField
