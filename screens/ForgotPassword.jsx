import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import validationSchema from "../validation/validationSchema";
import { SafeAreaView, TextInput, Text, TouchableHighlight, Alert } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
const auth = getAuth()

const ForgotPassword = () => {
  const navigation = useNavigation()

  const handleReset = async (values) => {
    console.log('in the func');
    // try {
    //   await sendPasswordResetEmail(auth, values.email)
    //   Alert.alert("email sent to", values.email)
    //   navigation.navigate("Home")
    // } catch (err) {
    //   // actions.setFieldError('general', err.message)
    //   console.log(err);
    // }

  }
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({
        handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, isSubmitting
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
          <TouchableHighlight onPress={() => console.log('click')} style={[styles.button, styles.bgRebeccaPurple]} >
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