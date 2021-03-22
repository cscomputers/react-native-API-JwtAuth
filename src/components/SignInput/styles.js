import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #fff;
    flex-direction: row;
    border-radius: 30px;
    border: 1px #83d6e3 solid;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
`;