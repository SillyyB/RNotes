import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text>RNotes</Text>
        <Text>You have no notes</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    // backgroundColor: "#f1f",
    paddingTop: 20,
  },
});
