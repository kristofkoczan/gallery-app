
export default function reducer(state = [], action){
    switch (action.type){
        case "login":
                return [
                    {
                        username: action.payload.username,
                    }
                ];
        default:
            return state;
    }  
}