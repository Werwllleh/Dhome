import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import s from "../NavItem/NavItem.module.css";

const NavItem = ({ toggleClick, href, title }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.screen.width;

    if (screenWidth <= 970) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleClickItemMenu = () => {
    toggleClick((current) => !current);
  };

  return (
    <li className={s.nav_item}>
      <Link
        onClick={isMobile ? handleClickItemMenu : null}
        className={s.nav_link}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
