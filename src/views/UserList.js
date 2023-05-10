import React from 'react';
import { Alert, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import users from '../data/data'
import { ListItem, Avatar, Button } from '@rneui/themed';
import { Icon } from '@rneui/base'


export default UserList = (props) => {

    confirmUserDeletion = (user) => {
        Alert.alert('Excluir Uusuario', 'Deseja realmente excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn(`Usuário ${user.name} foi deletado`)
                }
            },
            {text: 'Não'}
        ])
    }

    getUserItem = ({ item: user }) => {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user) }
            >
                <Avatar rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                    {getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }

    getActions = (user) => {
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange'/>}   
                />
                <Button 
                    
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red'/>}   
                />
            </>
        )
    }

    return (
        <View>
            <FlatList 
            keyExtractor={ user => user.id.toString()}
            data={users}
            renderItem={getUserItem} />
        </View>
)};