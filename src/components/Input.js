import React from 'react';

import Aux from '../hoc/Aux';

const Input = (props) =>  {
  let inputElement = null;
  switch(props.inputtype){
    case 'text':
    inputElement = <input {...props} />;
    break;
    case 'textarea':
    inputElement = <textarea {...props} />;
    break;
  }
  return (
    <Aux>
      {inputElement}
    </Aux>
  )
}

export default Input;
