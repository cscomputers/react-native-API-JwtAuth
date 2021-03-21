import React, { useContext } from 'react';
import { TabArea, TabItem, TabItemCenter, AvatarIcon } from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

import { UserContext } from '../../contexts/UserContext';

export default function CustomTabBar({ state, navigation }){
    const { state: user } = useContext(UserContext);

    function handleGoTo(name){
        navigation.navigate(name);
    }

    return (
        <TabArea>
            <TabItem onPress={() => handleGoTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fil="#ffffff" />
            </TabItem>
            <TabItem onPress={() => handleGoTo('Search')}>
                <SearchIcon style={{ opacity: state.index === 1 ? 1 : 0.5 }} width="24" height="24" fil="#ffffff" />
            </TabItem>
            <TabItemCenter onPress={() => handleGoTo('Appointments')}>
                <TodayIcon width="32" height="32" fil="#4eadb3" />
            </TabItemCenter>
            <TabItem onPress={() => handleGoTo('Favorites')}>
                <FavoriteIcon style={{ opacity: state.index === 3 ? 1 : 0.5 }} width="24" height="24" fil="#ffffff" />
            </TabItem>
            <TabItem onPress={() => handleGoTo('Profile')}>
                {
                    user.avatar ? 
                    (<AvatarIcon source={{ uri: user.avatar }} />) :
                    (<AccountIcon style={{ opacity: state.index === 4 ? 1 : 0.5 }} width="24" height="24" fil="#ffffff" />)
                }
            </TabItem>
        </TabArea>
    )
}