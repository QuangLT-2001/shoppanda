import React from "react";
import { TitleIntros } from "./style";
const TitleIntro = props => {
    const {name} = props;
    return(
        <TitleIntros className="name-intro">
            {name}
        </TitleIntros>
    );
}
export default TitleIntro;