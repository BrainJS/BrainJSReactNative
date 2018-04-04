import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import classify from './Services/classify-service.js'
import Header from './Components/header.js'
import TextResult from './Components/textresult.js'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      LeeKernaghanResult:"",
      ACDCResult:"",
      LeeKernaghanResultColor:"lightgreen",
      ACDCResultColor:"red",
      resultShow:0
   }
  }

  ClassifyText = () => {

    let leekernaghanScore = classify.classifyLyrics(this.state.lyrics).LeeKernaghan
    let acdcScore = classify.classifyLyrics(this.state.lyrics).ACDC

    console.log(typeof(leekernaghanScore))

    if(isNaN(leekernaghanScore) || isNaN(acdcScore)) {
      this.setState({
        LeeKernaghanResult:"Unable to determine confidence level.",
        ACDCResult:"Unable to determine confidence level.",
        resultShow:100
      })
      return;
    }
    if(Number(acdcScore) > Number(leekernaghanScore)) {
      this.setState({
        LeeKernaghanResultColor:'red',
        ACDCResultColor:'lightgreen'
      })
    } else {
      this.setState({
        LeeKernaghanResultColor:'lightgreen',
        ACDCResultColor:'red'
      })
    }

    this.setState({
      LeeKernaghanResult:classify.classifyLyrics(this.state.lyrics).LeeKernaghan,
      ACDCResult:classify.classifyLyrics(this.state.lyrics).ACDC,
      resultShow:100
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Header />
      <Text style={styles.inputLyricsTextLable}>Input Lyrics:</Text>
      <TextInput
        style={{height: 150, borderColor: '#F3DF4A', borderWidth: 2}}
        onChangeText={(lyrics) => this.setState({lyrics})}
        multiline = {true}
      />
      <TouchableOpacity
          style={styles.classifyBtnStyle}
          onPress={() => this.ClassifyText()}
          underlayColor='#F3DF4A'>
          <Text style={styles.classifyTextStyle}>Classify</Text>
      </TouchableOpacity>

      <TextResult resultShow={this.state.resultShow} resultColor={this.state.LeeKernaghanResultColor} resultText={"LeeKernaghan: " + this.state.LeeKernaghanResult} />
      <TextResult resultShow={this.state.resultShow} resultColor={this.state.ACDCResultColor} resultText={"ACDC: " + this.state.ACDCResult} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLyricsTextLable: {
    fontWeight:"bold",
    fontSize:16,
    textAlign:"center",
    marginTop:"35%",
    marginBottom:"5%"
  },
  classifyBtnStyle: {
    marginRight:40,
    marginLeft:40,
    marginBottom:50,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#F3DF4A',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  classifyTextStyle: {
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center"
  }
});
