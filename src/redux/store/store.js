import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './../reducers';
import rootSaga from './../middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
    rootReducer,
    composeWithDevTools(
    middleware
    )
  )

  sagaMiddleware.run(rootSaga);

export default store;