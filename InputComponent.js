import React from 'react';
import icons from "./icons"

function InputComponent(props) {
  const label = props.label || props.children;
  let classes = props.value ? `input input--${props.value}` : "input";

  if(props.disabled) {
    classes = `${classes} input--di`
  }

  return (<input type="text">
          </input>
  )

}

export default InputComponent;
