import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer
});

export default entitiesReducer;
