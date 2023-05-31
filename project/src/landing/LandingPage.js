import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Text>종이꽃</Text>
      <Text>:항상 기억할게요{'\n\n'}</Text>

      <Text>기억 바구니와 함께할{'\n'}사용자의 유형을 선택해주세요.{'\n\n\n'}</Text>
      <Button title="보호자"/>
      <Button title="치매환자"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


