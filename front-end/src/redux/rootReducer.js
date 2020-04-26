import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth.reducer";
import alertReducer from "./alert/alertReducer";
import courseReducer from "./course/course.reducer";
import profileReducer from "./profile/profile.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "course", "profile"],
};

const rootReducer = combineReducers({
	auth: authReducer,
	alert: alertReducer,
	course: courseReducer,
	profile: profileReducer,
});

export default persistReducer(persistConfig, rootReducer);
