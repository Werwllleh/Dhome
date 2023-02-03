import React, { useRef } from "react";
import Link from "next/link";
import { menuItems } from "../NavItem/menuItems";

import s from "../NavItem/NavItem.module.css";

const NavItem = ({ href, title }) => {
  return (
    <li className={s.nav_item}>
      <Link className={s.nav_link} href={href}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
