import React from 'react';
import { ChangeColorItems } from './style';
const ChangeColorItem = ({colorItem: {name, color}, className, onClick}) => {
  return(
    <ChangeColorItems onClick={onClick} nameBackground={name} className={className}>

    </ChangeColorItems>
  );
}
export default ChangeColorItem;