/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

//Create an 'IncrementButton' Component
function IncrementButton({ step, increment }) {
  return (
    <button onClick={() => increment(step)}>
      +{step}
    </button>
  );
}

//Create a 'DecrementButton' Component
function DecrementButton({ step, decrement }) {
  return (
    <button onClick={() => decrement(step)}>
      -{step}
    </button>
  );
}

//Create a 'ResetButton' Component
function ResetButton({ reset }) {
  return (
    <button onClick={() => reset()}>
      Reset
    </button>
  );
}

//Create a 'SaveResultButton' Component
function SaveResultButton({ count, onSaveResult }) {
    return (
      <button onClick={() => onSaveResult(count)}>
        Save Result
      </button>
    );
  }

//Export them all
export { IncrementButton, DecrementButton, ResetButton, SaveResultButton };

