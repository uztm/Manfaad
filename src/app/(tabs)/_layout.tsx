import { colors, fontSize } from "@/src/constants/tokens"
import { Tabs } from "expo-router"
import { StyleSheet, View } from "react-native"
import { BlurView } from "expo-blur"
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { FloatingPlayer } from "@/src/components/FloatingPlayer"

const TabNavigation = () => {
    return (
        <>

            <Tabs screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500'
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8,
                },
                tabBarBackground: () => <BlurView
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        overflow: 'hidden',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                />
            }}>
                <Tabs.Screen name="favorites" options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => <FontAwesome name='heart' size={20} color={color} />
                }} />
                <Tabs.Screen name="playlists" options={{
                    title: "Playlists",
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='playlist-play' size={28} color={color} />
                }} />
                <Tabs.Screen name="(songs)" options={{
                    title: "Songs",
                    tabBarIcon: ({ color }) => <Ionicons name='musical-notes-sharp' size={24} color={color} />
                }} />
                <Tabs.Screen name="artists" options={{
                    title: "Artists",
                    tabBarIcon: ({ color }) => <FontAwesome6 name='users-line' size={20} color={color} />
                }} />
            </Tabs>

            <View style={{
                position: 'absolute',
                bottom: 88,
                right: 8,
                left: 8,
                

            }} >
                <FloatingPlayer />
            </View>
        </>
    )
}

export default TabNavigation