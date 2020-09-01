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
import { UserContext } from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default function Preload(){
    const { dispatch: UserDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignClick() {
        if(name != '' && email != '' && password != ''){

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
                })

            } else {
                alert("Não deu certo")
            }

        } else {
            alert("Preencha os campos")
        }
    }

    function handleMessageButtonClick(){
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }

    return (
        <Container >
            <BarberLogo width="100%" height="160" />
            <InputArea>
                <SignInput 
                    iconSvg={PersonIcon} 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChangeText={t => setName(t)}
                />
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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}