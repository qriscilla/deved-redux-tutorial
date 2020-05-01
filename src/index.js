import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; // Connects our global state to App

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// import { createStore } from 'redux';

// // STORE - the globalized state

// // ACTION - what you want to do (e.g., increment the counter)
//   const increment = () => {
//     return {
//       type: 'INCREMENT'
//     }
//   }
//   const decrement = () => {
//     return {
//       type: 'DECREMENT'
//     }
//   }

// // REDUCER - checks what you want to do
//   const counter = (state = 0, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//     }
//   };
//   let store = createStore(counter);

// // Display in the console
//   store.subscribe(() => console.log(store.getState()));

// // DISPATCH - executes the action
//   store.dispatch(increment());
//   store.dispatch(decrement());
//   store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>   
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
