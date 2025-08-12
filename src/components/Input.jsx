// components/Input.js
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // Install: expo install @expo/vector-icons
import {Icon} from '../atoms';

const Input = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  error,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={{marginBottom: 16}}>
      {label && (
        <Text
          style={{
            marginBottom: 6,
            fontSize: 14,
            fontWeight: '500',
            color: '#333',
          }}>
          {label}
        </Text>
      )}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: error ? 'red' : '#ccc',
          borderRadius: 10,
          paddingHorizontal: 12,
          backgroundColor: '#fff',
        }}>
        <TextInput
          style={[
            {flex: 1, paddingVertical: 10, fontSize: 16, color: '#000'},
            style,
          ]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              type="Ionicons"
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text style={{color: 'red', fontSize: 12, marginTop: 4}}>{error}</Text>
      )}
    </View>
  );
};

export default Input;
