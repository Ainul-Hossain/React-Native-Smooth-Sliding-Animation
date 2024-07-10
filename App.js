// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ContinuousSlide from './ContinuousSlide';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContinuousSlide />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
