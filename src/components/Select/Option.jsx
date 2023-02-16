import React from "react";

import s from "../Select/Select.module.css";

const Option = ({ value, change }) => {
  return (
    <li className={s.select_option} onClick={() => change(value)}>
      {value}
    </li>
  );
};

export default Option;
