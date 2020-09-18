import React, {Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { View, Image, Button} from 'react-native'

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nome:'Alisson',
            sobrenome: 'Barbosa'
        }
        console.log('Constructor')
    }

    componentWillMount(){
        console.log('Antes da renderização')
    }

    componentDidMount(){
        console.log('Antes da renderização')
    }

    atualizar(){
        this.setState({
            nome:'Cahu'
        })
    }

    render(){
        console.log('Renderização')
        return(
            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
                <Text>{this.state.nome}</Text>
                <Button title='Ir Cadastro' onPress={
                    () => this.atualizar()
                }/>
            </View>
        )
    }
}