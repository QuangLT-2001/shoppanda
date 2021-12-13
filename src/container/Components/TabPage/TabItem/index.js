import React from "react";
import { NavLink } from "react-router-dom";
import { TabItems } from "./style";
const TabItem = ({tabItem}) =>  {
  return(
    <TabItems className="tab-item">
      <NavLink to={tabItem.path}>
        {tabItem.name}
      </NavLink>
    </TabItems>
  );
}
export default TabItem;