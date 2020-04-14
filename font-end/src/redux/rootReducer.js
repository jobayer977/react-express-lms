import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import alertReducer from "./alert/alertReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const rootReducer = combineReducers({
	user: userReducer,
	alert: alertReducer,
});

export default persistReducer(persistConfig, rootReducer);
