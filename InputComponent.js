import React from 'react';
import Icon from "./icons"

function InputComponent(props) {
  const label = props.label || props.children;
  const helpertext = props.helpertext && 'true';
  let classes = props.value ? `input input--${props.value}` : "input";

  if(props.error) {
    classes = `${classes} input--error`;
  }
  if(props.size) {
    classes = `${classes} input--${props.size}`;
  }
  if(props.fullWidth) {
    classes = `${classes} input--fullWidth`
  }
  if(props.row) {
    classes = `${classes} input--row`
  }

  return (
          <fieldset>
            <label>{label}</label>
            <input type="text" className={classes} placeholder="placeholder" disabled={props.disabled} ></input>
            <span className={helpertext}></span>
          </fieldset>

  )

}

export default InputComponent;
