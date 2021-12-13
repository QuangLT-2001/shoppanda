import React, { memo } from "react";
import { BannerItems } from "./style";
const BannerItem = props => {
    const { item: { name } } = props;
    return (
        <BannerItems className="banner-item" item={name}>
            <img className="image-item" src={name} alt="image" />
        </BannerItems>
    );
}
export default memo(BannerItem);