import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from '@/reducers'
import rootSaga from '@/sagas'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const middlewares = [sagaMiddleware, loggerMiddleware]

const store = createStore(
  reducer,
  applyMiddleware(
    ...middlewares
  )
)

sagaMiddleware.run(rootSaga)

export default store
