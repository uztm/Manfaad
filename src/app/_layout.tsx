import { View, Text, } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen, Stack } from 'expo-router'
import { useSetupTrackPlayer } from '../hooks/useSetupTrackPlayer'
import { useLogTrackPlayerState } from '../hooks/useLogTrackPlayerState'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'
import { playbackService } from '../constants/playbackService'

SplashScreen.preventAutoHideAsync()
TrackPlayer.registerPlaybackService(()=> playbackService)


const App = () => {
  useLogTrackPlayerState
  const hendleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  }, [])

  useSetupTrackPlayer({
    onLoad: hendleTrackPlayerLoaded,
  })
  useLogTrackPlayerState()

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="player" options={{
        presentation: 'card',
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animationDuration: 400,
        headerShown: false
      }} />
      <Stack.Screen name='selection' />
        
    </Stack>
  )
}

export default App