import React, {memo, useReducer} from "react";

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state.count + 1;
    default:
      return state;
  }
}

function A() {
  const [] = useReducer(countReducer, 0);
  const config = {
    text: 'aaa'
  }
  return (
    <div>
      <B config={config} onButtonClick={() => {}}/>
    </div>
  )
}

const B = memo(function B({config, onButtonClick}) {
  return (
    <button>{config.text}</button>
  )
});