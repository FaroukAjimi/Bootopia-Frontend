import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/splash.png')} />
      <Image style={styles.headerImage} source={require('../../assets/salle.jpeg')} />
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Email" placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry={true} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupText}>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: '#8c8c8c',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#6b52ae',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupText: {
    color: '#8c8c8c',
    fontSize: 11,
    marginTop: 10,
  },
});

export default Login;
