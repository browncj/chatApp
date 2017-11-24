import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';


class Chat extends Component {
    render(){
        return(
            <View>
                <Text>
                    Hello {this.props.name_var}
                </Text>
            </View>
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