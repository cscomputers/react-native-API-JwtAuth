import React, { useState, useContext } from 'react';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles.js';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import SignInput from '../../components/SignInput';
import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

// import Logo from '../../assets/logo.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default function Preload(){
    const { dispatch: UserDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignClick() {
        if(email != '' && password != ''){

            const response = await api.signIn(email, password);

            if(response.token){
                await AsyncStorage.setItem('token', response.token);

                UserDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: response.data.avatar
                    }
                });

                navigation.reset({
                    routes: [
                        { name: 'MainTab' }
                    ]
                });

            } else {
                alert("Não deu certo")
            }

        } else {
            alert("Preencha os campos")
        }
    }

    function handleMessageButtonClick(){
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        })
    }

    return (
        <Container >
            {/* <Logo width="100%" height="160" /> */}
            <InputArea>
                <SignInput 
                    iconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail" 
                    value={email}
                    onChangeText={t => setEmail(t)}
                />
                <SignInput 
                    iconSvg={LockIcon} 
                    placeholder="Digite sua senha" 
                    value={password}
                    onChangeText={t => setPassword(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}