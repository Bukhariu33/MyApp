import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import VideoFeed from './src/screens/VideoFeed';

const App = () => {
  return (
    <SafeAreaProvider>
      <VideoFeed />
    </SafeAreaProvider>
  )
}

export default App