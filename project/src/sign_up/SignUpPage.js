import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <Text>안녕하세요.</Text>
      <Text>기억바구니와 함께{'\n'}소중한 기억을 오래 기억해요.</Text>

      <Button title="카카오로 간편 시작"/>
      <Button title="전화번호로 시작하기"/>

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


