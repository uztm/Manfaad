import { StackScreenWithSearchBar } from "@/src/constants/layout"
import { defaulStyles } from "@/src/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const ArtistsScreenLayout = () => {
    return (
        <View style={defaulStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: 'Artists'
                }} />
            </Stack>
        </View>
    )
}


export default ArtistsScreenLayout