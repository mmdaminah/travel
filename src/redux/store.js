import {createStore} from "redux";
import persistedReducers from "@/redux/reducers";
import {persistStore} from "redux-persist";

export const store = createStore(persistedReducers)
export const persistore = persistStore(store)