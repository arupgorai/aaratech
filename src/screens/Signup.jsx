import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Input from '../components/Input';
import {storeData} from '../utils/async-storage';

export default function SignupScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignup = async () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Enter a valid email';
    if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = {name, email, password};
      await storeData('user', user);
      navigation.replace('Home');
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
          fontSize: 26,
          fontWeight: '700',
          marginBottom: 24,
          textAlign: 'center',
        }}>
        Create Account
      </Text>

      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        error={errors.name}
      />

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

      <Input
        label="Confirm Password"
        placeholder="Re-enter password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.confirmPassword}
      />

      <TouchableOpacity
        onPress={handleSignup}
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
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 16}}
        onPress={() => navigation.replace('Login')}>
        <Text style={{textAlign: 'center', color: '#4a90e2'}}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
