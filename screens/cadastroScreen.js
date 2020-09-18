import React from 'react';
import { Text, TextInput, Button } from 'react-native'
import { View, Thumbnail } from 'native-base';
import axios from 'axios';


export default class Cadastro extends React.Component{


    constructor(props) {
        super(props);
        this.registerCall = this.registerCall.bind(this);
        this.state = {
            nome: '',
            cpf: '',
            telefone: ''
        }
    }

    async registerCall() {
        let that = this;

        const result =  axios.post('http://professornilson.com/testeservico/clientes', {
            nome: that.state.nome,
            cpf: that.state.cpf,
            telefone: that.state.telefone
      })
        console.log(that.state.nome);
        console.log(result);

        that.props.navigation.navigate('Home');
    }
    
    render() {
        return (
            <View style={{ flex: 3, justifyContent: 'center' }}>

                <Thumbnail source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

                <Text>Digite seu Nome</Text>
                <TextInput
                    onChangeText={(nome) => this.setState({ nome })}
                value={this.state.nome}
                />
                <Text>Digite seu Cpf</Text>
                <TextInput
                    onChangeText={(cpf) => this.setState({ cpf })}
                value={this.state.cpf}
                />
                <Text>Digite seu Telefone</Text>
                <TextInput
                    onChangeText={(telefone) => this.setState({ telefone })}
                value={this.state.telefone}
                />

                <Button
                    title="Salvar"
                    onPress={() => this.registerCall()}
                />
            </View>
        );
    }

}