import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    this.state.name === '' 
      ? alert('The box is empty. please enter a word to continue')
      : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
    
        <Header
          backgroundColor={'lightyellow'}
          centerComponent={{
            text: 'Text To Speech Coverter',
            style: { color: 'black', fontSize: 17.9, fontWeight: 'bold' , fontFamily:'cassandra'},
          }}
        />

        
         <Image
          style={{
            width: 300,
            height: 170,
            marginTop: 35,
            alignSelf:'center',
           borderRadius:20
          }}
          source={{
            uri:
          'https://cdn.dribbble.com/users/218750/screenshots/1943679/4_voice_over.gif'
          }}
        />
        

        <Text style={styles.title}>Enter the word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.buttonText}>Click Here !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fed0bb',
  },

  inputBox: {
    color : 'maroon',
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius: 15,
    outline: 'none',
  },
 

  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 17,
  },

  button: {
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    padding: 5,
    width: 170,
    height: 40,
    
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily:'calibri'
  },
});
