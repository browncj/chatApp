import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Home extends Component {
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='John Snow'
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
    },
});

// make class importable
export default Home;