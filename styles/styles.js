import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    marginBottom: 50,
    fontSize: 18,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
    width: 250,
  },
  buttonText: {
    fontSize: 18
  },

  error: {
    color: 'red',
    alignSelf: 'center'
  }
});
