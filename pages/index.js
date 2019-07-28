import React, {useReducer, useCallback, useContext, useRef} from 'react'
import myContext from '../components/MyContext';

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
  const context = useContext(myContext);
  const ref = useRef(null);

  function add() {
    dispatchCount({ type: 'add' })
  }
  return (
    <>
      <div onClick={add} ref={ref}>{count}</div>
      <p>{context}</p>
    </>
  )
};

export default Home
