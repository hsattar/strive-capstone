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
        code: `<div class="default"></div>`,
        structure: [{
            id: '123456789',
            openingTag: `<div class="`,
            class: `">default`,
            closingTag: `</div>`
        }],
        elementToEdit: null
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    website: websiteReducer
})

export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))