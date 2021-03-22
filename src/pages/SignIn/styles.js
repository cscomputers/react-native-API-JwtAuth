import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-content: center;
    padding:20px;
`;

export const InputArea = styled.View`
    width: 100%;
    padding-top: 25%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60;
    margin-top: 10%;
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