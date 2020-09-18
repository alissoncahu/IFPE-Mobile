import React,{useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigation} from '@react-navigation/stack';
import { ListItem, Header, Button, Image } from 'react-native-elements'
import { ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

export default class ListaPessoasScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usuarios: [] };
    }

    render() {
        fetch('http://professornilson.com/testeservico/clientes')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    usuarios: result
                });
            })
        return (
            <ScrollView>
                <View>
                    <Header
                        centerComponent={{ text: 'Pessoas', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'add', color: '#fff', onPress: () => this.props.navigation.navigate('Cadastro') }}
                        
                    />
                    {
                        this.state.usuarios.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{l.cpf}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron onPress={
                                    () => this.props.navigation.navigate('Editar', {
                                        id: l.id,
                                        nome: l.nome,
                                        cpf: l.cpf,
                                        telefone: l.telefone
                                    })
                                } />
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
}