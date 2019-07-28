import React, { useReducer } from 'react'

function counterReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
}

const Home = () => {
  const [count, dispatchCount] = useReducer(counterReducer, 0);

  function add() {
    dispatchCount({ type: 'add' })
  }
  return (
    <div onClick={add}>{count}</div>
  )
};

export default Home
