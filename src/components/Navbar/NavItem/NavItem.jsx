import React, { useEffect, useRef } from "react";
import Link from "next/link";

import s from "../NavItem/NavItem.module.css";

const NavItem = ({ toggleClick, href, title }) => {
  const handleClickItemMenu = () => {
    toggleClick((current) => !current);
  };

  return (
    <li className={s.nav_item}>
      <Link onClick={handleClickItemMenu} className={s.nav_link} href={href}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
