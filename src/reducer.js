import store from "./store"

export default function reducer(state = [], action){
    switch (action.type){

        case "login":
            let temp = []
            state.forEach(user => temp.push(user.username))
            //if the name is already taken
            if(temp.includes(action.payload.username)){
                state.forEach(user => user.username === action.payload.username ? user.current = true : user.current = false)
                //console.log("You've been here already")
                return state
            }else{
            //if not
                state.forEach(user => user.current = false)
                return [
                    ...state,
                    {
                        title: "user",
                        username: action.payload.username,
                        current: true
                    }
                ];
            }
        case "upload":
            return [
                ...state,
                {
                    title: "file",
                    username: action.payload.username,
                    file: action.payload.file
                }
            ];
        default:
            return state;
    }  
}