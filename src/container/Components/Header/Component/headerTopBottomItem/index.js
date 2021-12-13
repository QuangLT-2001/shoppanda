import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderTopBottomItems } from "./style";
const HeaderTopBottomItem = ({headerTopBottomItem}) => {
  const {name, path} = headerTopBottomItem;
  return(
    <HeaderTopBottomItems className="header-top-bottom-item">
      <NavLink to={path} exact className="menu-link">
        {name}
      </NavLink>
    </HeaderTopBottomItems>
  );
}
export default HeaderTopBottomItem;