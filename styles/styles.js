import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

    marginBottom: 20,
    fontSize: 18,
    width: 250,
    height: 50,
    borderBottomWidth: 1,
    marginEnd: -25,
  },
  inputWithIcon: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    borderRadius: 10,
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
    width: 250,
  },
  bgPowderBlue: {
    backgroundColor: 'powderblue',
  },
  bgMistyRose: {
    backgroundColor: 'mistyrose'
  },
  bgBurlywood: {
    backgroundColor: 'burlywood'
  },
  bgRebeccaPurple: {
    backgroundColor: 'rebeccapurple'
  },

  textLight: {
    color: 'snow'
  },

  buttonText: {
    fontSize: 18,
  },

  error: {
    color: 'red',
    alignSelf: 'center'
  }
});
