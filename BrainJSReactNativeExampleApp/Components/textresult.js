import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class TextResult extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View>
                <Text style={[styles.textResult, {backgroundColor: this.props.resultColor}, {opacity: this.props.resultShow}]}>{this.props.resultText}</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    textResult:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:10,
        paddingBottom:10
    }
})

export default TextResult