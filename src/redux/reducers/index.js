import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import siteSetting from './siteSetting'
import userToken from './userToken'

const combinedReducers = combineReducers({
    siteSetting : siteSetting,
    userToken : userToken
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['siteSetting','userToken']},combinedReducers)
export default persistedReducers