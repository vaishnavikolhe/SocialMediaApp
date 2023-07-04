import { createStore,applyMiddleware,combineReducers } from "redux";
import PostsReducers from "./reducers/PostsReducers";
import SelectedPostReducer from "./reducers/SelectedPostReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: PostsReducers,
    selPost : SelectedPostReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;