import React, { useState, useCallback } from 'react';
import './CounterComponent.css';

const PureCounterComponent = () => {
  const [state, setState] = useState({
    toggle: false,
    value: 0,
  });

  const handleToggle = useCallback(() => {
setState(prevState => ({
...prevState,
toggle: !prevState.toggle,
}));
  }, []);

  const handleCounter = useCallback(() => {
setState(prevState => {
if (prevState.toggle) {
return {
...prevState,
value: prevState.value + 1,
};
}
return prevState;
});
}, []);

  console.log('Pure Component');

  return (
    <div>
<h1>Pure Component</h1>
<h3>{state.value}</h3>
<button onClick={handleToggle}>Set Toggle</button>
<button onClick={handleCounter}>Counter</button>
</div>
);
};

export default PureCounterComponent;
