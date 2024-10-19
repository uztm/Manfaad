import { FontAwesome, FontAwesome6 } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import TrackPlayer, { useIsPlaying } from "react-native-track-player"
import { colors } from "../constants/tokens"

type PlayerControlsProps = {
    style?: ViewStyle
}

type PlayerButtonProps = {
    style?: ViewStyle
    iconSize: number
}

export const PlayPouseButton = ({ style, iconSize }: PlayerButtonProps) => {
    const { playing } = useIsPlaying()

    return (
        <View style={[{ height: iconSize, }, style]}>
            <TouchableOpacity activeOpacity={0.85}
                onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
            >
                <FontAwesome6 name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
            </TouchableOpacity>
        </View>
    )
}

export const PlayPauseButton = ({ style, iconSize = 48 }: PlayerButtonProps) => {
	const { playing } = useIsPlaying()

	return (
		<View style={[{ height: iconSize }, style]}>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
			>
				<FontAwesome6 name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
			</TouchableOpacity>
		</View>
	)
}

export const SkipToNextButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToNext()}>
            <FontAwesome6 name="forward" size={iconSize} color={colors.text} />
        </TouchableOpacity>
    )
}

export const SkipToPreviusButton = ({ iconSize = 30 }: PlayerButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => TrackPlayer.skipToPrevious()}>
            <FontAwesome6 name="backward" size={iconSize} color={colors.text} />
        </TouchableOpacity>
    )
}



export const PlayerControls = ({ style }: PlayerControlsProps) => {
    return <View style={[styles.container, style]}>
        <View style={styles.row}>
            <SkipToPreviusButton iconSize={30} />
            <PlayPauseButton iconSize={48} />
            <SkipToNextButton iconSize={30} />
        </View>
    </View>
}

export const PlayerVolumeBar = ({ style }: PlayerControlsProps) => {
    return null
}

// export const PlayerRepeatToggle = ({ style, size }: PlayerControlsProps) => {

// }


const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})