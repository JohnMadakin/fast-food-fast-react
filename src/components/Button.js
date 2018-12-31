import React from 'react';

import Aux from '../hoc/Aux';

const Button = (props) =>  {
  return (
    <Aux>
      <Button type={props.type} className={props.classname} />
    </Aux>
  )
}

export default Button;
