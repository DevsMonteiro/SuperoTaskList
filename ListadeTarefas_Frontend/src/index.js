import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import AuthOrApp from './main/AuthOrApp';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';



const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
    ));

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
