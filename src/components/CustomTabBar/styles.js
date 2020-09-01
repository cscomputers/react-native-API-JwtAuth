import React from 'react';
import styled from 'styled-components/native';

export const TabArea = styled.View`
    height: 60px;
    background-color: #4eadb3;
    flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
    width: 70;
    height: 70;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35;
    border: 3px solid #4eadb3;
    margin-top: -20;
`;

export const AvatarIcon = styled.Image`
    width: 24;
    height: 24;
    border-radius: 12;
`;