import React from 'react';
import {
    TouchableHighlight, 
    TouchableOpacity,
    View, 
    Text
} from 'react-native';
import styles from './styles.js';

const BlueButton = ({buttonText, clickEvent}) => {
    return (
        <TouchableHighlight style={styles.button}
            onPress={clickEvent}
            underlayColor="transparent">
            <View>
            
            <Text style={styles.text} testID="loginBtn">
                {buttonText}
            </Text>
            </View>
        </TouchableHighlight>
    );
}

export default BlueButton;