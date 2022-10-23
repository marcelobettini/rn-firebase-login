import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from '../styles/styles'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
const LoginScreen = ({ navigation }) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='EMAIL here'
        placeholderTextColor={'limegreen'}
        onChangeText={(txt) => setUser((prev) => ({ ...prev, email: txt }))}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder='PASS here'
        placeholderTextColor={'yellow'}
        onChangeText={(txt) => setUser((prev) => ({ ...prev, password: txt }))}
        value={user.password}
      />
      <Text>email state: {user.email}</Text>
      <Text>pass state: {user.password}</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <MaterialIcons name='home' size={48} color={'tomato'} />
      </Pressable>
    </View>
  )
}

export default LoginScreen