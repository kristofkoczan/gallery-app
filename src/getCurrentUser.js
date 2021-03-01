import store from './store'

export default function currentUser(){

    function check(user){
        if(user.current){
            return user.username
        }
    }

    let nameOfUser = "";
    store.getState().forEach(user => user.current === true ? nameOfUser = user.username : "")
    return nameOfUser
    
}