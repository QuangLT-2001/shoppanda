import React from 'react';
import { ButtonWrapper } from './style';
const Buttons = props => {
    const {name, type, className, onClick, disabled} = props;
    return(
        <ButtonWrapper
        onClick={onClick}
        className={className}
        type={type}
        disabled={disabled}
        >{name}</ButtonWrapper>
    );
}
export default Buttons;