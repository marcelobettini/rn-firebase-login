import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { loginValidationSchema } from "../validation/validationSchema";
import { SafeAreaView, TextInput, Text, TouchableHighlight } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const Form = () => {
  const navigation = useNavigation()
  const [isNewUser, setIsNewUser] = useState(false)

  //email and password
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

  return (
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
          <TextInput
            style={styles.input}
            placeholder='email...'
            placeholderTextColor={'darkslategray'}
            onChangeText={handleChange('email')}
            name="email"
            value={values.email}
          />
          {errors.pass && touched.pass && (<Text style={styles.error}>{errors.pass}</Text>)}
          <TextInput
            style={styles.input}
            placeholder="password..."
            placeholderTextColor={'darkslategray'}
            onChangeText={handleChange('pass')}
            name="pass"
            value={values.pass}
          />
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

      )}
    </Formik>
  )
}

export default Form;