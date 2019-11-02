import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, TextInput, Image, TouchableHighlight, ListView, StyleSheet } from 'react-native';
import { modifyMessage, sendMessage, conversationUserFetch } from '../actions/AppActions'

class conversation extends Component {

    componentWillMount() {
        console.log('WillMount');
        this.props.conversationUserFetch(this.props.email);
        this.createSource(this.props.conversation);
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceivedProps');
        if (this.props.email != nextProps.email) {
            this.props.conversationUserFetch(nextProps.email);
        }
        this.createSource(nextProps.conversation);
    }

    createSource(conversation) {
        console.log('CreateSource');
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.source = ds.cloneWithRows(conversation);
    }

    _sendMessage() {
        console.log('Send');
        const { message, contactName, contactEmail } = this.props;
        this.props.sendMessage(message, contactName, contactEmail);
    }

    renderRow(text) {

        console.log(text);

        if (text.tipo === 'e') {
            return (
                <View style={styles.messageSended}>
                    <Text style={styles.textMessageSended}>{text.message}</Text>
                </View>
            )
        }

        return (
            <View style={styles.messageReceived}>
                <Text style={styles.textMessageReceived}>{text.message}</Text>
            </View>
        )
    }

    render() {
        //console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.messagesLabel}>
                    <ListView
                        enableEmptySections
                        dataSource={this.source}
                        renderRow={this.renderRow}
                    />
                </View>
                <View style={styles.inputLabel}>
                    <TextInput
                        value={this.props.message}
                        onChangeText={text => this.props.modifyMessage(text)}
                        style={styles.inputField}
                    />
                    <TouchableHighlight onPress={this._sendMessage.bind(this)} underlayColor="#fff">
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#eee4dc',
        padding: 10
    },
    messagesLabel: {
        flex: 1,
        paddingBottom: 20
    },
    inputLabel: {
        flexDirection: 'row',
        height: 60
    },
    inputField: {
        flex: 4,
        backgroundColor: '#fff',
        fontSize: 18
    },
    messageSended: {
        alignItems: 'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 40
    },
    messageReceived: {
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 40
    },
    textMessageSended: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#dbf5b4',
        elevation: 1
    },
    textMessageReceived: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#f7f7f7',
        elevation: 1
    }
});

mapStateToProps = state => {

    const conversation = _.map(state.ListConversationReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversation,
        message: state.AppReducer.message
    })
}

export default connect(mapStateToProps, { modifyMessage, sendMessage, conversationUserFetch })(conversation);