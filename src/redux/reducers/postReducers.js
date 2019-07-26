import {FETCH_POST, FETCH_NEW_POST, FETCH_CONTROVERSIAL_POST, FETCH_TOP_POST, FETCH_RISING_POST} from '../actions/types'

const initialState = {
    items:[]
}

export default function(state=initialState, action){
    console.log(state)
    switch(action.type){
        case FETCH_POST:
            return{
                ...state,
                items:action.payload
            }
        case FETCH_NEW_POST:
            return{
                ...state,
                items:action.payload
            }  
        case FETCH_CONTROVERSIAL_POST:
            return{
                ...state,
                items:action.payload
            } 
        case FETCH_TOP_POST:
            return{
                ...state,
                items:action.payload
            }
        case FETCH_RISING_POST:
            return{
                ...state,
                items:action.payload
            }          
        default:
            return state    
    }
}