import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducers'
import rootWatcher from './root-saga'

const ReduxStore = (function () {

    let store;

    function configureStore() {
        const sagaMiddleWare = createSagaMiddleware();
        store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
        sagaMiddleWare.run(rootWatcher);
        return store;
    };

    function getStore() {
        return store;
    };
    
    function getState() {
        if(store) {
            return store.getState();
        }
    }

    return {
        configureStore: configureStore,
        getStore: getStore,
        getState: getState
    }

})();


export default ReduxStore;