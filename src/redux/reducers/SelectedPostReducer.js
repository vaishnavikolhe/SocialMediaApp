import { SELECTED_POST } from "../actions/actionTypes";

let initialState = 1
const SelectedPostReducer = (state=initialState,actions) =>{
    switch(actions.type){
        case SELECTED_POST:
            return actions.payload;
        default:
            return state;    
    }
}
export default SelectedPostReducer