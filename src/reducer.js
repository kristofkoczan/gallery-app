import store from "./store"

export default function reducer(state = [], action){
    switch (action.type){
        case "login":
                if(store.getState === 2){
                    let newState = state[1];
                    return [{
                        username: action.payload.username,
                    }, newState]
                }else{
                    return [
                        {
                            username: action.payload.username,
                        }];
                }
        case 'incraseSize':
            let newState = state[0];
            if(state[1] === undefined){
                return [newState,{
                    pictureID: action.payload.pictureID,
                }]
            }else{
                if( state[1].pictureID === action.payload.pictureID){
                    return [newState]
                }else{
                    return [newState,{
                        pictureID: action.payload.pictureID,
                    }]
                }
            }
        default:
            return state;
    }  
}