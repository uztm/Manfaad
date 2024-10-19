import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { defaulStyles, utilityStyles } from '../styles'
import { colors, fontSize, screenPadding } from '../constants/tokens'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '../constants/images'
import { FontAwesome } from '@expo/vector-icons'
import { PlayerControls, PlayerVolumeBar } from '../components/PlayerControls'
import { PlayerProgressBar } from '../components/PlayerProgressBar'

const PlayerScreen = () => {
    const [boxSize, setboxSize] = useState(0);
    const activeTrack = useActiveTrack()
    const { top, bottom } = useSafeAreaInsets()
    const isFavorite = false

    const toggleFavorite = () => { }

    if (!activeTrack) return <View style={[defaulStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={colors.icon} />
    </View>

    return (
        <View style={styles.overlayComponent}>
            <DismissPlayerSymbol />

            <View style={{ marginTop: top + 70, marginBottom: bottom }}>
                <View style={[styles.artworkImageContainer, { height: boxSize }]} onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    setboxSize(width);
                }}>
                    <FastImage source={{
                        uri: activeTrack.artwork ?? unknownTrackImageUri,
                        priority: FastImage.priority.high,
                    }} resizeMode='cover' style={styles.artworkImage} />
                </View>
            </View>

            <View >
                <View style={{ marginTop: 'auto', }}>
                    <View style={{ height: 60 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={styles.trackTitileContainer}>
                                <Text style={styles.trackTitle}>{activeTrack.title}</Text>
                            </View>
                            <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={20} color={isFavorite ? colors.primary : colors.icon} style={{ marginHorizontal: 14 }} onPress={toggleFavorite} />
                        </View>
                        {activeTrack.artist && <Text numberOfLines={1} style={[styles.trackArtistText, { marginTop: 6 }]}>{activeTrack.artist}</Text>}
                    </View>
                    <PlayerProgressBar style={{ marginTop: 32, }} />
                    <PlayerControls style={{ marginTop: 40 }} />

                </View>
                <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />

                <View style={utilityStyles.centeredRow}>
                    {/* <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} /> */}
                </View>
            </View>

        </View>
    )
}

const DismissPlayerSymbol = () => {
    const { top } = useSafeAreaInsets()

    return <View style={{
        position: 'absolute',
        top: top + 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    }}>
        <View accessible={false} style={{
            width: 50,
            height: 8,
            borderRadius: 8,
            backgroundColor: '#fff',
            opacity: 0.7
        }} />
    </View>
}

const styles = StyleSheet.create({
    overlayComponent: {
        ...defaulStyles.container,
        paddingHorizontal: screenPadding.horizontal,
        backgroundColor: 'rgba(0, 0, 0,0.5)'
    },
    artworkImageContainer: {
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 11.0,
        flexDirection: 'row',
        justifyContent: 'center',
        height: '45%'
    },
    artworkImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
    },
    trackTitileContainer: {
        flex: 1,
        overflow: 'hidden',

    },
    trackTitle: {
        ...defaulStyles.text,
        fontSize: 22,
        fontWeight: '700'
    },
    trackArtistText: {
        ...defaulStyles.text,
        fontSize: fontSize.base,
        opacity: 0.8,
        maxWidth: '90%'
    },
})

export default PlayerScreen