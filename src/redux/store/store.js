import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from '../reducers/reducers'

export default createStore(reducers, applyMiddleware(promiseMiddleware()))
