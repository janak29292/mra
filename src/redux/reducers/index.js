import reducerA from './reducerA'
import reducerB from './reducerB'
import reducer from './reducer'

import { combineReducers } from 'redux'

const creducer = combineReducers({
    reducerA,
    reducerB,
    reducer
})

export default (state, action) => {
    return creducer(state, action)
}