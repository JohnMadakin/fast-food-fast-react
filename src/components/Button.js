import React from 'react';

import Aux from '../hoc/Aux';

const Button = (props) =>  {
  return (
    <Aux>
      <button type={props.type} className={props.classname} />
    </Aux>
  )
}

export default Button;
