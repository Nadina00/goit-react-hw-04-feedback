import React from 'react';
import styled from "styled-components"

export const Notification = ({message}) => {
    const Message = styled.p`
    font-size: 30px;
    margin-left: 30px;

  `;
    return(
    <div>
        <Message message= {message}>{message}</Message>
    </div>
)}