import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk  from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer,loadState(), applyMiddleware(thunk))

store.subscribe(()=>{
   saveState({
       counter: store.getState().counter
   })
})


export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;
