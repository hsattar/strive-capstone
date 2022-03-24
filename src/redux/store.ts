import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import undoable from 'redux-undo'
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
        past: [],
        present: {
            code: '',
            codeBlocks: [],
            elementToEdit: null
        },
        future: []
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    website: undoable(websiteReducer)
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))