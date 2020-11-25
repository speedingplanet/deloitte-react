// In a browser
// import * as redux from 'redux'
const redux = require('redux');

// Action
const increment = {
  type: 'INCREMENT',
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.counter = state.counter + 1;
      return { ...state };
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

const store = redux.createStore(reducer, initialState);

store.subscribe(() => {
  const counter = store.getState().counter;
  console.log('Counter value: ', counter);
});

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
