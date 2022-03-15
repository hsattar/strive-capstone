import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer"
import websiteReducer from "./reducers/websiteReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: any = {
    user: {
        isLoggedIn: false,
        currentUser: null
    },
    website: {
        code: '',
        codeBlocks: [],
        elementToEdit: null
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    website: websiteReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))