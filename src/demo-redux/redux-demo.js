const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
  if(action.type === 'increment') return {
    counter: state.counter + 1,
  };
  if(action.type === 'decrement') return {
    counter: state.counter - 1,
  };
  return state
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(`redux-demo.js - line: 14 ->> latestState`, latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})