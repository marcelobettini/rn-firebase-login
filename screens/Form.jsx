import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { loginValidationSchema } from "../validation/validationSchema";
import { SafeAreaView, View, TextInput, Text, TouchableHighlight, ActivityIndicator, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const Form = () => {
  const navigation = useNavigation()
  const [isVisible, setIsVisible] = useState(true)
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  //handle user state change
  const stateChange = (user) => {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(stateChange);
    return subscriber //unsubscribe on unmount
  }, [])

  const [isNewUser, setIsNewUser] = useState(false)

  const handleRegister = (values) => {
    console.log(JSON.stringify(values, null, 2));
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(userCredentials => console.log(userCredentials))
      .catch(err => console.log(err));
  }
  const handleLogin = (values) => {
    console.log(JSON.stringify(values, null, 2));
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(userCredentials => console.log(userCredentials))
      .catch(err => console.log(err));
  }
  const logout = () => {
    auth.signOut().then(info => console.log(info))

  }
  if (initializing) return <ActivityIndicator />
  if (user) return (
    <>
      <Text>Hola {user.email}</Text>
      <Pressable onPress={logout}>
        <Text>chauchis</Text>
      </Pressable>
    </>
  )

  return !user && (
    <Formik
      initialValues={{ email: '', pass: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={values => { isNewUser ? handleRegister(values) : handleLogin(values) }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values, errors, touched
      }) => (
        <SafeAreaView style={styles.container}>
          {errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>)}
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder='email...'
              placeholderTextColor={'darkslategray'}
              onChangeText={handleChange('email')}
              name="email"
              value={values.email}
              textAlignVertical='bottom'
            />
            <Ionicons name="mail-outline" size={24} color="black" />

          </View>
          {errors.pass && touched.pass && (<Text style={styles.error}>{errors.pass}</Text>)}
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder="password..."
              placeholderTextColor={'darkslategray'}
              onChangeText={handleChange('pass')}
              name="pass"
              value={values.pass}
              secureTextEntry={isVisible}
              textAlignVertical='bottom'
            />
            <Pressable onPress={() => setIsVisible(!isVisible)}>
              <Ionicons name={isVisible ? "eye-outline" : "eye-off-outline"} size={24} color="black" style={{ alignSelf: 'center' }} />
            </Pressable>
          </View>
          <TouchableHighlight onPress={handleSubmit} style={isNewUser ? [styles.button, styles.bgMistyRose] : [styles.button, styles.bgPowderBlue]}>
            {isNewUser ?
              <Text style={[styles.buttonText]}>Register</Text>
              :
              <Text style={styles.buttonText}>Log In</Text>
            }
          </TouchableHighlight>

          <TouchableHighlight onPress={() => setIsNewUser(prev => !prev)} style={[styles.button, styles.bgBurlywood]}>
            {
              isNewUser ?
                <Text style={styles.buttonText}>I already have an account</Text>
                :
                <Text style={styles.buttonText}>I don't have an account</Text>
            }
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("ForgotPassword")} style={[styles.button, styles.bgRebeccaPurple]}>
            {
              <Text style={[styles.buttonText, styles.textLight]}>Forgot password</Text>
            }
          </TouchableHighlight>


        </SafeAreaView>

      )
      }
    </Formik >
  )
}

export default Form;