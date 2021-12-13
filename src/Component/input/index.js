import React from 'react';
import { InputWrapper } from './style';
const Input = props => {
    const {
        type,
        name,
        value,
        placeholder,
        className,
        onChange,
        id,
        nameLabel,
        checked,
        icon,
        autocomplete
    } = props;
    return (
        <InputWrapper nameLabel={nameLabel} className="input" icon={icon}>
            <label htmlFor={id}>
                {nameLabel}
            </label>
            <input
                autoComplete={autocomplete}
                id={id}
                className={className}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                checked={checked}
            />
            {icon &&  <span className="icon">
                {icon}
            </span>}
        </InputWrapper>
    );
}
export default Input;