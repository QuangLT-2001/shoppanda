import React from 'react';
import { SelectOptionWrapper,  LabelOption  } from './style';
const SelectOption = props => {
    const { option, nameSort, nameSelect, handleSelectChange, value, className } = props;
    return (
        <LabelOption className={className}>
            <label htmlFor={nameSelect}>{nameSort}</label>
            <SelectOptionWrapper value={value} id={nameSelect} onChange={handleSelectChange} name={value}>
                {option.map(item => {
                    return <option key={item.id} name={item.name} value={item.id}>
                        {item.name}
                    </option>
                })}
            </SelectOptionWrapper>
        </LabelOption>
    );
}
export default SelectOption;