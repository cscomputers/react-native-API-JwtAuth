import React from 'react';
import { InputArea, Input } from './styles.js';

export default function SignInput({ iconSvg, placeholder = '', value, onChangeText, password }){
    return (
        <InputArea>
            {/* <iconSvg width="24" height="24" fill="#268596" /> */}
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#268596" 
                secureTextEntry={password}
            />
        </InputArea>
    )
}
