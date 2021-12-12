import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BannerImageItems } from './style';
const BannerImageItem = ({ bannerImageItem, type }) => {
  const { name } = bannerImageItem;
  return (
    <BannerImageItems type={type}>
      <NavLink exact to="#">
        <img src={name} alt="banner right" />
      </NavLink>
    </BannerImageItems>
  );
}
export default memo(BannerImageItem);