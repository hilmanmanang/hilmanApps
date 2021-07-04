import React from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, Alert, Button, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handlePress = function hello() {
    console.log('hello')
  }

  const pressAlert = function alrt() {
    Alert.alert("My Title", "My Body", [
      { text: "Yes", onPress: () => console.log('Yes Clicked') },
      { text: "No", onPress: () => console.log('No Clicked') },
    ])
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')}/>
      <Text style={styles.text} onPress={handlePress}>hello there</Text>
      <TouchableWithoutFeedback>
        <Image source={{
          width: 200,
          height: 200,
          uri: 'https://picsum.photos/200'
        }}/>
      </TouchableWithoutFeedback>
      <Button
        title="Click Me"
        onPress={pressAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: '800',
  }
});
