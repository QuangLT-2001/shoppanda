import React from "react";
const TitlePage = props => {
    const { name } = props;
    return (
        <title>{name}</title>
    );
}
export default TitlePage;