import React from "react";
import { FilerByPriceItems } from "./style";
import Input from '../../../../Component/input';
const FilerByPriceItem = ({ filterByPriceItem, onChange, checked }) => {
  const { id, name, label } = filterByPriceItem;
  return (
    <FilerByPriceItems >
      <Input type="radio"
        name="filterByPrice"
        value={id}
        nameLabel={name}
        id={label}
        onChange={onChange}
        checked={checked}
      />
    </FilerByPriceItems >
  );
}
export default FilerByPriceItem;