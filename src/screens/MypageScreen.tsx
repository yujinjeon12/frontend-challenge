// src/screens/MypageScreen.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MypageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mypage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
  },
});

export default MypageScreen;
