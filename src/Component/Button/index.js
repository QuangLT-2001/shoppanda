import React from 'react';
import { ButtonWrapper } from './style';
const Buttons = props => {
    const { name, type, className, onClick, disabled, icon } = props;
    return (
        <ButtonWrapper
            onClick={onClick}
            className={className}
            type={type}
            disabled={disabled}
        >
            {icon}
            {name}
        </ButtonWrapper>
    );
}
export default Buttons;