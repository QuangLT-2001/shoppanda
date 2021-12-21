import React from "react";
import { MessageWrapper } from "./style";
export const Message = props => {
  const {name, color} = props;
  return(
    <MessageWrapper color={color}>
      {name} abcbbc
    </MessageWrapper>
  );
}
export default Message;