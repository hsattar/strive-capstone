import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer"
import websiteReducer from "./reducers/websiteReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    user: {
        isLoggedIn: true,
        currentUser: null
    },
    website: {
        code: `<div></div>`,
        structure: {
            containers: [{
                id: '123456789',
                openingTag: `<div>`,
                closingTag: `</div>`,
                children: [],
            }],
            elements: [],
            containerOrder: ['123456789']
        },
        elementToEdit: null
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    website: websiteReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))