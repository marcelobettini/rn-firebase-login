import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from '../styles/styles'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='EMAIL here'
        placeholderTextColor={'limegreen'}
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='PASS here'
        placeholderTextColor={'yellow'}
        onChangeText={pass => setPass(pass)}
        value={pass}
      />
      <Text>email state: {email}</Text>
      <Text>pass state: {pass}</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <MaterialIcons name='home' size={48} color={'tomato'} />
      </Pressable>
    </View>
  )
}

export default LoginScreen