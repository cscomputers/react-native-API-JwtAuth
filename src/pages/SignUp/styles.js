import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #63c2d1;
    flex: 1;
    justify-content: center;
    align-content: center;
`;

export const InputArea = styled.View`
    padding: 40;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60;
    background-color: #268596;
    border-radius: 30;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50;
    margin-bottom: 20;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16;
    color: #268596;
    font-weight: bold;
`;