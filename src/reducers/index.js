import {token} from "../data"
const INITIAL_STATE = {
    token: token
}

export const reducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case "CHANGE_TOKEN":
            return { ...state, token: action.payload} 
    
    default:
        return state
    }
}