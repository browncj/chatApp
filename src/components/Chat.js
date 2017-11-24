import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import {GiftedChat} from 'react-native-gifted-chat';

// so the props are kind of like the arguments to the constructor
// that get passed when you create the thing, they should not change
// over the lifestyle of the component


// if something is going to change over the lifestyle of the component,
// then said data should be stored in its state
class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
        };
    }

    render(){
        return(
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    // send message to your backend
                }}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

Chat.defaultProps = {
    name_var: '',
};

Chat.propTypes = {
    name_var: PropTypes.string,
};

// make this importable
export default Chat;