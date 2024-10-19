import { StackScreenWithSearchBar } from "@/src/constants/layout"
import { defaulStyles } from "@/src/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const PlaylistsScreenLayout = () => {
    return (
        <View style={defaulStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'PlaylistsScreen'
                }} />
            </Stack>
        </View>
    )
}


export default PlaylistsScreenLayout