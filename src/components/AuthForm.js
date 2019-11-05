import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ title, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <View>
    <Spacer><Text h3>{title}</Text></Spacer>
    <Spacer>
      <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
    </Spacer>
    <Spacer>
      <Input 
        label="Password" 
        value={password} 
        onChangeText={setPassword} 
        autoCapitalize="none" 
        autoCorrect={false} 
        secureTextEntry 
      />
    </Spacer>
    <Spacer>
      <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
    </Spacer>
    {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
  </View>
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginTop: 15,
    marginLeft: 15
  },
});

export default AuthForm;
