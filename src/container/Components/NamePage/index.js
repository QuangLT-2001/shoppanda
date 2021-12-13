import React from "react";
import { NavLink } from "react-router-dom";
import { NamePageWrapper } from "./style";
const NamePage = props => {
    const {name, nameLink, to} = props;
    return(
        <NamePageWrapper className="name-page">
            <NavLink className="link-to" exact to={to}>{nameLink}</NavLink>
            {name}
        </NamePageWrapper>
    );
}
export default NamePage;