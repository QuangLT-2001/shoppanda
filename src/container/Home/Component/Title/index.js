import React from "react";
import { TitleContent } from "./style";
const Title = props => {
    const {name, className} = props;
    return(
        <TitleContent className={className}>
            {name}
        </TitleContent>
    );
}
export default Title;