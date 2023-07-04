import { SELECTED_POST } from "./actionTypes";

export const selectedPost = (id) => {
    return{
        type:SELECTED_POST,
        payload:id
    }
}
