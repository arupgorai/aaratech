// screens/HomeScreen.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppContext} from '../context/AppContext';

export default function HomeScreen() {
  const {user, logout} = useAppContext();

  return (
    <View style={{flex: 1, backgroundColor: '#f4f6f8', padding: 20}}>
      {/* Header */}
      <Text style={{fontSize: 26, fontWeight: '700', marginBottom: 20}}>
        Welcome Back 👋
      </Text>

      {/* User Info Card */}
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#333'}}>
          Name:
        </Text>
        <Text style={{fontSize: 16, color: '#666', marginBottom: 12}}>
          {user?.name || 'Guest'}
        </Text>

        <Text style={{fontSize: 18, fontWeight: '600', color: '#333'}}>
          Email:
        </Text>
        <Text style={{fontSize: 16, color: '#666'}}>
          {user?.email || 'Not provided'}
        </Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: '#ff4d4d',
          paddingVertical: 14,
          borderRadius: 10,
          marginTop: 30,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 16,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
