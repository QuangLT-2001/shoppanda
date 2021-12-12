import React, {memo} from "react";
import { PolicyItems } from "./style";
const PolicyItem = ({policyItem, className}) => {
  const {info: {name, icon, description}} = policyItem;
  return(
    <PolicyItems className={`${className} policy-item`} icon={icon}>
      <span className="icon-policy">
        {icon}
      </span>
      <div className="info">
        <h5 className="name-policy">
          {name}
        </h5>
        <p className="desc-policy">
          {description}
        </p>
      </div>
    </PolicyItems>
  );
}
export default memo(PolicyItem);