import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems, SubMenuItems } from "./style";
export const SubMenuItem = ({ subMenuItem, root }) => {
  const { name, path } = subMenuItem;
  return (
    <SubMenuItems className="sub-menu-item">
      <NavLink
        className="sub-menu-link"
        activeClassName="active"
        to={`/${root}/${path}`}
        exact>
        {name}
      </NavLink>
    </SubMenuItems>
  );
}
const MenuItem = ({ menuItem, type }) => {
  const { name, path:root, icon, subMenu } = menuItem;

  // test
  const [test, setTest] = useState(true);
  const abc = document.querySelector('.sub-menu');
  const handleToggleClass = () => {
    if (subMenu) {
      setTest(!test)
      console.log('test', test);
    }
    else {
      setTest(true);
      console.log('test', test);
    }
  }
  // end test
  return (
    <MenuItems
      className="menu-item"
      type={type}
      subMenu={subMenu}>
      <NavLink
        to={`/${root}`}
        exact
        className="menu-link"
        activeClassName="active"
        onClick={handleToggleClass}
      >
        {icon}
        {name}
      </NavLink>
      {subMenu && <ul className="sub-menu">
        {subMenu.map(item => {
          return <SubMenuItem root={root} subMenuItem={item} key={item.id} />
        })}
      </ul>}
    </MenuItems>
  );
}
export default MenuItem;