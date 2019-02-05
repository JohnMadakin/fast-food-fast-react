import React, {Fragment} from 'react';

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
    <Fragment>
      {inputElement}
    </Fragment>
  )
}

export default Input;
