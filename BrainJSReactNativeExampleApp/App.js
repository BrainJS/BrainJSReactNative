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

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      LeeKernaghanResult:"",
      ACDCResult:"",
      LeeKernaghanResultColor:"lightgreen",
      ACDCResultColor:"red",
      resultShow:0
   }
  }

  ClassifyText = () => {

    console.log(this.state.lyrics)

    let leekernaghanScore = classify.classifyLyrics(this.state.lyrics)
    let acdcScore = classify.classifyLyrics(this.state.lyrics)

    console.log(leekernaghanScore)
    console.log(acdcScore)

    if(leekernaghanScore === NaN || leekernaghanScore === null || acdcScore === NaN || acdcScore === null) {
      this.setState({
        LeeKernaghanResult:"Unable to determine confidence level.",
        ACDCResult:"Unable to determine confidence level.",
        resultShow:100
      })
      return;
    }

    if(leekernaghanScore > acdcScore) {
      this.setState({
        LeeKernaghanResultColor:'lightgreen',
        ACDCResultColor:'red'
      })
    } else {
      this.setState({
        LeeKernaghanResultColor:'red',
        ACDCResultColor:'lightgreen'
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

      <Text style={{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:"10%",
        marginTop:50,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:this.state.LeeKernaghanResultColor,
        opacity:this.state.resultShow
      }}>
        Lee Kernaghan {this.state.LeeKernaghanResult}
      </Text>
      <Text style={{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:this.state.ACDCResultColor,
        opacity:this.state.resultShow
      }}>
        ACDC: {this.state.ACDCResult}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
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
