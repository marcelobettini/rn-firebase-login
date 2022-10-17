import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';
import { Text, View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>stamo a la jom peiy... o scrin, digamos</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <MaterialIcons name="login" size={48} color="tomato" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Form")}>
        <MaterialIcons name="dynamic-form" size={48} color="tomato" />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}