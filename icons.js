import React from 'react';
import SearchIcon from "./assests/search.svg";
import InputIcon from "./assests/input.svg";
import LabelIcon from "./assests/label.svg";
import ListIcon from "./assests/list.svg";
import LockIcon from "./assests/lock.svg";
import PhoneIcon from "./assests/phone.svg";
import SettingIcon from "./assests/settings.svg";
import LoginIcon from "./assests/login.svg";

const Icon = props => {
  let icon;
  let style = props.align = "right" ? "icon--right" : null;

  switch(props.name) {
    case 'search':
      icon = <img src={SearchIcon} className={style} />;
      break;
    case 'input':
      icon = <img src={InputIcon} className={style} />;
      break;
    case 'label':
      icon = <img src={LabelIcon} className={style} />;
      break;
    case 'list':
      icon = <img src={ListIcon} className={style} />;
      break;
    case 'lock':
      icon = <img src={LockIcon} className={style} />;
      break;
    case 'phone':
      icon = <img src={PhoneIcon} className={style} />;
      break;
    case 'setting':
      icon = <img src={SettingIcon} className={style} />;
      break;
    case 'login':
      icon = <img src={LoginIcon} className={style} />;
      break;
  }
  return Icon;
}

export default Icon;

