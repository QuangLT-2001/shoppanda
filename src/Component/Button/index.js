import React from 'react';
import { ButtonWrapper } from './style';
const Buttons = props => {
    const {name, type, className, onClick} = props;
    return(
        <ButtonWrapper onClick={onClick} className={className} type={type}>{name}</ButtonWrapper>
    );
}
export default Buttons;