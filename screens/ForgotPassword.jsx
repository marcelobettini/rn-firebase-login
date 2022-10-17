import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { forgotValidationSchema } from "../validation/validationSchema";
import { SafeAreaView, TextInput, Text, TouchableHighlight, Alert } from "react-native";
import { styles } from "../styles/styles";
import { confirmPasswordReset, getAuth, sendPasswordResetEmail } from "firebase/auth"
const auth = getAuth()

const ForgotPassword = () => {
  const navigation = useNavigation()

  const handleReset = async (values) => {
    try {
      await sendPasswordResetEmail(auth, values.email, null)
      Alert.alert("email sent to", values.email)
    } catch (err) {
      Alert.alert(err)
    }

  }



  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={forgotValidationSchema}
      onSubmit={values => handleReset(values)}
    >
      {({
        handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, isSubmitting
      }) => (
        <SafeAreaView style={styles.container}>
          {errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
          <TextInput
            style={styles.input}
            placeholder='email...'
            placeholderTextColor={'darkslategray'}
            onChangeText={handleChange('email')}
            name="email"
            value={values.email}
          />
          <TouchableHighlight onPress={handleSubmit} style={[styles.button, styles.bgRebeccaPurple]} >
            {
              <Text style={[styles.buttonText, styles.textLight]}>Send email to reset</Text>
            }
          </TouchableHighlight>
        </SafeAreaView>

      )}
    </Formik>
  )
}
export default ForgotPassword