// screens/LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Input from '../components/Input'; // Reusable input from earlier

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    let newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      Alert.alert('Login Successful', `Welcome back, ${email}!`);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f6f8',
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          marginBottom: 30,
          textAlign: 'center',
        }}>
        Login
      </Text>

      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
      />

      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errors.password}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#4a90e2',
          paddingVertical: 14,
          borderRadius: 10,
          marginTop: 12,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 16,
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 16}}>
        <Text style={{textAlign: 'center', color: '#4a90e2'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 12}}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{textAlign: 'center', color: '#4a90e2'}}>
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
