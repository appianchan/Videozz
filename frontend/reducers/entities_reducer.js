import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;
