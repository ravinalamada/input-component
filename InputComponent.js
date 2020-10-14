import React from 'react';
import Icon from "./icons"

function InputComponent(props) {
  const label = props.label || props.children;
  let helpertext;
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
  if(props.HelperText){
    helpertext = <span>{props.HelperText}</span>
    classes = `${classes} input--HelperText`;
  }

  return (
          <fieldset>
            <label>{label}</label>
            <div className="inputContainer">
              {props.startIcon
              ?
                <fieldset>
                  <Icon name={props.startIcon} />
                  <input type="text"
                    className={classes}
                    placeholder="placeholder"
                    disabled={props.disabled}
                    defaultValue={props.value}
                  />
                </fieldset>
               :
               props.endIcon ?
               <fieldset>
                <Icon name={props.endIcon} align="right" />
                <input type="text"
                  className={classes}
                  placeholder="placeholder"
                  disabled={props.disabled}
                  defaultValue={props.value}
                />
               </fieldset>
              :
              <input type="text"
                    className={classes}
                    placeholder="placeholder"
                    disabled={props.disabled}
                    defaultValue={props.value}
              />}
            </div>
            {helpertext}
          </fieldset>
  )

}

export default InputComponent;
