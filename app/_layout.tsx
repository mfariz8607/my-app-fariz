import { Stack } from "expo-router";
import { Provider } from "react-redux";
import {store} from '../store'

export default function RootLayout() {
  return (
    <Provider store={store}>
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="about" options={{ title: 'About us' }} />
            <Stack.Screen name="home" options={{ title: 'Dashboard' }} />
            <Stack.Screen name="detail"  options={{ title: 'Detail Course' }}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="course" options={{ title: 'Course' }} />
            <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        </Stack>
    </Provider>
  )
}