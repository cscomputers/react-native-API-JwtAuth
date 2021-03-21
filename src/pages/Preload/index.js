import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles.js';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

// import Logo from '../../assets/logo.svg';

export default function Preload(){
    const { dispatch: UserDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        async function checkToken(){
            const token = await AsyncStorage.getItem('token');
            if(token){
                // validar token
                const response = await api.checkToken(token);

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

                }
            } else {
                navigation.navigate('SignIn');
            }
        }

        checkToken();
    },[]);

    return (
        <Container>
            {/* <Logo width="100%" height="160"/> */}
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    )
}