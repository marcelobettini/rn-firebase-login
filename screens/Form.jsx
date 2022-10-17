import React, { useState } from "react";
import { Formik } from "formik";
import validationSchema from "../validation/validationSchema";
import { SafeAreaView, TextInput, Text, TouchableHighlight } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
const app = initializeApp(firebaseConfig)
const auth = getAuth()

const Form = () => {
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

  return (
    <Formik
      initialValues={{ email: '', pass: '' }}
      validationSchema={validationSchema}
      onSubmit={values => { isNewUser ? handleRegister(values) : handleLogin(values) }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values, errors, touched
      }) => (
        <SafeAreaView style={styles.container}>
          {errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>)}
          <TextInput
            style={styles.input}
            placeholder='email here'
            placeholderTextColor={'green'}
            onChangeText={handleChange('email')}
            name="email"
            value={values.email}
          />
          {errors.pass && touched.pass && (<Text style={styles.error}>{errors.pass}</Text>)}
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor={'green'}
            onChangeText={handleChange('pass')}
            name="pass"
            value={values.pass}
          />
          <TouchableHighlight onPress={handleSubmit} style={styles.button}>
            {isNewUser ?
              <Text style={styles.buttonText}>Register</Text>
              :
              <Text style={styles.buttonText}>Log In</Text>
            }
          </TouchableHighlight>
          <TouchableHighlight onPress={() => setIsNewUser(prev => !prev)} style={styles.button}>
            {
              isNewUser ?
                <Text style={styles.buttonText}>I already have an account</Text>
                :
                <Text style={styles.buttonText}>I don't have an account</Text>
            }
          </TouchableHighlight>
        </SafeAreaView>

      )}
    </Formik>
  )
}

export default Form;